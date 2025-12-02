module.exports = async (interaction) => {

  // Confirmar MM2
  if (interaction.customId === "confirmar_mm2") {
    await interaction.reply(
      "Perfecto. El trader te enviará un **servidor privado**.\n" +
      "Únete y entrega las armas."
    );
  }

  // Confirmar SAB
  if (interaction.customId === "confirmar_sab") {
    await interaction.reply(
      "Perfecto. Un trader te contactará para continuar el trade."
    );
  }
};
