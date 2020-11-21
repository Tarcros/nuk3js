const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {
  
  if (!message.member.hasPermission('MANAGE_CHANNELS'))
  return message.channel.send('<a:athefalse:763187865345458176> **Vous devez avoir le privilège `«MANAGE_CHANNELS»` pour utiliser cette commande!**')


  const chanName = message.channel.name;
  let categoryId = message.channel.parentID
  let positions = message.channel.positions
  console.dir(positions)
  const catego = message.guild.channels.cache.find(c => c.id == categoryId && c.type == "category")
  message.channel.send(`<a:wsoon:741859194373799987> Nuk3 of the channel ${chanName} being loaded..`)
  message.channel.delete().catch();
  
 
const chan = message.guild.channels.create(chanName, {
  type: 'text',
  parent: catego,
  positions
})
  .then(channel =>
    channel.send(`<a:nuke:775509880160911430> Channel \`${chanName}\` **Nuk3d** successfully ! \nhttps://imgur.com/8cZwApK`)
  )

};
module.exports.help = {
  name: 'nuke',
  aliases: ["recreer","recreate","resetchannel","channelreset"],
  cooldown: 0,
  description: 'Permet de cloner un channel.',
  usage: '<prefix>nuke'
};