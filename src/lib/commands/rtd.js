const random = require("../util/rand");
const embeds = require("../util/embeds");

let num;

exports.rtd = (msg, args) => {
    num = random.randint(1, 6);
    
    if (args.length > 0) {
        args[0] = parseInt(args[0]);
        
        if (args[0] == num) {
            embeds.custom(msg.channel, "Du hast richtig geraten!", "", "green");
            return;
        } else {
            embeds.custom(msg.channel, "Du hast falsch geraten! Die Zahl lautete`"+ num +"` !", "", "red");
        }
        
    } else {
        msg.channel.send("Die Zahl lautet: `"+ num +"` !");
    }
}
