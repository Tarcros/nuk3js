const Discord = require("discord.js")
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports.run = (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('Pas de conditions de recherche ?')
    return;
  }
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
    return console.log(e)
  }
  giphy.search(term).then(function (res) {
    // Res contains gif data!
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = {
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://images-ext-2.discordapp.net/external/9uQcQKx4mvr_rGQe7BpSf58FonVuD-5_SxnsekQgve0/https/cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png",
        "text": "Gif Search"
      },
      "image": {
        "url": msgurl
      },
      "fields": [
        {
          "name": "Recherche:",
          "value": "`" + term + "`",
          "inline": true
        },
        {
          "name": "Page URL:",
          "value": "[Gif](" + res.data[0].url + ")",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });

  });

  message.delete();
}
module.exports.help = {
    name: "gif",
    aliases: ['g'],
    description: "Donne le gif de la recherche",
    cooldown: 2,
    usage: '<Recherche>',
    permissions: false, 
    args: true
}
  

