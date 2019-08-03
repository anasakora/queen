const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("605767153940955138")
setInterval(function() {
channel.send(`#avatar <@607228440973803538> **amwaaaaaa7** :heart_eyes: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
