const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  var id = user.id
  var gid = message.guild.id;
  var ses = db.fetch(`sesstats1_${user.id}_${message.guild.id}`) || `Seste Hiç Durmamışın !`
  
  if(user.bot === true) { message.channel.send(new Discord.MessageEmbed()
                        .setDescription("Botların Ses/Mesaj Süreleri Sayılmıyor !")
                        .setColor("ff0000"))}  
 
  else 
  message.channel.send(new Discord.MessageEmbed()
  .setColor("00FFBF")
  .setAuthor(`${user.username}`,"https://cdn.discordapp.com/attachments/768640549564448798/774850753054507008/lb1.png")
  .setThumbnail(user.avatarURL)                     
  .setTitle(`${client.user.username} | Commande Bot Stats`)               
  .addField(` Commandes réalisé:`, `\`${db.fetch(`puan_${user.id}_${message.guild.id}`) || 0}\``)
  .addField(`Statistiques Audio:`, `\`${ses.saat || 0} Heures, ${ses.dakika || 0} Minutes, ${ses.saniye || 0} Secondes\``)     
  .setTimestamp())

    
    
    
  
  
};

module.exports.help = {
  name: "statsnuk3"
}; 