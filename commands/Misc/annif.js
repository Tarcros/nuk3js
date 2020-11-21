const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
//Dcs Ekibi
const üye = message.mentions.users.first()
if (!üye) return message.channel.send("De qui avez-vous besoin pour le taguer!")


   const embed = new Discord.MessageEmbed()
.setTitle("JOYEUX ANNIVERSAIRE MON AMI")
.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/687989890175991808/690716208936386570/emote.png")
.setFooter("Happy New Year")
.setTimestamp()
.setDescription(`😚 Hey \`${üye.username}\` Joyeux anniversaire🤩\n😘Nous vous aimons tellement soyez toujours avec nous\n🎂Bonne année!`)
message.channel.send(embed)
 message.delete()
}
exports.conf = {
  aliases: []
} //Dcs Ekibi
module.exports.help ={
  name: "happy-birthday"
}