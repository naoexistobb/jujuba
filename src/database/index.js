const mongoose = require("mongoose");
const c = require("colors");
const mongoCurrency = require('discord-mongo-currency');

module.exports = {
  start() {
    try {
      
      mongoCurrency.connect(process.env.MONGOURL);
      console.log(c.red('[ ECONOMIA ] - SISTEMA CARREGADO'))

      mongoose.connect(process.env.MONGOURL);

      console.log(c.red(`[ MONGODB ] - CONECTADO A DATABASE.`));
    } catch (err) {
      if (err) return console.log(c.red(`[ MONGODB ] - ERROR:`, +err));
    }
  },
};
