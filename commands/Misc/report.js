const Discord = require('discord.js');
module.exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Usage: \`,report <probleme>\`')
.setColor("ff0000"));
const embed = new Discord.MessageEmbed()
.setColor('00FE98')
.setDescription('Votre plainte a été signalée! <:yes:772119320389484544>')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("ff0000")
.setAuthor(" Report", "https://media.discordapp.net/attachments/768640549564448798/775391506772262962/theeroor.gif")
.setDescription(`**${message.author.tag}** Reporteur:`)
.addField(`***Informations de l'utilisateur***`, `**Identifiant d'utilisateur:** \`${message.author.id}\`\n**Nom d'utilisateur: **\`${message.author.username}\`\n**Balise utilisateur: **\`#${message.author.discriminator}\``)
.addField("Plainte", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('775384374970417173').send(embed2); // Kanal ID 
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
module.exports.help = {
  name: 'report',
  description: 'Şikayet de bulunursunuz.',
};