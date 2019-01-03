const embeds = require("../util/embeds");
const colors = require("../util/colors");

exports.botinfo = (msg, args, bot, version) => {

    let embed = embeds.empty()
    .setColor(colors.colors["green"])
    .setThumbnail(bot.user.displayAvatarURL)
    .setTitle("BOTINFO")
    .addField("Name", bot.user.username)
    .addField("Author", "Angry German#7855")
    .addField("Erstellt am:", bot.user.createdAt)
    .addField("Version", version);
    
    return msg.channel.send(embed);
    
};
