const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = (client, message, args ) => {
  message.channel.send("**🎆 Trouver votre numéro porte-bonheur! 🎇**").then(message => {
    var espriler = [
      "🎉 Votre nombre chanceux est  **14** 🎲",
      "🎉 Votre nombre chanceux est **1** 🎲",
      "🎉 Votre nombre chanceux est  **2** 🎲",
      "🎉 Votre nombre chanceux est  **3** 🎲",
      "🎉 Votre nombre chanceux est  **4** 🎲",
      "🎉 Votre nombre chanceux est  **5** 🎲",
      "🎉 Votre nombre chanceux est  **6** 🎲",
      "🎉 Votre nombre chanceux est  **7** 🎲",
      "🎉 Votre nombre chanceux est  **8** 🎲",
      "🎉 Votre nombre chanceux est  **9** 🎲",
      "🎉 Votre nombre chanceux est  **10** 🎲",
      "🎰 **Vous n'avez pas de nombre chanceux** 😔 ",
      "🎉 Votre nombre chanceux est  **11** 🎲",
      "🎉 Votre nombre chanceux est  **12** 🎲",
      "🎉 Votre nombre chanceux est  **13** 🎲",
      "🎉 Votre nombre chanceux est  **14** 🎲"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
  });
}; //Dcs Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["j'ai de la chance", "compte chanceux", "ş-s", "compte ta chance", "şs"],
  permLevel: 0
};

module.exports.help = {
  name: "roll",
  description: "Il essaie de trouver votre numéro porte-bonheur",
  
};