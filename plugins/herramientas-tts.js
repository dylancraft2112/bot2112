import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'id'
let handler = async (m, { conn, args, usedPrefix, command }) => {

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) throw `*[β] _πΏπ°ππ° πππ°π³ππ²πΈπ ππ½ ππ΄πππΎ π° ππΎπ πππ° π²πΎπΌπΎ π΄πΉπ΄πΌπΏπ»πΎ_* ${usedPrefix}${command} π΄π Hola`
    res = await tts(text, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}
handler.help = ['tts es <texto a voz>']
handler.tags = ['herramientas']
handler.command = /^g?tts$/i

export default handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}