let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*[β] π»π° πΈπΌπ°πΆπ΄π½ π½πΎ π΅ππ΄ π΄π½π²πΎπ½πππ°π³π°*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `*[β] π΄π½ππΈπ° πΎ ππ΄ππΏπΎπ½π³π΄ ππ½π° πΈπΌπ°πΆπ΄π½ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ*: *${usedPrefix + command}*`
}
handler.help = ['fotogrupo <etiqueta foto>']
handler.tags = ['grupos']

handler.command = /^fotogrupo$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler