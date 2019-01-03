const embeds = require("../util/embeds");

exports.ban = (msg, args, bot, version, cfg) => {
    if (msg.mentions.users.first()) {
        const user = msg.mentions.users.first();
        
       // if (!user.bannable) {
            
            if (msg.member.hasPermission("BAN_MEMBERS")) {
                
                msg.guild.ban(user).then((user) => {
                    embeds.succes(msg.channel, `:wave: Benutzer ${user.displayName} wurde erfolgreich gebannt!`, "Ban erfolgreich");
                }).catch((user) => {
                    embeds.error(msg.channel, `Benutzer ${user.displayName} konnte nicht gebannt werden :(`, "Ban fehlgeschlagen");
                });
                
            } else {
                embeds.error(msg.channel, "Du hast keine rechte um diesen Command zu nutzen", "Ban fehlgeschlagen");
            }
        /*} else {

            embeds.error(msg.channel, "Dieser nutzer kann nicht gebannt werden!", "Ban fehlgeschlagen");

        }*/
    }
};
