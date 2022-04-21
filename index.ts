import DiscordJS, { Intents, MessageAttachment, Client, TextChannel } from 'discord.js'
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
    console.log('I am ready!')
    client.user.setActivity('DEPRESÍKY', { type: 'PLAYING' });
    
    setInterval(() => {
        let chosenFile = files[Math.floor(Math.random() * files.length)];
       (client.channels.cache.get('877280550015078443') as TextChannel).send({ files: ["./public/" + chosenFile]});
    }
        , 10000)
    
});




client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
            }
    })

client.login(process.env.TOKEN);