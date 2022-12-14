import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw '*[β] π»πΎπ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄π π½πΎ π΄πππ°π½ π³π΄π΅πΈπ½πΈπ³πΎπ* '
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '*[β] π½πΎ π΄πππΎπ π΄π½ π΄ππ΄ πΆπππΏπΎ*'
    if (!me.admin) throw '*[β] π½π΄π²π΄ππΈππΎ ππ΄π π°π³πΌπΈπ½π πΏπ°ππ° π²ππΌπΏπ»πΈπ πππ πΎππ³π΄π½π΄π*'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.admin = true
handler.help = ['invitacion link']
handler.tags = ['grupos']
handler.command = ['invitacion', 'invitaciΓ³n']
handler.botAdmin = true

export default handler