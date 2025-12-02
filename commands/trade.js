const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tradesab")
    .setDescription("Trader: confirma un trade de SAB (Brainrot)"),

  async run(interaction) {
    const boton = new ButtonBuilder()
      .setCustomId("confirmar_sab")
      .setLabel("CONFIRMO")
      .setStyle(ButtonStyle.Danger);

    await interaction.reply({
      content:
        "⚠️ El bot **NO puede devolver brainrots**.\n" +
        "¿Deseas continuar?",
      components: [new ActionRowBuilder().addComponents(boton)]
    });
  }
};
