const random = require("../util/rand");

const answers = [
    "ja",
    "nein",
    "Die antwort ist nicht schön!",
    "Die antowrt ist sehr schön!"
];

exports.eightball = (msg, args) => {
    const answer = answers[random.randint(1, answers.length)];
    
    msg.channel.send(":8ball: Eightball sagt:, "+answer)
};
