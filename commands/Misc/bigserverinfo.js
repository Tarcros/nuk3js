const { MessageEmbed } = require("discord.js");
const moment = require("moment");
//Made By. DCS
//Created By. Zukii#9999
//The Licence Of MIT
module.exports.run = async (client, message, args) => {
  const filterLevels = {
    DISABLED: "Off",
    MEMBERS_WITHOUT_ROLES: "No Role",
    ALL_MEMBERS: "Everyone"
  };

  const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "(╯°□°）╯︵ ┻━┻",
    VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
  };

  const regions = {
    brazil: ":flag_br: Brazil",
    europe: ":flag_eu: Europe",
    hongkong: ":flag_hk: Hong Kong",
    india: ":flag_in: India",
    japan: ":flag_jp: Japan",
    russia: "<:rusian:732466484533657680> Russia",
    singapore: ":flag_sg: Singapore",
    southafrica: ":flag_za: South Africa",
    sydeny: ":flag_au: Sydeny",
    "us-central": ":flag_us: US Central",
    "us-east": ":flag_us: US East",
    "us-west": ":flag_us: US West",
    "us-south": ":flag_us: US South"
  };

  const roles = message.guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString());
  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const emojis = message.guild.emojis.cache;

  const embed = new MessageEmbed()
    .setAuthor(`Server Information for ${message.guild.name}`)
    .setColor("BLUE")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField("<:nuk3global:753772063746949120> General", [
      `**❯ <:verified:759900003619045376>Name:** \`${message.guild.name}\``,
      `**❯ <:ID:751801848016535652>ID:** \`${message.guild.id}\``,
      `**❯ <:owner:751759196873031730>Owner:** \`${message.guild.owner.user.tag}\``,
      `**❯ <:region:751759197041065995>Region:** ${regions[message.guild.region]}`,
      `**❯ <a:boost:767687744889552917>Boost Level:** \`${
        message.guild.premiumTier
          ? `Level ${message.guild.premiumTier}`
          : "None"
      }\``,
      `**❯ 🔀Explicit Filter:** \`${
        filterLevels[message.guild.explicitContentFilter]
      }\``,
      `**❯ ⚠️Verification Level:** \`${
        verificationLevels[message.guild.verificationLevel]
      }\``,
      `**❯ <:servercreate:751759197145923614>Time Created:** \`${moment(message.guild.createdTimestamp).format(
        "LT"
      )} ${moment(message.guild.createdTimestamp).format("LL")} ${moment(
        message.guild.createdTimestamp
      ).fromNow()}\``,
      `**❯** <:nuk3image2:753805249445363733>[**Server Icon**](${message.guild.iconURL({ dynamic: true })})`,
      `**❯ 🔅Features:**`,
      `\`${message.guild.features.join(", ") || "None"}\``,

      "\u200b"
    ])
    .addField("Statistics", [
      `**❯ :pushpin:Role Count:** \`${roles.length}\``,
      `**❯ <:emote:759898470080577558>Emoji Count:** \`${emojis.size}\``,
      `**❯ <:emote:759898470080577558>Regular Emoji Count:** \`${
        emojis.filter(emoji => !emoji.animated).size
      }\``,
      `**❯ <a:star:757811253770190980>Animated Emoji Count:** \`${
        emojis.filter(emoji => emoji.animated).size
      }\``,
      `**❯ <:channel:759898754433679400>Text Channels:** \`${
        channels.filter(channel => channel.type === "text").size
      }\``,
      `**❯ <:song:759898607712600064>Voice Channels:** \`${
        channels.filter(channel => channel.type === "voice").size
      }\``,
      `**❯ <:tier3:751759197124952074>Boost Count:** ${message.guild.premiumSubscriptionCount || "<:noboost:765748713510928414>0"}`,
      "\u200b"
    ])
    .addField("Presence", [
      `**❯ <:members:751759196911042560>Total Member:** \`${message.guild.memberCount}\``,
      `**❯ <:humain:751759196889808897>Humans:** \`${members.filter(member => !member.user.bot).size}\``,
      `**❯ <:bot:751759197162438676>Bots:** \`${members.filter(member => member.user.bot).size}\``,
      `**❯ <:online:765645895685242891>Online:** \`${
        members.filter(member => member.presence.status === "online").size
      }\``,
      `**❯ <:idle:751759197095329822>Idle:** \`${
        members.filter(member => member.presence.status === "idle").size
      }\``,
      `**❯ <:dnd:751759197082877983>Do Not Disturb:** \`${
        members.filter(member => member.presence.status === "dnd").size
      }\``,
      `**❯ <:offline:765646063071264862>Offline:** \`${
        members.filter(member => member.presence.status === "offline").size
      }\``,
      "\u200b"
    ])
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp();
  if (message.guild.description)
    embed.setDescription("**Server Description:** ", message.guild.description);
  message.channel.send(embed);
};

module.exports.help = {
  name: "bigserverinfo"
};
module.exports.conf = {
  aliases: ["si"]
};
 