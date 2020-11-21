const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

let embed = new MessageEmbed();
    try {
        //declare our variables
        let timelength;
        let timer;
        let time;
        msg = message.content.split(' ');

        //split the part to see whether it is seconds, minutes, hours, or days
        timelength = msg[1].substring((msg[1].length-1), (msg[1].length));
        timer = msg[1].substring(0,(msg[1].length -1));

        //just for the embed since we modify timer later
        time = msg[1].substring(0,(msg[1].length -1));

        //modifying timer whether it is seconds, minutes, hours, or days
        switch (timelength) {
            case 's':
                timer = timer * 1000;
                timelength = 'seconde(s)';
                break;

            case 'm':
                timer = timer * 1000 * 60;
                timelength = 'minute(s)';
                break;

            case 'h':
                timer = timer * 1000 * 60 * 60;
                timelength = 'heure(s)';
                break;

            case 'd':
                timer = timer * 1000 * 60 * 60 * 24;
                timelength = 'jour(s)';
                break;

            default:
                embed.setDescription(`${message.author}, pas une entrée valide! Utilisation: \`,timer\` pour en apprendre plus.`)
                return message.channel.send(embed);
        }
        //just confirming that the timer was set to the user and sending it
        embed.setDescription(`${message.author}, votre \`timer\` a été réglée pour **${time} ${timelength}**!`)
        embed.setFooter(message.author.tag, message.author.displayAvatarURL())
        embed.setTimestamp()
        embed.setColor("36393E")
        message.channel.send(embed)
        //when it is actually waiting for the timer
        setTimeout(function() { 
            //can put 'message.channel.send(`${message.author}`);' to actually mention the user but your choice
         return message.channel.send(`${message.author}, votre \`timer\` est terminée! Ça a duré **${time} ${timelength}**!`)
            
        }, timer)
    } catch(e) {
        //just for when the correct stuff is not given i.e. .timer
        embed.setDescription(`${message.author}\n**Syntaxe:** \`,timer <nombre><s/m/h/d>\` \n**Example:** \`,timer 2h\`  <= (règle un timer sur 2 heures)`)
        return message.channel.send(embed);
    }
}
module.exports.help = {
    name: "timer",
    description: "Set a timer for a specific amount of time!",
    usage: ".timer <number><s/m/h/d>",
    cooldown: 60,
    aliases: [ "chronometre" , "minuterie" ]
}