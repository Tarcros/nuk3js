const Discord = module.require("discord.js")
const weather = require("weather-js")
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**Veuillez entre une localisation valide!**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embed = new Discord.MessageEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Météo pour ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Fuseau horaire", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Type de degré", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Température", `${current.temperature}`, true)
           .addField("Se sent comme", `${current.feelslike} Degrés`, true)
           .addField("Les vents", current.winddisplay, true)
           .addField("Humidité", ` ${current.humidity}%`, true)
           .addField("Jour", `${current.day}`, true)
           .addField("Date", `${current.date}`, true)
           
           //Display when it's called
           message.channel.send(embed)

    });

    message.delete();
    
    }
module.exports.help = {
    name: "weather",
    aliases: ['w', 'météo', 'meteo', 'méteo', 'metéo'],
    description: "Météo ",
    cooldown: 2,
    usage: '<Ville>',
    args: true
}