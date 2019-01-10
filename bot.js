const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("532931777816428580")
setInterval(function() {
channel.send(`krwassa w bearboy l7waya`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
