const { RichEmbed } = require("discord.js");
const colors = require("./colors")



exports.error = function error(chan, cont, title) {
    /**
    * Throws an error embed in specified channel
    * @param {Discord.Channel} chan
    * @param {String} cont
    * @param {String} title
    */
    
    let message;
    let embed = new RichEmbed().setColor(colors.colors["red"]).setDescription(cont);
    
    if (title) {
        embed.setTitle(title);
    }
    
    chan.send("", embed).then((m) => {
        message = m
    });
    return message;
};

exports.succes = (chan, cont, title) => {
    /**
    * Throws an succes embed in specified channel
    * @param {Discord.Channel} chan
    * @param {String} cont
    * @param {String} title
    */
    
    let msg;
    let embed = new RichEmbed().setColor(colors.colors["green"]).setDescription(cont);
    
    if (title) {
        embed.setTitle(title);
    }
    
    chan.send("", embed).then((m) => {
        message = m;
    });
    
    return message;
    
};

exports.custom = (chan, cont, title, color) => {
    /**
    * Empty embed
    * @param {Discord.Channel} chan
    * @param {String} cont
    * @param {String} title
    * @param {String} color
    */
    
    let msg;
    let embed = new RichEmbed().setColor(colors.colors[color]).setDescription(cont);
    
    if (title.length > 0) {
        embed.setTitle(title);
    }
    
    chan.send("", embed).then((m) => {
        msg = m
    });
    
    return msg;
};

exports.empty = () => {
    return new RichEmbed()
};
