import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
ππ ππΏ π°π²πππ°π»: *${max - user.exp}*  π½πΎ π΄π πππ΅πΈπ²πΈπ΄π½ππ΄ πΏπ°ππ° πππ±πΈπ π³π΄ π½πΈππ΄π» [β], ππ΄ πΌπ°π π°π²ππΈππΎ π²πΎπ½ ππ°πΊπ-π±πΎπ-ππ³ π πππ΄π»ππ° πΈπ½ππ΄π½ππ°ππ»πΎ...
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `*π΅π΄π»πΈπ²πΈπ³π°π³π΄π :D ${conn.getName(m.sender)} π°π πππ±πΈπ³πΎ π³π΄ π½πΈππ΄π»π₯³π*οΈ`
        let str = `
${teks} 
π₯ *π½πΈππ΄π» π°π½ππ΄ππΈπΎπ:* ${before}
π₯ *π½ππ΄ππΎ π½πΈππ΄π»:* ${user.level}
π°οΈ *π·πΎππ°:* ${new Date().toLocaleString('id-ID')}
*π²ππ°π½ππΎ πΌπ°π πΈπ½ππ΄ππ°πππ΄ππ£οΈ π²πΎπ½ ππ°πΊπ-π±πΎπ-πΌπ³π€, πΌπ°ππΎπ ππΏππ» πΆπ°π½π°ππ°π π πππ±πΈππ°π π³π΄ π½πΈππ΄π»π₯*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}


handler.help = ['levelup <sube de nivel>']
handler.tags = ['exp y limites']

handler.command = /^level(|up)$/i

export default handler