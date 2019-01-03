const embeds = require("../util/embeds");

let msgs;

exports.clear = (msg, args, bot, version, cfg) => {
    
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
        
        try {
            
            msgs = parseInt(args)+1;
            
        } catch(e) {
            
            embeds.error(msg.channel, "Das Parameter **MUSS** eine zahl sein!", "Clear fehlgeschlagen");
            
            return;
            
        }
        
        if (msgs > 100) {
            
            embeds.error(msg.channel, "Du kannst maximal 99 Nachrichten aufeinmal löschen!", "Clear fehlgeschlagen");
            
        } else {
            
            msg.channel.bulkDelete(msgs)
            .then(messages => console.log(`::Bulk deleted ${messages.size} messages`))
            .catch(console.error);
            
        }
        
    } else {
        
        embeds.error(msg.channel, "Du hast keine berechtigungen um diesen Command auszuführen!", "Clear fehlgeschlagen");
        
    }
    
}
