const Mutation = {
  addMessage: async (_, { input }, ctx) => {
    const message = await ctx.models.message.create(input);
    return message;
  },
};

module.exports = Mutation;
