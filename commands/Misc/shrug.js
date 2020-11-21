const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

message.channel.send("¯\\_\(ツ)\_\/¯");

message.delete();

}
module.exports.help = {
  name: "shrug",
  description: "Renvoie : ¯\\_\(ツ)\_\/¯ ",
    cooldown: 2,
    usage: ' ',
    permissions: false, 
    args: false
}