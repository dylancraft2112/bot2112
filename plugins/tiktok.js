let fetch = require('node-fetch')
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[β] πΏπ°ππ° π³π΄ππ²π°ππΆπ°π ππΈπ³π΄πΎπ π³π΄ ππΈπΊππΎπΊ πΈπ½πΆππ΄ππ΄ ππ½ π΄π»π°π½π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπΊππΎπΊ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktok') {
let espera = '*[β] π΄π½ππΈπ°π½π³πΎ ππ ππΈπΊππΎπΊ, πΏπΎππ΅π°ππΎπ π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ...*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `*Β©ππππ’-π΅ππ‘-π₯π·*`, m)}
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['general']
handler.command = /^(tiktok)$/i
module.exports = handler
