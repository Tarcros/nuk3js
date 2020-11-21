const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  var color = args[0];
  var error = args[0];
  var renkResimi = `https://dummyimage.com/1920x1080/${color}/ffffff&text=%20`;

  if (!error) {
    const renkYok = new MessageEmbed()
      .setColor("RED")
      .addField(
        `**${client.user.username} | Commande de couleur**`,
        `Veuillez spécifier une couleur!\nUsage: \` ,color #ffffff\``
      )
      .setFooter(client.user.username)
      .setThumbnail(client.user.avatarURL)
      .setTimestamp();

    message.channel.send(renkYok);
  }
  if (color) {
    message.channel.send(
      new MessageEmbed()
        .setColor(color)
        .setTitle(`**Demande ${args[0]} Couleur**`)
        .setURL(renkResimi)
        .setImage(renkResimi)
        .setFooter('Nuk3 - Color ', 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png')
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}; //Dcs Ekibi

module.exports.help = {
  name: "color",
  
};