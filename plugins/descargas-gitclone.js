import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}*[βππππβ] π΄ππ²ππΈπ±π΄ π΄π» π΄π»π°π½π²π΄ π³π΄ πΆπΈππ·ππ±*\nπ΄πΉπ΄πΌπΏπ»πΎ\n*${usedPrefix + command} https://github.com/*${usedPrefix + command}*`
if (!regex.test(args[0])) throw `${fg}π΄π»π°π½π²π΄ π½πΎ ππ°π»πΈπ³πΎ. π³π΄π±π΄ ππ΄π ππ½ π΄π»π°π½π²π΄ π³π΄ πΆπΈππ·ππ±`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}*[β] ππ π°ππ²π·πΈππΎ π΄πππ° π²πΈπ΄π½π³πΎ π΄π½ππΈπ°π³πΎ... π\nππΈ π»π° π³π΄ππ²π°ππΆπ° π½πΎ π»π»π΄πΆπ° πΏππ΄π³π΄ ππ΄π πππ΄ π΄π» ππ΄πΏπΎππΈππΎππΈπΎ π΄π πΌππ πΏπ΄ππ°π³πΎ.*`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `π»πΈπππΎ π°πππΈ ππΈπ΄π½π΄π ππ πΏπ΄π³πΈπ³πΎ,π₯³ π³πΈππ΅ππππ°π»πΎβπ»
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, md, 'ππππ-πππ', null, null, [
 ['ΰ³αΝ‘ΝΰΏπ½πππ½ππ π ππ ππππππ','/listmenu']
 ['ΰ³αΝ‘ΝΰΏπππππππππ€','/creator'],
], m,)  
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 3
handler.exp = 59
export default handler
