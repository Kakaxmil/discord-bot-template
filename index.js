const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} jest online`);
  console.user.setActivity("By GigaKoks#6447")

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('Hello!');
}
  });

});

client.login('token');