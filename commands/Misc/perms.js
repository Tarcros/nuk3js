//GEREKEN MODULLER
//common-tags


const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
//Dcs Ekibi
module.exports.run = (client, msg, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR")) x = "✅";
  if (!msg.member.hasPermission("ADMINISTRATOR")) x = "❌";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "✅";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌";

  //Sunucuyu yönet //Dcs Ekibi
  if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "✅";
  if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "❌";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "✅";
  if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "❌";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "✅";
  if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "❌";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "✅";
  if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "❌";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "✅";
  if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "❌";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "✅";
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "❌";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "✅";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "❌";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "✅";
  if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "❌";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "✅";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌";

  msg.channel.send(stripIndents`
    \`\`\`md
    ${x} Admin 
${x2} Logs
${x3} Gérer le serveur
${x4} Gérer les rôles
${x5} Gérer les channels
${x6} Kick
${x7} Ban
${x8} Gérer les messages
${x9} Gérer les noms d'utilisateur
${x10} Gérer les émojis
${x11} Gérer les webhooks
\`\`\`
   `);
  msg.channel.send(
    '```md\n# Au début "❌" ceux-ci montrent que l\'autorisation n\'est pas détenue. \n# Au début"✅" ceux-ci montrent que tu n\'a pas cette autorisation. \n```'
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mes permissions"],
  permLevel: 0,
  kategori: "utilisateur"
};
//Dcs Ekibi
module.exports.help = {
  name: "perms",
  ownerOnly: "true",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "perms"
};