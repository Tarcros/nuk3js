const Discord = require("discord.js")
const Client = new Discord.Client

module.exports.run = async (bot, message, args) => {

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval",
        description: "Faire des calcules ",
    cooldown: 2,
    usage: '<nombre> ( + | - | * | / ) <nombre2> ',
    permissions: false, 
    args: true
      }