const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const thememberCount = message.guild.memberCount;
    message.channel.send(`En tout, il y a \`${thememberCount}\` membres sur **${message.guild.name}**.`)
}

module.exports.config = {
    permission: "ADMINISTRATOR",
    command: "membercount",
    aliases: ["mc"],
    category: "adminOnly",
    cooldown: 0,
    args: false
}

module.exports.help = {
    name: "memberCount" ,
    aliases: [ "countmember", "usercount" , "membre?"]
}