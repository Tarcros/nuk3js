
const { Client, Collection, DiscordAPIError } = require('discord.js');
const { prefix, token } = require('./config');
const Discord = require('discord.js')
const { readdirSync } = require("fs");
const Canvas = require('canvas');
const db = require('quick.db')
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
  return ctx.font;
}

//const antispam = require('better-discord-antispam/ANTIspam'); // Requiring this module.
const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection())

function emoji (id) {
  return client.emojis.cache.get(id).toString()
}

const loadCommands = (dir = "./commands/") => { //MODULE EXPORTE.HELP
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
    };
  
  })
}
loadCommands();

client.on('guildCreate', guild => { //MSG DE BVN QUAND LE BOT REJOIN
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send("[❁]Merci de m'avoir invité à votre serveur ! :tada: \n★-Je suis <@735499202582413342>, mais tu peux m'appeler __Nuk3Cl3ar__ aussi :eyes: \n★--Tout d'abord veuillez me **configuré** en vous aidant de la commande \`,config\`\n★---Puis me donner **les permissions nécessaires** pour que je puisse réaliser des commandes de modération. \`Prefix\`: **,**\n★----Après cela vous pourriez commencer à m'utiliser :grin: !\n                                                                    『••✎••』\n **__ :warning: Il vous est conseillez de me configurer pour éviter le maximum de problèmes...__**")
})

client.on("ready", async () => {
  client.channels.cache.get("750146501480808539").join()
  }) 

  client.on("ready", async () => {
  client.channels.cache.get("734528341603909692").join()
  })
  ////////canvas//////

 

client.on('guildMemberAdd', async member => { //WELCOME DEV NUK3 (NUL)
	const channel = member.guild.channels.cache.find(ch => ch.id === '736328426453073961');
	if (!channel) return;

	const canvas = Canvas.createCanvas(710, 240);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Nuk3Welcome.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(350, 120, 110, -30, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 10, 10, 500, 900);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Nuk3Welcome.jpg');

	channel.send(attachment);
});

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === "775157492413366272");
  let data = await canva.welcome(member, {
    link:
      "https://media.discordapp.net/attachments/768640549564448798/775157298716082195/eRa_2.png?width=1443&height=481"
  });

  const attachment = new Discord.MessageAttachment(data, "Nuk3Welcome");

  channel.send(`Welcome To The Server:, ${member.user.username}!`, attachment);
});

client.on("ready", async () => {
  let dc = require("discord.js")
  let csc = client.channels.cache.get("775968804416651294")
  setInterval(() => {
  let cse = new dc.MessageEmbed() 
  .setTitle("<:stats:767214446052769843> Bot StatisticC")
  .setColor("GREEN")
  .setTimestamp()
  .addField("<a:server:741847049221177364> Total Guilds", client.guilds.cache.size)
  .addField("<:channel:759898754433679400> Total Channels", client.channels.cache.size)
  .addField("<:member:741849422669021217> Total Users", client.users.cache.size)
  .setThumbnail(client.user.avatarURL())
  csc.send(cse)
  }, 3600000)
  })
   


const config = {
  starboardChannel: "starboard",
  minimumStars: 1,
  defaultColour: 15844367
};


client.on("messageReactionAdd", async (reaction, user) => { //REACTION ADD
  if (reaction.message.partial) await reaction.messages.fetch();
  checkReaction(reaction, user, +1);
});

client.on("messageReactionRemove", async (reaction, user) => { //REACTION REMOVE
  if (reaction.message.partial) await reaction.messages.fetch();
  checkReaction(reaction, user, -1);
});


