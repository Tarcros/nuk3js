const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
module.exports.run = async(client, message, args) => { 

//By. CODE SHARE
//By. Umut Bayraktar

let sayfalar = [
    '<:nuk3global:753772063746949120>** Liste des pages d\'aide** \n Liste des pages d\'aide, il vous suffit juste intéragire avec les emojis pour avoir accès au autres pages d\'aide.\n <:online:751759197028483093> `"◀️"` Celui si est pour aller vers la gauche donc revenir en arrière.\n <:online:751759197028483093> `"▶️"` Celui si est pour aller vers la droite donc aller vers les pages suivantes. \n<:blue:772616260592336926> Vous pouvez faire la commande [`,help`](https://media.discordapp.net/attachments/768640549564448798/775979686295633940/unknown.png?width=692&height=663) pour avoir toute la liste des commandes d\'aides en même temps.',
'<:nuk3command:753772065269612618>`Pages:`\n `1`<:nuk3mod:753772063780634716>**Moderation**             `2`<:nuk3fun:753772064015646761>**Fun**                          `3`<:nuk3image:753772063990480927>**Image**\n`4`<:nuk3money:753805249080197142>**Economie**                  `5`<:nuk3giveaway:753772063616925777>**Giveaway**            `6`<:nuk3autre:753772065823260704>**Autre**\n`7`<:nuk3music:753772063692685412>**Music**                           `8`<:nuk3config:753772064393134164>**Config**                   `9`<:nuk3support:753772063743017050>**Support**\n`10`<:nuk3info:753805249440907295>**Info**                              `11`<:nuk3more:753805249122402304>**More-info**        `12`<:nuk3plus:753772063508136109>**Plus**' ,
'<:nuk3mod:753772063780634716>**Moderation** \n <a:wsoon:741859194373799987>Soon',
'<:nuk3fun:753772064015646761>**Fun** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3image:753772063990480927>**Image** \n <a:wsoon:741859194373799987>Soon', 
' <:nuk3money:753805249080197142>**Economie** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3giveaway:753772063616925777>**Giveaway** <a:giveaway:757810736063053935> \n ** <a:or:772903494856343552> Giveaway Commands **\n [\`,create\`](https://media.discordapp.net/attachments/776049499117584404/776921775106818058/create.gif): Cette commande permet de creer un giveaway.[[**a**]](https://media.discordapp.net/attachments/768640549564448798/776925246565253130/unknown.png) \n[\`,reroll\`](https://media.discordapp.net/attachments/776049499117584404/776923921512529950/reroll.gif): Cette commande permet de déterminer un nouveau gagnant.[[**a**]](https://media.discordapp.net/attachments/768640549564448798/776926010335428628/unknown.png)\n [\`,edit\`](https://media.discordapp.net/attachments/776049499117584404/776922071032791078/edit.gif): Cette commande permet de modifier le temp ou le gain du giveaway en cour. [[**a**]](https://cdn.discordapp.com/attachments/768640549564448798/776927079924498472/unknown.png)\n [\`,end\`](https://media.discordapp.net/attachments/776049499117584404/776921780694679572/end.gif): Cette permet de mettre fin au giveaway désiré à tout moment. [[**a**]](https://media.discordapp.net/attachments/768640549564448798/776931289600098314/unknown.png)\n[\`,delete\`](https://media.discordapp.net/attachments/776049499117584404/776935262957600798/delete.gif): Cette commande permet du supprimer un giveaway lancer avec le bot. [[**a**]](https://media.discordapp.net/attachments/768640549564448798/776935745717272616/unknown.png) ',
' <:nuk3autre:753772065823260704>**Autre** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3music:753772063692685412>**Music** \n Pour avoir la liste de tout les commandes de music, réaliser la commande [\`,music\`](https://cdn.discordapp.com/attachments/776049499117584404/779618138764476416/music.gif). \n En cas de problème avec cette commande, contacter nous sur [**le serveur support**](https://discord.gg/CyvM9YB). <:success:770826800435036162>',
' <:nuk3config:753772064393134164>**Config** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3support:753772063743017050>**Support** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3info:753805249440907295>**Info** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3more:753805249122402304>**More-info** \n <a:wsoon:741859194373799987>Soon',
' <:nuk3plus:753772063508136109>**Plus** \n <a:wsoon:741859194373799987>Soon',

] //Sayfalarda Yazacak Şeyleri Burada Belirleyin!

let page = 1

const embed = new Discord.MessageEmbed()
embed.setTitle(client.user.username+" Help") 
embed.setThumbnail(client.user.avatarURL())
embed.setImage('https://media.discordapp.net/attachments/768640549564448798/775157298716082195/eRa_2.png?width=1440&height=480')
embed.setTimestamp()
.setColor("GREEN")
.setFooter(`Page ${page} - ${sayfalar.length}`)
.setDescription(sayfalar[page-1])
message.channel.send(embed).then(msg => { 
msg.react('◀️').then( r => { 
msg.react('❌')
msg.react('▶️') 


//By. CODE SHARE


const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;

const closeFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id; 

const backwards = msg.createReactionCollector(backwardsFilter, {time: 120000 }) //1000 = 1 Saniye

const close = msg.createReactionCollector(closeFilter, {time: 120000 })

const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 }) //1000 = 1 Saniye

//Retirer la reaction d'un utilisateur



const filter = (reaction, user) => {
	return reaction.emoji.name === '◀️' && user.id === message.author.id;
};
const collector = msg.createReactionCollector(filter, { time: 120000 });

collector.on("collect", (reaction, user) => {
    switch (reaction.emoji.name) {
      case "◀️":
        reaction.users.remove(user).catch(console.error);                
    }
})

const filters = (reaction, user) => {
	return reaction.emoji.name === '▶️' && user.id === message.author.id;
};

const collectors = msg.createReactionCollector(filters, { time: 120000 });

collectors.on("collect", (reaction, user) => {
    switch (reaction.emoji.name) {
      case "▶️":
        reaction.users.remove(user).catch(console.error);       
    }
})


//By. CODE SHARE

backwards.on('collect', r => { 
if (page === 1) return; page-- 


embed.setTitle(client.user.username+" React Help Pages")
embed.setThumbnail("https://images-ext-1.discordapp.net/external/ewoSxNcZvj1y4x2O2Bf-YiWH8byxJvKzMRI2HVNXvTQ/https/images-ext-2.discordapp.net/external/9uQcQKx4mvr_rGQe7BpSf58FonVuD-5_SxnsekQgve0/https/cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png")
embed.setTimestamp()
embed.setDescription(sayfalar[page-1])
embed.setFooter(`Page ${page} - ${sayfalar.length}`)
embed.setColor("GREEN") 
.setImage('')
msg.edit(embed)}) 

forwards.on('collect', r => { 
if (page === sayfalar.length) return; page++
embed.setTitle(client.user.username+" Menu d'aide") 
embed.setThumbnail("https://images-ext-1.discordapp.net/external/ewoSxNcZvj1y4x2O2Bf-YiWH8byxJvKzMRI2HVNXvTQ/https/images-ext-2.discordapp.net/external/9uQcQKx4mvr_rGQe7BpSf58FonVuD-5_SxnsekQgve0/https/cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png")
embed.setTimestamp()
.setImage('')
embed.setDescription(sayfalar[page-1])
embed.setFooter(`Page ${page} - ${sayfalar.length}`); 
embed.setColor("GREEN") 
msg.edit(embed) 
}) 

close.on('collect', r => { 
  message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
  embed.setFooter(``); 
  embed.setImage('')
  embed.setTitle("") 
  embed.setThumbnail("")
  embed.setDescription("**Embed Delete** <:error:772622719077449738>")
  embed.setColor("36393E") 
  
  msg.edit(embed) 
  message.delete()
  
  .then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
  msg.delete(embed)
})

})
}) 

} 
//By. CODE SHARE
module.exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: ["rhelp"]
}

module.exports.help = { 
name: 'dhelp',
aliases: ["rhelp", ",reacthelp"]
}