module.exports.run = async (bot, message, args) => {

    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
        if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce role! ");
        if (role.permissions.has('MANAGE_ROLES')) return message.channel.send("Vous ne pouvez pas avoir ce rôle");

        message.member.roles.add(role)
        .then(m => message.channel.send(`Vous poussédez maintenant le role ${role}.`))

    } else {
        message.channel.send("Le rôle n'existe pas");
  }

}

module.exports.help = {
    name: "addrole",
    aliases: ['giverole', 'rôle', 'roles', 'rôle', 'rôles'],
    description: "Donne le rôle mentionné ",
    cooldown: 2,
    usage: '<Rôle>',
    permissions: true, 
    args: true
}