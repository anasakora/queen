const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("605767153940955138")
setInterval(function() {
channel.send(`***all say:*** <@443121178253590528> **amwaaaaaa7** :heart_eyes: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
