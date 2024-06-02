const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");
const config = require("../../../config");

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("help")
    .setDescription("View the list of commands!"),
  options: {
    cooldown: 15000,
  },
  /**
   * @param {ExtendedClient} client
   * @param {ChatInputCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    await interaction.deferReply();

    let prefix = config.handler.prefix;

    if (config.handler?.mongodb?.enabled) {
      try {
        const data = await GuildSchema.findOne({
          guild: message.guildId,
        });

        if (data && data?.prefix) prefix = data.prefix;
      } catch {
        prefix = config.handler.prefix;
      }
    }

    await interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setTitle("Help command")
          .setDescription(
            `I am currently on **${client.guilds.cache.size} servers**!`
          )
          .addFields(
            {
              name: "Information",
              value: `> </help:1215366459711037582>`,
            },
            {
              name: "Utility",
              value: `> </ping:1215366459711037583>`,
            }
          )
          .setColor(config.embed.color),
      ],
    });
  },
};
