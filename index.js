import {token} from './config'

const { Client, Intents } = require('discord.js');



const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	console.log(interaction);

    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'beep') {
        await interaction.reply('Boop');
      }

});

client.login('your-token-goes-here');