async function checkReaction(reaction, user, starAmount) { //STAR BOARD
  let message = reaction.message;
  let image =
    message.attachments.size > 0
      ? await extension(message.attachments.array()[0].url)
      : "";

  if (reaction.emoji.name !== "⭐") return;

  if (message.author.bot)
    return message.channel.send(
      `${user} Messages de bot non compris tribord !`
    );

  if (image === "" && message.cleanContent.length < 1)
    return message.channel.send(
      `${user} Messages vierges non inclus avec tribord!`
    );
  let starboard = message.guild.channels.cache.find(
    channel => channel.name === config.starboardChannel
  );

  let starCount = message.reactions.cache.get(reaction.emoji.name).count;
  if (starCount >= config.minimumStars) {
    let newEmbed = new Discord.MessageEmbed()
      .setColor(config.defaultColour)
      .setDescription(message.cleanContent)
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .addField("Message d'origine", `[Revoir](${message.url})`)
      .setTimestamp(new Date())
      .setFooter(`⭐ ${starCount}`);

    if (image) newEmbed.setImage(image);

    await starboard.send({ embed: newEmbed });
  }
}
function extension(attachment) {
  let imageLink = attachment.split(".");
  let typeOfImage = imageLink[imageLink.length - 1];
  let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
  if (!image) return "";
  return attachment;
}

client.on("guildMemberAdd", async member => { //WELCOME
  const channel = member.guild.channels.cache.find(ch => ch.id === "739708845756252202");
  let data = await canva.welcome(member, {
    link:
      "https://media.discordapp.net/attachments/751521743562211409/764646299776843816/eRa_2.png?width=1443&height=481"
  });

  const attachment = new Discord.MessageAttachment(data, "Nuk3Welcome.jpg");

  channel.send(`**Welcome To The Server:, \`${member.user.username}\`! Go read <#739711514226982933> !**`, attachment);
});

client.on("guildMemberAdd", async member => { //WELCOME
  const channel = member.guild.channels.cache.find(ch => ch.id === "699088055683907606");
  let data = await canva.welcome(member, {
    link:
      "https://media.discordapp.net/attachments/751521743562211409/764646299776843816/eRa_2.png?width=1443&height=481"
  });

  const attachment = new Discord.MessageAttachment(data, "Nuk3Welcome.jpg");

  channel.send(`Welcome To The Server: **Discord Bot Testing Server** \`${member.user.username}\`** !**`, attachment);
});

client.on("guildMemberRemove", async member => { //LEAVE
  const channel = member.guild.channels.cache.find(ch => ch.id === "761581869153517578");
  let data = await canva.welcome(member, {
    link:
      "hhttps://cdn.discordapp.com/attachments/746894327304683600/764669754953957386/Jazz_by_link_1.png"
  });

  const attachment = new Discord.MessageAttachment(data, "Leave.jpg");

  channel.send(`<a:athefalse:763187865345458176> **| Good Bye \`${member.user.username}\` ...**`, attachment);
});



client.on('ready', () => { //ANTI SPAM (OFF)
  
  //antispam(client, {
   // limitUntilWarn: 9, //  La quantité de messages autorisés à envoyer dans l'intervalle (temps) avant d'obtenir un avertissement.  
    //limitUntilMuted: 15, //  La quantité de messages autorisés à envoyer dans l'intervalle (temps) avant d'obtenir un muet.  
   // interval: 2000, //  L'intervalle (heure) auquel les messages sont envoyés. Pratiquement, si le membre X a envoyé plus de 5 messages en 2 secondes, il est coupé. (1000 millisecondes = 1 seconde, 2000 millisecondes = 2 secondes, etc.)  
   // warningMessage: "veuillez éviter de spam s'il vous plaît.", //  Message que vous recevez lorsque vous êtes prévenu!  
    //muteMessage: "a été muté car nous n'aimons pas trop les gens avec ce type de comportement..", //  Message envoyé après que le membre X a été puni (mis en sourdine).  
    //maxDuplicatesWarning: 12, //  Lorsque les gens envoient du spam au même message, cela se déclenche lorsque le membre X envoie plus de 7 messages ou plus. 
   // maxDuplicatesMute: 15, //  La limite à laquelle le membre X est mis en sourdine après avoir envoyé trop de messages (10+).  
   // ignoredRoles: ["Admin"],//  Les membres avec ce ou ces rôles seront ignorés s'ils l'ont. Suggérez de ne pas ajouter cela à des gars aléatoires. Il est également sensible à la casse.  
    //ignoredMembers: ["Mavis#2389"], //  Ces membres sont directement concernés et ils n'ont pas besoin d'avoir le rôle ci-dessus. Bon pour les farces secrètes.  
   // mutedRole: "Muted", //  Ici vous mettez le nom du rôle qui ne devrait pas laisser les gens écrire / parler ou quoi que ce soit d' autre dans votre serveur. S'il n'y a pas de rôle défini, par défaut, le module tentera de créer le rôle pour vous et le définira correctement pour chaque canal de votre serveur. Il sera nommé "muet".  
   //timeMuted: 1000 * 600, //  C'est combien de temps le membre X sera mis en sourdine. s'il n'est pas défini, la valeur par défaut serait de 10 min.    
    //logChannel: "logs"  //  C'est le canal vers lequel tous les rapports sur le spam sont envoyés. S'il n'est pas configuré, il tentera de créer le canal.  
  //});
  //client.on('message', msg => {   
    //client.emit('checkMessage',  msg); //  Ceci exécute le filtre sur tout message reçu par le bot dans toutes les guildes. 
    
    //  Reste de votre code
  //})
  console.log(`Le bot ${client.user.tag} est en ligne!`);
});

