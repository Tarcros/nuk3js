const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first() //channel'da olabilir emin değilim
if (!kanal) return message.channel.send(" <a:athefalse:763187865345458176> **| Erreur** \n**Usage:** `,channelid #channel`")
message.channel.send(`**Channel id:** \`${kanal.id}\` `)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'channelid',
  description: 'Discord Code Share filan işte',
  usage: 'channelID <#channel>'
}; 