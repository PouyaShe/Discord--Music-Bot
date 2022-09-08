const Discord = require('discord.js');
module.exports = {
   info: {
    name: 'report',
    aliases: ['bug','rp'],
    utilisation: '{prefix}report',
     description: 'for report bot bugs to developers :)',
   },
//  callback: async (message, args, client) => {
 run: async (client, message, args) => {
const { MessageButton, MessageActionRow } = require('discord-buttons');
const choice = args.slice().join(" ");
    try{
        if (!choice){
 return message.channel.send("لطفا متن گزارشتان را رو به روی کامند بنویسید تا بررسی شود و یا به سرور پشتیبانی بات سر بزنید و در چت روم مخصوص و یا در تیکت باگه بات را با سازندگان درمیان بگذارید",{ components: [NeedHelpButtons()] })
}else {
      const sizarTMserver = message.client.guilds.cache.get("912596015075455016");
      const channelbug = sizarTMserver.channels.cache.get("988020418612961322");
        let invite = await message.channel.createInvite({
            maxAge: 0, 
            maxUses: 5
        }, )

     const soal = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setTitle(`This Guy Have a Report, User ID: "${message.author.id}"`)
      .setColor('#2F3136')
      .addField(`> **User :**`,`<:reply_desgine:950701730675445790>${message.author}`,true)
      .addField(`> **Send :**` ,`<:reply_desgine:950701730675445790>${choice}`,true) 
      .addField(`> **Server :**`, `<:reply_desgine:950701730675445790>${invite.url}`,true)
      .setURL(invite.url)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setFooter(`Requested By ${message.author.tag}`,client.user.displayAvatarURL({ dynamic: true }))
    channelbug.send({ embed: soal }).then((msg)=> {
      msg.react("📞")
     })
        message.reply('درخواست باگ یا نظر شما به سرور پشتیبانی ارسال شد یا ادمین ها جوین سرور میشوند و حل میکنند یا به شما در خواست فرندی میدهند با تشکر',{ components: [SuppoerButtons()] })
     
    }

function NeedHelpButtons() {
  const btn = new MessageButton()
  .setStyle('url')
  .setLabel('Support Server!')
  .setEmoji('🧰')
  .setURL(`https://discord.com/invite/bNpqrdXNNn`)

  const row = new MessageActionRow()
  .addComponents(btn)

  return row;
}

function SuppoerButtons() {
  const btn1 = new MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setEmoji('🤖')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot`)

  const btn2 = new MessageButton()
  .setStyle('url')
  .setLabel('Support Server!')
  .setEmoji('🧰')
  .setURL(`https://discord.com/invite/bNpqrdXNNn`)

  const row = new MessageActionRow()
  .addComponents(btn1, btn2)

  return row;
}
       }catch(e) {
	console.log(e)
      return message.channel.send(`${client.emotes.error} **| Error, ${e}**`);
        }
    }
}