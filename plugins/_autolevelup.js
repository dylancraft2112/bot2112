import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
π΅π΄π»πΈπ²πΈππ°π²πΈπΎπ½π΄π,π₯³ π·π°π πππ±πΈπ³πΎ π³π΄ π½πΈππ΄π»!!, ππΈπΆππ΄ π°ππΈβ¨ποΈ
*${before}* -> *${user.level}*
πππ΄ *.profile* ππΏπ°ππ° ππ΄ππΈπ΅πΈπ²π°π ππ π½πΈππ΄π» β
	`.trim())
    }
}
export const disabled = true