
import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'Β―\\*ππ°πππΈ ππΈπ΄π½π΄π ππ ππ π²πΎπ³π΄*', m)

handler.help = ['Qr <texto>']
handler.tags = ['herramientas']
handler.command = /^qr(code)?$/i


export default handler