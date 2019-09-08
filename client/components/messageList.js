import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from '@emotion/styled';

const Form = styled.form`
  label {
    margin: 1rem 0;
  }
  input {
    display: block;
    width: 10rem;
    margin: 0.5rem 0;
  }
`;

const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      text
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($text: String!) {
    addMessage(input: { text: $text }) {
      id
      text
    }
  }
`;

const MessageList = () => {
  const { data, loading, error } = useQuery(GET_MESSAGES);
  const [addMessage, { loading: mutationLoading }] = useMutation(ADD_MESSAGE);

  const [messageText, setMessageText] = useState('');

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Form
        method="POST"
        onSubmit={async e => {
          e.preventDefault();
          await addMessage({
            variables: { text: messageText },
            refetchQueries: [{ query: GET_MESSAGES }],
          });
          setMessageText('');
        }}
      >
        <label htmlFor="messageText">
          New Message
          <input
            type="text"
            name="messageText"
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
          />
        </label>
        <button type="submit">{`ADD${mutationLoading ? 'ING' : ''}`}</button>
      </Form>
      <ul>
        {data.messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </>
  );
};

export default MessageList;
