const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("605336697210798081")
setInterval(function() {
channel.send(`#avatar <@584411349233172501> **amwaaaaaa7** :heart_eyes: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);