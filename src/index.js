const Client = require('./structures/Client')

const client = new Client()


const cfonts = require('cfonts');
const banner = cfonts.render((`GRATIAN HOST`), {
    font: 'block',
    color: 'candy',
    align: 'left',
    gradient: ["red", "white"],
    lineHeight: 3
});

console.log(banner.string);

process.on('unhandledRejection', (reason, p) => {
        console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
        console.log(reason, p);
    });

process.on("uncaughtException", (err, origin) => {
        console.log(' [ ANTICLASH] | CATCH ERROR');
        console.log(err, origin);
    }) 

process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [ ANTICLASH ] | BLOQUEADO');
        console.log(err, origin);
    });

process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
        console.log(type, promise, reason);
    });
