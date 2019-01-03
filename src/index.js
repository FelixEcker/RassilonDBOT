// Some unimportant extra stuff
const log = console.log;

// Import node modules
const Discord = require("discord.js");
const fs      = require("fs");

// Standard JS modules
const date = new Date();

// Import jsons
const cfg      = JSON.parse(fs.readFileSync("src/config.json"));
const package  = require("../package.json");

log(`XenoBot version ${package.version} is starting...`);

// Exports
exports.VERSION = package.version;
exports.package = package;

// Import custom node modules

// Import commands
const cmd_test    = require("./lib/commands/test");
const cmd_botinfo = require("./lib/commands/botinfo");
const cmd_rtd     = require("./lib/commands/rtd");
const cmd_ping    = require("./lib/commands/pong");
const cmd_fp      = require("./lib/commands/fac");
const cmd_eb      = require("./lib/commands/eightball");
const cmd_ban     = require("./lib/commands/ban");
const cmd_kick    = require("./lib/commands/kick");
const cmd_clear   = require("./lib/commands/clear");

let bot = new Discord.Client(); // Finally create a new Discord.Client

let cmd = { // cmd list
    
    test:cmd_test.test,
    botinfo:cmd_botinfo.botinfo,
    rtd:cmd_rtd.rtd,
    ping:cmd_ping.ping,
    koz:cmd_fp.fac,
    eightball:cmd_eb.eightball,
    ban:cmd_ban.ban,
    //kick:cmd_kick.kick,
    clear:cmd_clear.clear
    
};

// Client (bot) events

bot.on("ready", () => { // Gets executed as soon as the bot is "ready"

log("\nBot started succesfully!");
log(`Logged in as ${bot.user.username};`);
bot.user.setActivity("for violations", {type: "WATCHING"}); // Set bot activity
bot.user.setStatus("online"); // Set bot status

});

bot.on("message", (msg) => { // onmessage
    
    let cont   = msg.content,
    author = msg.author,
    chan   = msg.channel,
    guild  = msg.guild;
    
	// Command parser
    if (author.id !== bot.user.id && cont.startsWith(cfg.prefix)) {
        
        var invoke = cont.split(" ")[0].substr(cfg.prefix.length),
        args   = cont.split(" ").slice(1);
        
        if (invoke in cmd) {
            
            log(`\n-------\n\n    Command "${invoke}" was called;\n    Server: "${guild}";\n    Author: "${author}";\n    Date & Time: ${date.toLocaleDateString()+ ", " +date.toLocaleTimeString()};\n\n-------\n`); // Log the called command
            
            cmd[invoke](msg, args, bot, package.version);
            
        } else {
            
            return;
            
        }
        
    }
    
});

bot.login(cfg.token);
