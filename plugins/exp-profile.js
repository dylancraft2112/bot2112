 import PhoneNumber from 'awesome-phonenumber'
 import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who)
  } catch (e) {

  } finally {
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who) 
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
β­ββγ*ππ°πΊπ-π±πΎπ-ππ³*γββ  
ββΊπ½πΎπΌπ±ππ΄: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
ββΊπ½ππΌπ΄ππΎ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ββΊπ»πΈπ½πΊ: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
ββΊXP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Listo para *${usedPrefix}levelup*` : `${math} XP restante para subir de nivel`}]
ββΊπ½πΈππ΄π»: ${level}
ββΊππΎπ»π΄: *${role}*
ββΊπ»πΈπΌπΈππ΄: ${limit}
ββΊRegistro: ${registered ? 'SΓ­ (' + new Date(regTime) + ')': 'No'}
ββΊPremium: ${prem ? 'SΓ­' : 'No'}${lastclaim > 0 ? '\nΓltimo Reclamo: ' + new Date(lastclaim) : ''}
β°ββγ*ππ°πΊπ-π±πΎπ-ππ³*γββ
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil']
handler.tags = ['exp y limites']
handler.command = /^profile|perfil$/i

export default handler
