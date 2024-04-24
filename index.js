//Don't Change Anything Below, Dont Touch Anything
//Go To config.json and Put Your Bot User id in "Owner id"
// Put channel id where You want Spam in "spamChannelID"
//Put Token in Secret Variable key will be token and in value put Your User Token
//ninja is better
//plz dont change this stuffs / credits 

const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('NINJA-69 Github  , Rate Us A Star ⭐'))

app.listen(port, () =>
  console.log(`Server Online`)
);
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const { RichPresence, Util } = require("discord.js-selfbot-rpc")
client.on('ready', async() => { // Using async-await to perform util get application assets
    const applicationId = '1232695238230020300'; // Your Application ID

    // This is example for get image assets data from application
    const chromeImage = await Util.getAssets(applicationId, 'img1'); // Get image assets by name (chrome) from application assets
    const googleImage = await Util.getAssets(applicationId, 'img2'); // Get image assets by name (google) from application assets

    const presence = new RichPresence()
        .setStatus('dnd') // Must be one of (online, idle, dnd) default is online
        .setType('PLAYING') // Must be one of (PLAYING, STREAMING, LISTENING, WATCHING) default is PLAYING
        .setApplicationId(applicationId)
        .setName('Sleep')
        .setDetails('Sleeping')
        .setState('Try not to ping me XD')
        .setAssetsLargeImage(chromeImage.id)
        .setAssetsLargeText('Chrome')
        .setAssetsSmallImage(googleImage.id)
        .setAssetsSmallText('Google')
        .setTimestamp();

    client.user.setPresence(presence.toData());
    console.log('Rich Presence has running...');

    console.log(`Login as ${client.user.tag}`);
});

client.login(process.env.token);
