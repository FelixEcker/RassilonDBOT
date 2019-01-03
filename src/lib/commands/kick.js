const embeds = require("../util/embeds");

exports.kick = (msg, args, bot, version, cfg) => {
    if (msg.mentions.users.first()) {
        const user = msg.mentions.users.first();
        
       // if (!user.kicknable) {
            
            if (msg.member.hasPermission("KICK_MEMBERS")) {
                
                user.kick(user).then((user) => {
                    embeds.succes(msg.channel, `:wave: Benutzer ${user.displayName} wurde erfolgreich gekickt!`, "Kick erfolgreich");
                }).catch((user) => {
                    embeds.error(msg.channel, `Benutzer ${user.displayName} konnte nicht gekickt werden :(`, "Kick fehlgeschlagen");
                });
                
            } else {
                embeds.error(msg.channel, "Du hast keine rechte um diesen Command zu nutzen", "Kick fehlgeschlagen");
            }
        /*} else {

            embeds.error(msg.channel, "Dieser nutzer kann nicht gekicknt werden!", "kick fehlgeschlagen");

        }*/
    }
};
