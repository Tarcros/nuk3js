const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.MessageEmbed()
.setColor("#00f00")
.setDescription(`${message.author} a décidé de se suicider 💔 REPOSE EN PAIX`)

message.channel.send(emb)

} else {

let emb = new Discord.MessageEmbed()
.setColor("#00f00")
.setDescription(`${killed} a été tué par ${message.author} 💔 REPOSE EN PAIX`)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill",
  description: "tue la personne mentionner ",
    cooldown: 2,
    usage: '<mentionner quelqu\'un>',
    permissions: false, 
    args: false
}
