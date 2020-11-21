const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
        
let theid = message.mentions.members.first();
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

message.channel.send(`${theid.user.username} ID: \`${member.user.id}\`.`);

message.delete();

}

module.exports.help = {
    name: "id",
    description: "Renvoie l'id de la mention ",
    cooldown: 2,
    usage: '<mentionner quelqu\'un>',
    permissions: false, 
    args: true
}