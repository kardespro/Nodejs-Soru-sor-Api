//test komut
//API ICIN
const Discord = require("discord.js");
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply('Soru Sor')
let krds = encodeURI(soru)
get(`https://api.kardespro.cf/api/soru/${krds}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('Api Ye Baglanilmadi!')
message.channel.send(body.Cevap)
    }) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sor"],
  permLevel: 0
};

exports.help = {
  name: "sor",
  description: "bota soru sorarsınız",
  usage: "sor"
};
