exports.ping = (msg, args) => {
    if (args[0]) {
        msg.channel.send(`***:loudspeaker::ping_pong: Pong!***  ${args[0]}`);
    } else {
        return;
    }
};
