const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
      .setTitle(`Emojis sur ${message.guild.name}.`)
      .setDescription(
        `**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Animé [${Animated}]**:\n${EmojisAnimated}\n\nEn tout: **[${OverallEmojis}]**`
      )
      .setColor(`RANDOM`)
      .setFooter('Nuk3 - Emoji List', 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png');
    message.channel.send(Embed);
  },


module.exports.help = {
name: "emojilist",
  description: "View all emojis in the guild",
  category: "utility",
  aliases: [ "emotelist" , "allemoji" , "allemotes"]
}