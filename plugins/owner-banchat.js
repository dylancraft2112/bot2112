let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*[β]π΄π» π²π·π°π π΅ππ΄ π±π°π½π΄π°π³πΎ ππ° π½πΎ πΏπΎπ³ππ°π πππ°π π΄π» π±πΎπ*')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner menu']
handler.command = /^banchat$/i

handler.owner = true

export default handler