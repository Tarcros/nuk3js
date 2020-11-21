const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
  let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send(
      "❌ | Impossible de voir les invitations! Je n'ai pas assez d'autorisation!"
    );
  });

  invites = invites.array();

  let possibleinvites = [];
  invites.forEach(function(invites) {
    possibleinvites.push(
      `🔹 | ${invites.inviter.username} **| Invite:** \`${invites.uses}\``
    );
  });

  const embed = new Discord.MessageEmbed()
    .setTitle(`**<:invite:751759197087072377> INFORMATIONS SUR LES INVITATIONS DU SERVEUR 🔐**`)
    .setColor("RANDOM")
    .addField("↪ Invites Info ↩", `**${possibleinvites.join("\n")}**`)
    .setTimestamp()
    .setFooter(`Demander par: ${message.author.username}`, 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png');

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası", "ds"],
  permLevel: 0,
  kategori: "sunucu"
};
//Dcs Ekibi
module.exports.help = {
  name: "servinvite",
  description: "Sunucunuza en çok kullanıcı getirenleri sıralar.",
  aliases: [ "rankinvite" , "allinvite" , "serverinvite"]
};
 