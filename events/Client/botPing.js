const { ChannelType, Message } = require("discord.js");
const config = require("../../config");

const ExtendedClient = require("../../class/ExtendedClient");

module.exports = {
  event: "messageCreate",
  /**
   *
   * @param {ExtendedClient} client
   * @param {Message<true>} message
   * @returns
   */
  run: async (client, message) => {
    if (message.author.bot || message.channel.type === ChannelType.DM) return;

    if (!config.handler.commands.prefix) return;

    let prefix = config.handler.prefix;

    if (config.handler?.mongodb?.enabled) {
      try {
        const guildData = await GuildSchema.findOne({
          guild: message.guildId,
        });

        if (guildData && guildData?.prefix) prefix = guildData.prefix;
      } catch {
        prefix = config.handler.prefix;
      }
    }

    if (message.content.startsWith(`<@${client.user.id}>`)) {
      return message.reply({
        content: `my prefix is \`/\`, type </help:1216844652255117443> for more information`,
      });
    }
  },
};
