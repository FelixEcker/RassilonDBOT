const log = console.log;

exports.randint = (min, max) => {
    return Math.round(Math.random()*(max - min) + min)
}

exports.randbool = () => {
    let bool_int = require("./utils").randint(0, 1);
    
    if (bool_int === 0) {
        return false;
    } else if (bool_int === 1) {
        return true;
    } else {
        log("Sometihng went wrong while giving random bool!");
    }
}
