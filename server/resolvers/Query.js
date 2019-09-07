const Query = {
  messages: async (_, __, ctx) => {
    const messages = await ctx.models.message.find({}).exec();
    return messages;
  },
};

module.exports = Query;
