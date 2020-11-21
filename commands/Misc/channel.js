const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Text Channel',
    voice: 'Voice Channel',
    category: 'Category',
    unknown: 'Unknown',
};

module.exports.help = { 
    name: 'channel',
    description: 'provides detailed infos about a particular channel in the guild',
    usage: '[channel name | optional]',
    
}
    module.exports.run = async (bot, message, args) => {
        const channel = message.channel || message.guild.channels.get(args[0]);

        if (!channel) {
            return message.reply('please enter a valid channel.');
        }
       
        const channelEmbed = new Discord.MessageEmbed()
                .setColor(0x00AE86)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Channel Info')
                .addField('▶️ Nom', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
                .addField('▶️ ID', channel.id, true)
                .addField('▶️ Date de Creation', channel.createdAt.toDateString(), true)
                .addField('▶️ NSFW', channel.nsfw ? 'Oui' : 'Non', true)
                .addField('▶️ Category', channel.parent ? channel.parent.name : 'Aucune', true)
                .addField('▶️ Type', channelTypes[channel.type], true)
                .addField('▶️ Topic', channel.topic || 'Non définie', true)
                .setFooter('Nuk3', 'https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png');

        message.channel.send(channelEmbed);
    }