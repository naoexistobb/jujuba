require('dotenv').config()

const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})


client.login(process.env.TOKEN_CANARY)

   setInterval(async() => { 

      let channel = await client.channels.cache.get('971956917029183488') //coloque o id do canal para contar os membros!
    
      const user = client.users.cache.size
     
      channel.setName(`Users: ${user}`)

     let guildchannel = await client.channels.cache.get('971957032842330122') //coloque o id do canal para contar servidores.
    
      const guilds = client.guilds.cache.size
     
      guildchannel.setName(`Guilds: ${guilds}`)
       
       let guildsschannel = await client.channels.cache.get('971957214917062656') //coloque o id do canal para contar servidores.
    
      const ping = client.ws.ping
     
      guildsschannel.setName(`Ping: ${Math.round(ping)}ms`)
    
     }, 900000)

const cfonts = require('cfonts');
const banner = cfonts.render((`GRATIAN`), {
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
module.exports = {
  Util: require("./src/util/index.js"),
};
