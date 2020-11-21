const Discord = require("discord.js")
 
module.exports.run = async(client,message,args) => {

    let snip = client.snipe.get(message.channel.id)

    if(!snip) return message.channel.send(":x: Rien trouver.")

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(snip.user,snip.profilephoto)
    .setDescription(`**Message:**\`${snip.msg}\``)
    if(snip.image) embed.setImage(snip.image)

    message.channel.send(embed)
}


module.exports.help = {
    name:"snipe",
    description: "Snipe les derniers message supprimer",
    usage: "snipe",
    category: "fun"
}