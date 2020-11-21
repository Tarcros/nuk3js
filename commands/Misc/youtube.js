//GEREKEN MODÜLLER: 
//youtube-thumbnail
//youtube-search

module.exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var search = require("youtube-search");
    var youtubeThumbnail = require("youtube-thumbnail");
    const query = args.join(" ");
    var opts = {
      maxResults: 1, //Dcs Ekibi
      key: "AIzaSyDNOt5evQAVb8RSQNNBlFB3d3eeu-GOH2M"
    };
  
    search(query, opts, function(err, results) {
      if (err) return console.log(err);
  
      var output = new Discord.MessageEmbed();
      var thumbnail = youtubeThumbnail(results[0].link).high.url;
      output.setThumbnail(thumbnail);
      output.setThumbnail(
        "https://i.postimg.cc/W1b1LW13/youtube-kids-new-logo.png"
      );
      output.setTitle("📺 Recherche Youtube 📺");
      output.addField("🎥 Titre de la vidéo", results[0].title);
      output.addField(`📃 Liens de la vidéo`, `[${results[0].title}](${results[0].link})`);
      output.addField("🔠 Nom de la chaîne", results[0].channelTitle);
      output.addField("<:youtube:765038169393332244> Description de vidéo", results[0].description);
      output.setColor("ff0000");
      message.channel.send({ embed: output });
    });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yt", "youtube", "Youtube"]
  };
  //Dcs Ekibi
  module.exports.help = {
    name: "youtube",
    aliases: ["yt", "youtube", "Youtube"],
    description: "youtubeda arama yaparsýnýz.",
    usage: "youtube <search>"
  };