

module.exports.run = (client, message, args ) => {
	message.delete()
	message.channel.send(args.join(` `));
};


module.exports.help = {
	name: 'say',
	category: 'misc',
	description: 'Répète le message d\'un utilisateur!', 
	usage: '<Votre__message>',
	permissions: true, 
	args: true 
};