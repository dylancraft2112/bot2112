let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'ΒΏπΏππ πππ ππ ππ ππππππππππππ π ππ ππππππππ?', m)
  else {
    await conn.reply(m.chat, 'π°π³πΈπΎπ, π±πΎπππ» :\')', m)
    conn.close()
  }
}
handler.help = ['stopjadibot','stop']
handler.tags = ['jadibot']
handler.command = /^(stopjadibot|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

