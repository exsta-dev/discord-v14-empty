const {
  Discord,
  EmbedBuilder,
  ChannelType,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputStyle,
  TextInputBuilder,
  InteractionType,
  PermissionsBitField,
  StringSelectMenuBuilder,
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  Client,
  ChatInputCommandInteraction,
} = require("discord.js");
const Config = require("../../config.json");
module.exports = {
  slash: true,
  data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("Botun yardım menünüsü gösterir.")
    .setDMPermission(false),
    /**
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  async execute(client, interaction) {

    const Embed = new EmbedBuilder()
      .setColor("Blurple")
      .setAuthor({
        name: `${client.user.username} | Yardım menüsü`,
        iconURL: client.user.avatarURL(),
      })
      .setDescription(`Slash komut örneği`)
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.avatarURL(),
      })
      .setTimestamp();

    await interaction.reply({ embeds: [Embed] });

  },
};
