const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

const token = 'ODA5ODQ1MTM0NzE1MjU2ODMz.YCbBDg.XLe1gJEZc3j-MbRORlMVihsaln8'


client.on('ready', ()=> {
    console.log('Time to get watching!')
    client.user.setActivity('Crunchyroll w/ 4 servers! [Prefix: -] Bot created, updated and run by TeemoTime.', {type: 'WATCHING'}).catch(console.error);
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'crunchyroll'){
        message.channel.send('https://www.crunchyroll.com/');
    }
    else if(command == 'mhaseason5'){
        const MHAS5Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('My Hero Academia Season 5')
	.setURL('https://www.crunchyroll.com/en-gb/my-hero-academia')
	.setDescription('The journey to become the greatest hero continues!')
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire4/406916ead6c45d4ceb9eb7c4d018da611626348574_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Airing: 17/25 episodes.' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name: 'When is the next episode?', value: 'Episode 106: The Unforgiven will air on July 31st 2021!'}
	)
message.channel.send(MHAS5Embed);
    }
    else if(command == 'aotfinalseason'){
        const AOTS4Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Attack On Titan: The Final Season')
	.setURL('https://www.crunchyroll.com/en-gb/attack-on-titan')
	.setDescription('The final season of the anime that defined a generation.')
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire3/1ce8ca573ac440e55f9482f42eac5a251608611536_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Mid-Season Break: 16/? episodes.' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name: 'When is the next episode?', value: 'Episode 76: Judgement will air Winter 2022!'}
	)
message.channel.send(AOTS4Embed);
    }
    else if (command == 'onepiece'){
        const onepieceEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('One Piece')
	.setURL('https://www.crunchyroll.com/en-gb/one-piece/')
	.setDescription('It is never too late to join the hunt for the One Piece!')
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Wano Kuni Arc: 984/? episodes.' },
        { name:'Age Rating:', value: 'All episodes are rated PG-13 (12A for UK).'},
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name: 'When is the next episode?', value: 'Episode 985 will air on August 1st 2021!'}
	)
message.channel.send(onepieceEmbed);
    }
    else if(command == 'sao'){
        const saoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Sword Art Online: Alicization - War Of The Underworld')
	.setURL('https://www.crunchyroll.com/en-gb/sword-art-online')
	.setDescription('The widely popular light novel has been adapted for anime!')
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire4/7d3070bc3f5e32a8187ceea7445013301594706429_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Finished: 96 episodes.' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name:'Age Rating:', value: 'It can vary, the first two seasons are PG-13 (12A for UK) while the Alicization seasons are rated R (15 for UK).'},
        { name: 'When is the next episode?', value: 'Sword Art Online the Movie: Progressive - Aria of a Starless Night is coming October 30th, 2021. However, the main series` next ep is TBA.'}
	)
message.channel.send(saoEmbed);
    }
    else if(command == 'naruto'){
        const narutoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Naruto')
	.setURL('https://www.crunchyroll.com/en-gb/naruto')
	.setDescription(`Follow Naruto's quest to become the Lord Hokage!`)
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Finished: 220 episodes (9 seasons).' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name:'Age Rating:', value: 'All episodes are rated PG-13 (12A in UK).'},
        { name: 'Where is Naruto Shippuden or Boruto?', value: 'That is easy! To find these series just type -shippuden or -boruto.'}
	)
message.channel.send(narutoEmbed);
    }
    else if(command == 'shippuden'){
        const shippudenEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Naruto: Shippuden')
	.setURL('https://www.crunchyroll.com/en-gb/naruto-shippuden')
	.setDescription(`Follow Naruto (now as a teenager) on his quest to become the Lord Hokage!`)
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire4/1c1df98707aa0f22aa54342af725e48a1491245343_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Finished: 500 episodes (17 seasons).' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name:'Age Rating:', value: 'All episodes are rated PG-13 (12A in UK).'},
        { name: 'Where is the original Naruto or Boruto?', value: 'That is easy! To find these series just type -naruto or -boruto.'}
	)
