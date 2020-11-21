const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["hmmm"]

    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()

    .setImage(img)
    .setTitle(`De /r/${random}`)
    .setURL(`https://www.reddit.com/${random}`)
    .setColor("GREEN")



    message.channel.send(embed);




}

module.exports.help = {
    name: "hmmm",
    description: "Envoie un meme hmm",
    aliases: ["hmmmm", "mmm", 'hmm']
}