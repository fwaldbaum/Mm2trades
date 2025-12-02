module.exports = async (interaction) => {
  const value = interaction.values[0];

  if (value === "mm2") {
    await interaction.reply(
      "Has elegido **MM2**.\n" +
      "Escribe las armas así:\n\n" +
      "`mm2: Iceblaster, Batwing, Elderwood`\n"
    );
  }

  if (value === "sab") {
    await interaction.reply(
      "Has elegido **SAB**.\n" +
      "Escribe el brainrot así:\n\n" +
      "`sab: Ohio Gyat, Skibidi Toilet`\n"
    );
  }
};
