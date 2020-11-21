module.exports.run = async (Bastion, message, args) => {
    try {
      let user;
      if (message.mentions.users.size) {
        user = message.mentions.users.first();
      } else if (args.id) {
        user = await message.guild.fetchMember(args.id);
        if (user) {
          user = user.user;
        }
      }
      if (!user) {
        return message.reply("**Usage correct**: ,first <mention>");
      }
  //Dcs Ekibi
      let color, description;
      if (user.lastMessageID) {
        let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
        let seconds = lastSeen / 1;
        let days = parseInt(seconds / 86400);
        seconds = seconds % 86400;
        let hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        let minutes = parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
  
        lastSeen = `${seconds} Seconde`;
        if (days) {
          lastSeen = `${days} journée ${hours} heure(s) ${minutes} Minute ${seconds} seconde`;
        } else if (hours) {
          lastSeen = `${hours} heures ${minutes} Minute ${seconds} seconde`;
        } else if (minutes) {
          lastSeen = `${minutes} minute /${seconds} seconde`;
        }
  
        color = 0x00ae86;
        description = "**Dernière vue:** " + lastSeen;
      } else {
        color = 0x00ae86;
        description = "**Jamais vu** ";
      }
  
      message.channel
        .send({
          embed: {
            color: color,
            title: "Dernière vue",
            description: description
          }
        })
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  //Dcs Ekibi
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["songörülme", "üyegörülme"],
    permLevel: 0
  };
  
  module.exports.help = {
    name: "first",
    description: "Etiketlenen Kişinin Son Görülme Zamanını Belirtir.",
    usage: "first <mention>"
  };