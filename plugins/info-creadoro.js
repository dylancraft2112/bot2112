let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βββγ*ππ°πΊπ-π±πΎπ-ππ³*γβ
ββπΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©
ββWa.me/5493772642252 (BOT)
ββWa.me/5493772642151 (CREADOR)
βββββΧβΧβΧβΧβββ
γ€`
let buttonMessage= {
'document': { url: `http://wa.me/5493772642151` },
'mimetype': `application/${document}`,
'fileName': `ππ°πΊπ-π±πΎπ-ππ³`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/5493772642151',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/5493772642151',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'ππ°πΊπ-π±πΎπ πΎπ΅π²'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueΓ±a|dueΓ±o|propietaria|dueΓ±o|creadora|creador)$/i
export default handler

