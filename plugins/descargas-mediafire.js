
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ:  ${usedPrefix}${command} https://www.mediafire.com/ *_- π°ππ²π·πΈππΎπ πΌπ°ππΎππ΄π π° π·00 πΌπ± πΏππ΄π³π΄ πππ΄ π½πΎ ππ΄π°π½ π΄π½ππΈπ°π³πΎπ_*`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
βγππππ-πππγ
βββ€${eg}
ββππ½πΎπΌπ±ππ΄: ${filename}
ββπͺπΏπ΄ππΎ: ${filesizeH}
ββπππΈπΏπΎ: ${ext}
βββββΧβΧβΧβΧβββ
β _Cargando..._
β β β β β β β‘80%β³`.trim() 
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire <link>']
handler.tags = ['descargas']
handler.command = /^(mediafire|mf)$/i

handler.limit = 3

export default handler