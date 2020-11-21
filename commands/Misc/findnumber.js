const Discord = require('discord.js');
const { stripIndents } = require('common-tags'); //Gereken Modül: common-tags

module.exports.run = async (client, message, args) => {
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply('Un seul duel peut se produire par channel.');
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')//Dcs Ekibi
    this.games.add(message.channel.id);
    await message.channel.send(stripIndents`
                    ${message.author}, Devinez le nombre entre **0** et **100**
                    \`${haklar}\` Tu as le droit de ressayer.
                `);
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                message.channel.send(`${message.author.username},<:temp:741859094003974146> Malheureusement! Le temps est écoulé!`)
                message.channel.send(`${message.author.username}, :shrug: Tu as perdu! Nombre: \`${fixedlisonuç}\` :shrug: `)
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                  await message.channel.send(stripIndents`
                              **${message.author.username}**, :small_red_triangle: Tu devrais dire un plus grand nombre!
                              \`${haklar}\` Tu as le droit d'essayer.
                          `);
                  continue;
                  }
                  if(fixedlisonuç < choice) {
                    await message.channel.send(stripIndents`
                              **${message.author.username}**, :small_red_triangle_down: Vous devez dire un nombre plus petit nombre!
                              \`${haklar}\` Tu as le droit d'essayer.
                          `);
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                  await message.channel.send(`${message.author}, :shrug: Tu as perdu! Nombre: \`${fixedlisonuç}\` :shrug:`)
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                  await message.channel.send(`${message.author}, :tada:  Bonne supposition! Nombre: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.channel.send('<a:thefalse:761436373005238333> Un problème est survenu...')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('<a:thefalse:761436373005238333> Un problème est survenu..')
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayıtahmini', 'sayıtahmin', 'sayı-tahmini'],
  permLevel: 0
};
//Dcs Ekibi
module.exports.help = {
    name: 'findnumber',
  description: 'Rastgele rakam belirler ve siz o rakamı bulmaya çalışırsınız.',
  usage: 'sayı-tahmin'
};