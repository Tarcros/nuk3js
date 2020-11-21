const Discord = require('discord.js')
const arraySort = require("array-sort")
const table = require("table")



module.exports.run =async (bot, message, args) => {

let invites = await message.guild.fetchInvites().catch(error => { 
    return message.channel.send("<a:athefalse:763187865345458176> **| Une error a été détecté alors je ne peux pas réalisé cette commande.**")

})



invites = invites.array();

arraySort(invites, 'uses', { reverse: true })

let possibleInvites = [[ '**↪Inviters**', '**| Nombre d\'invites↩**']]
    invites.forEach(function(invite) {
    possibleInvites.push(
        [[`🔹 **| ${invite.inviter.username} **| Invite(s): \`${invite.uses}\``]]
    );

})

let LeaderEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.addField("**<:invite:751759197087072377> Leaderboard invites**", possibleInvites)
.setFooter('Nuk3 - Leaderboard Invites', 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png');
message.channel.send(LeaderEmbed)
}
module.exports.help = {
    name: "leaderboardinvite",
    description: "Top de personne ayant le plus d'invitations sur le server",
    aliases: [ "leadinvite", "leaderinviter", "topinvite" , "bestinviter" ]

}

