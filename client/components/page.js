import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

const Inner = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 1200px;
`;

const Page = ({ children }) => (
  <>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #fafafa;
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    ></Global>
    <Inner>{children}</Inner>
  </>
);

export default Page;
