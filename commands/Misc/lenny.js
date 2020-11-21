const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

message.channel.send("( ͡° ͜ʖ ͡°)");

message.delete();

}
module.exports.help = {
  name: "lenny",
  description: "Renvoie : ( ͡° ͜ʖ ͡°)  ",
    cooldown: 2,
    usage: ' ',
    permissions: false, 
    args: false
}