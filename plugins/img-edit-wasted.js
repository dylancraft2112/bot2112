//* adaptaciΓ²n by odin el fucker kkkk

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*[β] πΈπΌπ°πΆπ΄πΌ π½πΎ ππΎπΏπΎπππ°π³π°*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*π΄π» πΏπ΄ππΎ* ${mime} *π½πΎ ππΎπΏπΎπππ°π³πΎ*`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  let stiker = await sticker(null, wasted, global.packname)
  conn.sendFile(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('*[β] π²πΎπ½ππ΄ππ²πΈπΎπ½ π΅π°π»π»πΈπ³π°, ππ΄ππΏπΎπ½π³π΄ π° ππ½π° πΈπΌπ°πΆπ΄π½*')
  }
}
handler.help = ['wasted']
handler.tags = ['img edit']
handler.command = /^wasted$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler