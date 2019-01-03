const random = require("../util/rand");
const embeds = require("../util/embeds");

exports.fac = (msg, args) => {
    const sides = ["Kopf", "Zahl"];
    const side =  sides[random.randint(0, 1)];
    
    if (args.length > 0) {
        if (args[0] == side) {
            embeds.custom(msg.channel, "Du hast richtig geraten!", "", "green");
            return;
        } else {
            embeds.custom(msg.channel, "Du hast falsch geraten! Es war: `"+ side +"` !", "", "red");
        }
        
    } else {
        msg.channel.send("Es ist: `"+ side +"` !");
    }
};
