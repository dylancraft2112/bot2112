let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, *π½ππ΄ππ° πΏπ°ππ΄πΉπ°,π©π»ββ€οΈβπ¨π» πππ΄ π±πΎπ½πΈππΎπ₯°*${toM(b)},π*`, null, {
mentions: [a, b]
})}
handler.help = ['emparejar']
handler.tags = ['juegos']
handler.command = ['emparejar']
handler.group = true
export default handler