message.channel.send(shippudenEmbed);
    }
    else if(command == 'boruto'){
        const borutoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('BORUTO: NARUTO NEXT GENERATIONS')
	.setURL('https://www.crunchyroll.com/en-gb/boruto-naruto-next-generations')
	.setDescription(`Boruto now follows in the footsteps of his father who is the seventh hokage! However, times are changing...`)
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire2/08f56c89d059aa0fc6e12eb38e42008f1625652299_full.jpg')
	.addFields(
		{ name: 'Current Status', value: 'Airing: 209/? episodes.' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name:'Age Rating:', value: 'All episodes are rated PG-13 (12A in UK).'},
        { name: 'Where is the original Naruto or Naruto: Shippuden?', value: 'That is easy! To find these series just type -naruto or -shippuden.'}
	)
message.channel.send(borutoEmbed);
    }
    else if(command == 'demonslayer'){
        const borutoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Demon Slayer: Kimetsu no Yaiba')
	.setURL('https://www.crunchyroll.com/en-gb/demon-slayer-kimetsu-no-yaiba')
	.setDescription(`Follow Tanjiro's journey to cure his sister and avenge his family!`)
	.setThumbnail('https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821554508873_full.jpg')
	.addFields(
		{ name: 'Current Status:', value: 'Finished: 25 episodes (1 season) & 1 movie' },
        { name: 'Where to watch:', value: 'Crunchyroll and Funimation both have the latest episodes!'},
        { name:'Age Rating:', value: 'All episodes are rated R (15 in UK).'},
        { name: 'When is Season 2?', value: 'Season 2 will release in the Fall 2021 anime season.'}
	)
message.channel.send(borutoEmbed);
    }
    else if(command == 'weeb'){
        message.channel.send('No! I mean kinda, sorta, ye I am a weeb. BUT I WILL NEVER BE A WEEABOO!')
    }
    else if(command == 'yes'){
        message.channel.send('no')
    }
    else if(command == 'no'){
        message.channel.send('yes')
    }
    else if(command == 'aminice'){
        message.channel.send('I am a bot, I dont know you, but I guess we can be friends...')
    }
    else if(command == 'help'){
        message.channel.send('I am here to help so here are the commands as of current:')
        message.channel.send('- is the prefix to me so make sure you are using a prefix before you ask me to do anything!')
        message.channel.send('-crunchyroll will take you to crunchyroll, the best site for anime and manga!')
        message.channel.send('-<anime/manga title> will give you either the manga, anime or both. Please Note: Not all anime and manga series can be included but more are being added all the time! Check all current anime with -anime to check them out!')
        message.channel.send('-weeb & -amInice will get suprising results (these are fun commands, not to be taken seriously)')
    }
    else if(command == 'update'){
        message.channel.send('Check DMs, sometimes update logs can be too long to fit in a channel.')
        const updateEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**3rd August Update Log**')
        .setDescription(`Here is the latest update log for the ANIME ACADEMIA bot.`)
        .addFields(
            { name: 'Where have the updates been?', value: 'I am sorry to everyone who wanted updates to the bot, to be completly honest I forgot this bot existed!' },
            { name: 'Will there be Updates now?', value: 'Maybe, but I have but out a healthy amount of content into this update.'},
            { name:'NEW ANIME!', value: 'Of course with every new update comes new anime, and there is a lot of new anime as well as anime that have been cut! Look at the -anime command to find out the list!'},
            { name: 'Quality of Life', value: 'this message has come in an embed and soon every command will be in an embed! At the moment, all of the anime functions are in embeds!'},
            {name: 'And that is it!', value: 'I hope you enjoy the content in this update!'}
        )
    message.author.send(updateEmbed);
    }
    else if(command == 'discord'){
        message.channel.send('Be a part of an incredible community by joining our discord server!: https://discord.gg/zVtm2ud8Af')
    }
    else if (command == 'anime'){
        const animeEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('List of anime:')
	.setDescription('List of anime functions:')
	.addFields(
		{ name: '-sao', value: 'Sword Art Online'},
        { name: '-aotfinalseason', value: 'Attack on titan'},
        { name: '-mhaseason5', value: 'My Hero Academia'},
        {name: '-naruto', value: 'Naruto'},
        {name: '-shippuden', value: 'Naruto: Shippuden'},
        {name: '-boruto', value: 'BORUTO: NARUTO NEXT GENERATIONS'},
        {name: '-onepiece', value: 'One Piece'}
	)
message.channel.send(animeEmbed);  
    }



});

client.login(token)