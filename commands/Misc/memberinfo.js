const Discord = require('discord.js');
const moment = require('moment');

function emoji (id) {
    return client.emojis.cache.get(id).toString()
}

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Ne pas déranger';
    if (member.presence.status === 'online') member.presence.status = 'En ligne';
    if (member.presence.status === 'idle') member.presence.status = 'Inactif';
    if (member.presence.status === 'offline') member.presence.status = 'Déconnecter';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('GREEN')
    .setImage(member.user.displayAvatarURL())
    .addField("ID du Membre ",member.id)
    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
    .addField("Compte créé le:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('A rejoint le serveur le', `${joineddate} \n> Il y a ${joined} jour(s)`)
    .addField("Status", status)
    .setFooter('Nuk3 - Member-info', 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png');

    message.channel.send(userEmbed);
}

module.exports.help = {
    name: "memberinfo",
    description: "Shows the information of a member/user",
    usage: ",memberinfo",
    accessableby: "Members",
    aliases: ['userinfo']
}