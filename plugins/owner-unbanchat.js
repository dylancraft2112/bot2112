let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*[β] π±π°π½ π³π΄ππ°π²ππΈππ°π³πΎ, π°π·πΎππ° πΏππ΄π³π΄π πππ°π π΄π» π±πΎπ*')
}
handler.help = ['unbanchat']
handler.tags = ['owner menu']
handler.command = /^unbanchat$/i
handler.owner = true

export default handler