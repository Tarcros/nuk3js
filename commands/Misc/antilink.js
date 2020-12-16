const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD'))
        return message.channel.send('<:no:772119189225734154> **Vous devez avoir le privilège `«MANAGE_GUILD»` pour utiliser cette commande!**')
 
    if (!args[0]) return message.channel.send('<:no:772119189225734154>** Pour utiliser le système: `on` ou `off` **')

    if (args[0] == 'on') {
        db.set(`Anti pub ${message.guild.id}`, 'on')
        message.channel.send(`> <:yes:772119320389484544> Le système de kick pour pub a été activé. Les pubeurs seront kick après **3 avertissements.** Puis **banni** si il recommence..`)

    }
    if (args[0] == 'off') {
        db.set(`Anti pub ${message.guild.id}`, 'off')
        message.channel.send(`<:no:772119189225734154> **Le système de kick pour pub a été désactivé .**`)

    }

}



module.exports.help = {
    name: 'antilink',
    description: 'Active et désactive le système de coup de pub',
    usage: 'antilink on/off',
    aliases: [ "autokickpub" , "pubkick" ]
}; //Discord Code Share-AlpSu