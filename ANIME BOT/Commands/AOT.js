module.exports = {
    name: 'AOT',
    description: "An embed to show info about AOT.",
    execute(message, args, Discord){
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
message.channel.send(AOTS4Embed)
    }
}