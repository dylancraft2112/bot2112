const xpperlimit = 50
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `*[β] ππ ππΏ π½πΎ π΄π πππ΅πΈπ²πΈπ΄π½ππ΄ πΏπ°ππ° π²πΎπΌπΏππ°π* ${count} π»πΈπΌπΈππ΄π`, m)
}
handler.help = ['buy <ingresa la cantidad>', 'buyall <compra todo lo posible de limites>']
handler.tags = ['exp y limites'] 
handler.command = /^buy([0-9]+)|buy|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
export default handler

