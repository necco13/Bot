require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;


bot.login('Nzg2Njg5MjAzNjgwMzEzMzg0.X9KDag.87Ey548PzLLG8nWJ1faIVDb1ttw'); //Login s tokenom

bot.on('ready', () => {     //po startupu
  console.info("Tale bullshit se je zalaufu"); //Welcoming message
});


bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pinging your mama');
  }

});

function test()
{
if(msg.content === '!test')
  msg.channel.send('ok');
  
}