client.on("message", async message => { // ANTILINK
  let uyarisayisi = await db.fetch(`Anti pub (v2)${message.author.id}`);
  let reklamkick = await db.fetch(`Anti pub (v2)${message.guild.id}`)
  let kullanici = message.member;
  if (reklamkick == 'off') return;
  if (reklamkick == 'on') {
      const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
      if (reklam.some(word => message.content.toLowerCase().includes(word))) {
          if (!message.member.hasPermission("MANAGE_GUILD")) {
              message.delete();
              db.add(`Anti pub (v2)${message.author.id}`, 1) //uyarı puanı ekleme
              if (uyarisayisi === null) {
                  let uyari = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setFooter('Système de kick pub', client.user.avatarURL)
                      .setDescription(`<@${message.author.id}> Vous avez été pris dans le système de kick publicitaire! Vous serez expulsé si vous continuez à faire de la publicité (1/3)`)
                      .setTimestamp()
                  message.channel.send(uyari)               
}
              if (uyarisayisi === 1) {
                  let uyari = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setFooter('Système de kick pub', client.user.avatarURL)
                      .setDescription(`<@${message.author.id}> **Vous avez été pris dans le système de kick publicitaire! Vous serez expulsé si vous continuez à faire de la publicité (2/3)**`)
                      .setTimestamp()
                  message.channel.send(uyari)
              }
              if (uyarisayisi === 2) {
                  message.delete();
                  await kullanici.kick({
                      reason: `Système de kick publicitaire`,
                  })
                  let uyari = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setFooter('Système de kick pub', client.user.avatarURL)
                      .setDescription(`<@${message.author.id}> a été puni pour avoir reçu 3 avertissements publicitaires. S'il le fait encore une fois, il sera banni. <a:theconfig:747687379707625524>`)
                      .setTimestamp()
                  message.channel.send(uyari)
              }
              if (uyarisayisi === 3) {
                  message.delete();
                  await kullanici.ban({
                      reason: `Système de ban des publicités`,
                  })
                  db.delete(`Anti pub (v2)${message.author.id}`)
                  let uyari = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setFooter('Système de kick', client.user.avatarURL)
                      .setDescription(`<@${message.author.id}> Banni pour avoir continué après avoir été expulsé.<a:theconfig:747687379707625524>`)
                      .setTimestamp()
                  message.channel.send(uyari)
              }

          }
      }
  }
}); 

client.on('message', message => { //PREFIX

  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();
//Si la command n'existe pas elle va rentré dans sa ↓ et elle va rien envoyé

//pour vérifier si le nom de la command existe
 const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
 if (!command) return;

 if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Tu n'a pas les permissions requis pour réalisé cette commande!")

//Pour les argument , c'est a dire si les condition sont pas remplis (exemple: ,say !!! < sa veux dire qu'il y eux aucun message)
if (command.help.args && !args.length) {
  let noArgsReply = ` :no_entry_sign:  **| Tu as mal exécuté la commande vérifie là ${message.author}.**`;
  //Le message d'usage va etre envoyé grace a cette ligne : ↓
if (command.help.usage) noArgsReply += `\nVoici comment utliser la commande: \`${prefix}${command.help.name} ${command.help.usage}\``

  return message.channel.send(noArgsReply)
}

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;
  

if (tStamps.has(message.author.id)) { 
  const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

  if (timeNow < cdExpirationTime) {
    timeLeft = (cdExpirationTime - timeNow) / 1000;
    return message.reply(`Veillez attendre **${timeLeft.toFixed(0)} seconde(s)** avant de ré-utilisé la commande \`${command.help.name}\`.`);
  }
}

  tStamps.set(message.author.id, timeNow);
  //Delete le cooldown 
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

 command.run(client, message, args);

});


