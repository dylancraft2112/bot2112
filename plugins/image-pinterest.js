import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[β] ΒΏπππ΄ π΄πππ°π π±πππ²π°π½π³πΎ? πΈπ½πΆππ΄ππ° πππ΄ π³π΄ππ΄π°π π±πππ²π°π, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} caballo blanco`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Resultados para:*
${text}
`.trim(), m)
}
handler.help = ['pinterest <texto>']
handler.tags = ['descargas']
handler.command = /^(pinterest)$/i

export default handler