const Discord = require("discord.js");
const config = {
  starboardChannel: "starboard",
  kategori: "🌟 STARBOARD 🌟",
  minimumStars: 1,
  defaultColour: 15844367
};
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<a:athefalse:763187865345458176> **Vous devez avoir le privilège `«Administrateur»` pour utiliser cette commande!⭐**')
  const starboard = message.guild.channels.cache.find(
    channel => channel.name === config.starboardChannel
  );

  if (!starboard) {
    await message.guild.channels.create(config.kategori, { type: "category" });
    const a = message.guild.channels.cache.find(
      m => m.name === config.kategori
    );

    await message.guild.channels
      .create(config.starboardChannel, "text")
      .then(c => {
        return c.setParent(a.id);
      });
  }

  let c = message.guild.channels.cache.find(
    channel => channel.name === config.starboardChannel
  );
  let role2 = message.guild.roles.cache.find(m => m.name === "@everyone");
  await c.createOverwrite(role2, {
    SEND_MESSAGES: false,
    READ_MESSAGES: true
  });
  setTimeout(() => {
    return c.send(
      new Discord.MessageEmbed()
        .setColor(config.defaultColour)
        .setTitle("⭐ Starboard Actif ⭐")
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.guild.name)
        .setTimestamp()
        .setDescription(
          `Le système tribord a été activé sur ce serveur . Les messages avec ⭐ réponse seront envoyés à ce channel ${config.minimumStars} !⭐`
        )
    );
  }, 3000);
  message.channel.send("Système tribord activé activé sur ce serveur <#"+c+">")
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

module.exports.help = {
  name: "starboard"
  
};