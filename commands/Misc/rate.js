const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Taguez quelqu'un pour le noter!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, Je te donnerais ${result}/10`);
} else return message.channel.send(`Je donnerais à **__${ratus.user.username}__** ${result}/10 `);

}
module.exports.help = {
  name: "rate",
  description: "Renvoie une note sur 10 ",
    cooldown: 2,
    usage: '<mentionner quelqu\'un>',
    permissions: false, 
    args: true
}