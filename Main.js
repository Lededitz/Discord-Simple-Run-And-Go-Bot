const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Set the prefix
let prefix = "!";

  client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(config.token);
