module.exports = {
    name: 'Rules',
    description: "An embed to show rules.",
    execute(message, args, Discord){
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('0099ff')
        .setTitle('Attack On Titan')
        .setURL('https://www.crunchyroll.com/en-gb/attack-on-titan')
        .setAuthor('Description by MyAnimeList')
        .setDescription('In Japan, known as Shingeki no Kyojin.')
        .addFields(
            {name: 'About:', value: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayamas award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.'},
            {name: 'Status', value: 'Aired 2013 - Present. 4 Seasons with 75 episodes as of March 28th 2021.'},
            {name: 'Watch the Anime!', value: 'https://www.crunchyroll.com/en-gb/attack-on-titan'},
            {name: 'Read the Manga!', value: 'https://www.crunchyroll.com/comics/manga/attack-on-titan/volumes'},
            {name: 'Recent news:', value: 'The manga has entirely finished and The Final Season (Season 4) will be continued in winter 2022!'},
        )
        .setImage('https://myanimelist.net/anime/16498/Shingeki_no_Kyojin/pics')
        message.channel.send(RulesEmbed);
    }
}