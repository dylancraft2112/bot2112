let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + 'γ ' + conn.getName(conn.user.jid) + ' Broadcast γ')
    for (let id of users) conn.copyNForward(id, content)
    conn.reply(m.chat, `*[β] πππ°π½ππΌπΈππΈπΎπ½ π΄π½ππΈπ°π³π° π²πΎπ½ π΄ππΈππΎ π°* ${users.length} *π΄π» π½ππΌπ΄ππΎ ππ΄ π²πΎπ½ππΈπππΈπΎ π΄π½ π±πΎπ*
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g,'') + '?text=.menu').join('\n')}`.trim(), m)
  } else conn.reply(m.chat, '*[β] π΄πππ° π΅ππ½π²πΈπΎπ½ π΄π ππΎπ»πΎ πΏπ°ππ° π·πΎπππ π±πΎπ*',  m)
}
handler.help = ['broadcastjadibot','bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

