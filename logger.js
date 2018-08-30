const url = "http://www.logger.in/log";
const EventEmitter = require('events');
class Logger extends EventEmitter{
    logger(message) {
        console.log(message);
    }
}



module.exports = new Logger();