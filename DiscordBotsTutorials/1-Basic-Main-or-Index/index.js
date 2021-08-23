// Discord JS API V.13

/*
  npm install discord.js
*/

const Discord = require("discord.js");
const intents = new Discord.Intents(32767); // You can check the number of intents, here: https://ziad87.net/intents/
const client = new Discord.Client({ intents });;
const config = require('./config.json');

// set prefix variable.
let prefix = config.prefix;

// Ready Bot.
client.on("ready", () => {
    console.log('Bot On :D');   
});

// Command registration system.
client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    // If you do not have to return nothing
    if(!message.content.startsWith(prefix)) return;
    // If it is a bot, it will not return anything
    if(message.author.bot) return;

    // Command Hello World!
    if (message.content.startsWith(prefix + "helloworld")) {

      message.channel.send("Hello World!")

    };

});

client.login(config.token);
