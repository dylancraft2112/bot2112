import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[β] πΈπ½πΆππ΄ππ° ππ½ π»πΈπ½πΊ πππ΄ π³π΄ππ΄π° π°π²πΎπππ°π,* π΄πΉπ΄πΌπΏπ»πΎ #acortar www.google.com*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `**[β] π»πΈπ½πΊ π°π²πΎπππ°π³πΎ π²πΎπ½ π΄ππΈππΎ*\n\n*π΄π»π°π½π²π΄ π°π½ππ΄ππΈπΎπ:*\n${text}\n*π»πΈπ½πΊ π°π²πΎπππ°π³πΎ:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['acortar <link>']
handler.tags = ['herramientas']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
