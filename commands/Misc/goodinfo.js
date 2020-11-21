const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  const ilgincsöz = [
    "Le biscuit que nous connaissons sous le nom de noix de cajou est en fait la tige du fruit de cajou!",
    "L'ananas n'est en fait pas un fruit, mais il pousse de manière fruitée dans le champ!",
    "Le lait d'hippopotame est rose!",
    "Le cœur des baleines bleues est si grand qu'un humain peut facilement nager dans les artères!",
    "La Russie est le seul pays à séparer la Corée du Nord et la Finlande!",
    "'Duck Hunt' est en fait un jeu à deux joueurs, le deuxième joueur contrôle le canard!",
    "Pluton n'a pas été autour du soleil depuis sa découverte! Elle n'est donc plus acceptée comme une planète!",
    "Le miel ne gâche jamais à moins qu'il ne soit vu!",
    "Super Mario casse vraiment les blocs avec sa main, pas avec sa tête!",
    "Tout le monde au 19ème siècle n'a pas pris autant de photos que les photos prises en 2 minutes maintenant!",
    "Les arachides sont en fait une légumineuse et poussent sous terre!",
    "Tous les 5000 bébés naissent sans anus (anus imperforé) et l'anus doit être fabriqué dans un environnement hospitalier!",
    "Le nombre d'étoiles dans le ciel est plus que les grains de sable sur toutes les plages de la Terre!",
    "Un millier de secondes équivaut à environ 16 minutes, un million de secondes à environ 11 jours, un milliard de secondes à environ 32 ans et un billion de secondes à environ 32 000 ans!",
    "L'ADN humain est à 50% identique à l'ADN de la banane!",
    "Lors de la sortie du premier film 'Star Wars' (25 mai 1977), la France était toujours légale avec une guillotine! La guillotine est une sorte d'exécution décapitée!",
    "La Russie a une plus grande superficie que Pluton!",
    "Les poulpes ont 3 coeurs!",
    "Les souris et les chevaux ne peuvent pas vomir!",
    "Selon la loi belge, chaque élève du primaire doit suivre une leçon d'harmonica!",
    "Mâcher du chewing-gum en hachant des oignons empêche de pleurer à un rythme effréné!",
    "Le muscle le plus puissant du corps de l'homme est le muscle du menton!",
    "Au plus profond de l'océan, il faut plus d'une heure pour qu'une boule de fer s'installe au fond!",
    "Le plus grand iceberg jamais mesuré mesure 200 milles (km) de long et 60 milles (km) de large a également une superficie plus grande que la Belgique!",
    "L'œil humain fait exactement 576 mégapixels!",
    "La lumière parcourt 300 000 km par seconde!",
    "Les loutres dorment en se tenant la main!",
    "La congestion de la circulation la plus longue au monde dure depuis 12 jours, une file d'attente de 100 km a été créée Les véhicules ont avancé d'environ 1 km par jour!",
    "Le poulpe imité ne change pas seulement de couleur, il peut également prendre la forme d'animaux comme la sole, le poisson-lion et le serpent de mer!",
    "Selon la recherche, toucher les organismes femelles Jinsel réduit le stress de 70% chez les hommes!"
  ];
  const dcs = ilgincsöz[Math.floor(Math.random() * ilgincsöz.length)];
  const ilgincsözembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Une information intéressante`, message.author.avatarURL)
    .setFooter(`\n${message.author.username}  Il a appris quelque chose de nouveau!`, 'https://images-ext-1.discordapp.net/external/Wl_JEKmh7T0BA5lj-k9l7onI8vwIakp8qAR_i90BHaA/https/cdn.discordapp.com/icons/756147519280644167/ef537e1b399a5d2f1c136f276eec031c.png')
    .setDescription(`${dcs}`)
    .setThumbnail()
    
  return message.channel.send(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ib", "ilgincbilgi"],
  permLevel: 0
};

module.exports.help = {
  name: "goodinfo",
  description: "Bilmediginiz bir sürü ilginc bilgi verir.",
  usage: "goodinfo"
};  