//simple, pour faire une nouvelle commande tu fait: else if (message.content === `${prefix}Nom de la commande`) {
// message.channel.send('message de réponse');
//}


client.on('message', msg => { //SNIPE
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
})
  client.snipe = new Map()
  client.on("messageDelete", async(message,channel) => {
    if(message.author.bot) return;
    if(!message.guild) return;
    client.snipe.set(message.channel.id, {
      msg:message.content,
      user:message.author.tag,
      profilephoto:message.author.displayAvatarURL(),
      image:message.attachments.first() ? message.attachments.first().proxyURL : null
    })
  })

  const ms = require("parse-ms")
  //MESAJ-TOP
  client.on("message", async message => {
  if (message.content.length > 5) {
  //DCS BY NAİROBİ
    if(message.author.bot) return;
      db.add(`puan_${message.author.id}_${message.guild.id}`, 1)
    };
  //DCS BY NAİROBİ
  if (!message.author.bot) 
  db.add(`puankanallar_${message.guild.id}_${message.channel.id}`, 1) 
  });
  


  client.on("message", async msg => {
    let member = msg.mentions.users.first() || msg.author;
  
    const reason = msg.content
      .split(" ") 
      .slice(1) //dcs ekibi
      .join(" ");
    let akanal = await db.fetch(`destekkanal${msg.guild.id}`);
    if (msg.channel.id == akanal) {
      msg.channel.bulkDelete(1);
      let roleee = await db.fetch(`destekrole${msg.guild.id}`);
      let rl = msg.guild.roles.find(v => v.id === roleee);
      const listedChannels = [];
      let onl;
      msg.guild.members.forEach(p => {
        if (p.roles.has(rl.id)) {
          if (msg.guild.member(p).user.presence.status === "idle")
            onl = ":orange_circle:" 
          if (msg.guild.member(p).user.presence.status === "dnd")
            onl = ":red_circle:"
          if (msg.guild.member(p).user.presence.status === "online")
            onl = ":green_circle:"
          if (msg.guild.member(p).user.presence.status === "offline")
            onl = ":white_circle:"
  
          listedChannels.push(`\`${p.user.tag}` + "\` " + onl );
        }
      });
      if (!msg.guild.channels.find(xx => xx.name === "DESTEK")) {
        await msg.guild.createChannel(`DESTEK`, "category");
      }
      let a = msg.guild.channels.find(xxx => xxx.name === "DESTEK");
      if (
        msg.guild.channels.some(
          kk =>
            kk.name ===
            `destek-${msg.guild.member(member).user.username.toLowerCase() +
              msg.guild.member(member).user.discriminator}`
        ) == true
      )
        return msg.author.send(`**Destek Sistemi Açma İşlemi Başarısız!\nSebep: \`Açılmış Zaten 1 Tane Destek Talebiniz Var.\`**`);
      msg.guild
        .createChannel(`destek-${member.tag}`, "text")
        .then(c => {
          let role2 = msg.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
          });
          c.overwritePermissions(msg.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
          });
  
          c.setParent(a);
  
          const embed = new Discord.RichEmbed() //dcs ekibi
            .setColor("DAR_BLUE")
            .setAuthor(`${client.user.username} | Destek Sistemi`)
            .addField(
              `Merhaba ${msg.author.username}!`,
              `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`
            )
            .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
            .addField(`» Talep Konusu/Sebebi:`, `\`${msg.content}\``, true)
            .addField(
              `**Destek Rolündeki Yetkililer;**`,          
  `${listedChannels.join(`\n`)}`
            )
            .setFooter(`${client.user.username} | Destek Sistemi`)
            .setTimestamp();
          c.send({ embed: embed });
        })
        .catch(console.error);
    }
  });
  
  
  
 client.login(token)
