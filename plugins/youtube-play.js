import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[β] πΏπ°ππ° π³π΄ππ²π°ππΆπ°π ππ½π° π²π°π½π²πΈπΎπ½ πππ° π²πΎπΌπΎ π΄πΉπ΄πΌπΏπ»πΎ:*${usedPrefix}${command} i'm happy faraon β`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*[β] π»πΎ ππ΄π½ππΈπΌπΎπ, ππΈπ³π΄πΎ/π°ππ³πΈπΎ π½πΎ π΄π½π²πΎπ½πππ°π³πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ π·πΎπππΎ π½πΎπΌπ±ππ΄'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
γ π°πππΈ ππΈπ΄π½π΄π γ
π *ππΈπππ»πΎ:* ${title}
π *πππ»:* ${url}
πΉ *π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${description}
β²οΈ *πΏππ±π»πΈπ²π°π³πΎ π΄π½:* ${publishedTime}
β *π³πππ°π²πΈπΎπ½:* ${durationH}
ποΈ *ππΈπππ°π:* ${viewH}
γ π±π ππ°πΊπ-π±πΎπ γ
  `.trim(), author, thumbnail, url, '*πΊππ΄π π΄π½ ππΎππππ±π΄*', null, null, [
    ['π°ππ³πΈπΎ π§', `${usedPrefix}yta ${url} yes`],
    ['ππΈπ³π΄πΎ π₯', `${usedPrefix}ytv ${url} yes`],
    ['πΌπ°π ππ΄πππ»ππ°π³πΎππ', `${usedPrefix}playlist ${text}`]  
], m)
}
handler.help = ['play <titulo>','play2']
handler.tags = ['descargas']
handler.command = /^play|play2?$/i

handler.exp = 0

export default handler

