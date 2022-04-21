import DiscordJS, { Intents, TextChannel } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config();
const fs = require('fs')
var files = fs.readdirSync('./public')
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});





client.on('ready', () => {
    console.log('Bot is running')
    client.user.setActivity('DEPRESÍKY', { type: 'PLAYING' });
    
    setInterval(() => {
        let chosenFile = files[Math.floor(Math.random() * files.length)];
        for(let i = 0; i < 10; i++) {
       (client.channels.cache.get('PASTE_CHANNEL_ID_HERE') as TextChannel).send({ files: ["./public/" + chosenFile]});
    }
}, 10000)
    
});


client.login(process.env.TOKEN);
