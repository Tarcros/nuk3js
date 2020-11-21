const Discord = require("discord.js");
const urban = require("urban");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.reply("Veuillez saisir quelque chose!");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("Aucun résultat trouvé!")

        let urbEmbed = new Discord.MessageEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Des votes positifs", json.thumbs_up, true)
        .addField("Votes défavorables", json.thumbs_down, true)
        .setFooter(`Écrit par: тαяcяσs#4561 `);

        message.channel.send(urbEmbed)
    });


}

module.exports.help = {
    name: "urban",
    description: "Renvoie : ¯\\_\(ツ)\_\/¯ ",
      cooldown: 2,
      usage: ' ',
      permissions: false, 
      args: false
}