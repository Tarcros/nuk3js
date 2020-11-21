
exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        throw 'Vous devez saisir du texte pour être inversé!';
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse",
  description: "Renvoie le text renversé  ",
    cooldown: 2,
    usage: '<text>',
    permissions: false, 
    args: true
}
