const Discord = require('discord.js')
module.exports.run = (bot, message, args) =>

{
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("Vous ne pouvez pas voir cette liste");
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`Il n'y a aucune personne bannie sur votre serveur ''`)
       .setColor("RED");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<:nuk3admin:753772063344558122>  Banni du serveur")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banned","banliste"],
  permLevel: 0
};
module.exports.help = {
  name: 'mybanlananlar',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'mybanlist'
};