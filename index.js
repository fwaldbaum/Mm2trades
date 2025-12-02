const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// Cargar comandos
const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.on("ready", () => {
  console.log(`Bot iniciado como ${client.user.tag}`);
});

// Slash commands
client.on("interactionCreate", async interaction => {
  if (interaction.isChatInputCommand()) {
    const cmd = client.commands.get(interaction.commandName);
    if (cmd) await cmd.run(interaction, client);
  }

  if (interaction.isButton()) {
    require("./buttons/buttonHandler")(interaction);
  }

  if (interaction.isStringSelectMenu()) {
    require("./menus/selectMenuHandler")(interaction);
  }
});

// Detectar mensajes mm2: y sab:
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;

  if (msg.content.startsWith("mm2:")) {
    const armas = msg.content.replace("mm2:", "").trim();
    const precio = 200;
    msg.reply(
      `🗡 Armas: **${armas}**\n` +
      `💰 Precio estimado: **${precio} Robux**\n\n` +
      `Crea un pase por esa cantidad y envíalo aquí.\n` +
      `🔄 Contactando a un trader…`
    );
  }

  if (msg.content.startsWith("sab:")) {
    const brainrot = msg.content.replace("sab:", "").trim();
    msg.reply(`🧠 Brainrot: **${brainrot}**\n\n🔄 Contactando a un trader…`);
  }
});

client.login(process.env.TOKEN);
