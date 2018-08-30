console.log(process.env.NODE_ENV);
const _ = require('lodash');

const logInstance = require('./logger');
const logInstance1 = require('./logger');

console.log(logInstance === logInstance1);
console.log(_.isEqual(logInstance, logInstance1));


//let log = new Log();
logInstance.on('loggedMessage', (arg) => {
    console.log(arg);
});
logInstance.emit('loggedMessage', { msg: 'custom msg' });



const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == '/') {
        res.write('Hello world');
        res.end();
    }
    if(req.url == '/me') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// server.on('connection', (socket)=>{
//     console.log('new connection');
    
// })
server.listen(3000);
console.log('listening on 3000');
