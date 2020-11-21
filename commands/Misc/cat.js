const Commando = require('discord.js-commando');
const request = require('request'); 
const { MessageEmbed } = require("discord.js");

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("Voici votre chat choisi au hasard")
                              
                   message.channel.send(emb)  
            }
        });
    }

module.exports.help = {
    name:"cat4",
    description: "envoie des gif de chat ",
    cooldown: 2,
    usage: ' ',
    permissions: false, 
    args: false
}
