let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}π΄ππ²ππΈπ±π° ππ½π° πΏππ΄πΆππ½ππ° πΏπ°ππ° ππ΄π ππ΄ππΏπΎπ½π³πΈπ³π°\nπππππππ\n*${usedPrefix + command} Hoy va llover?`   
let pre = `
βββγππππππππΌ γβ
ββππππππππΌ | ππππππππ
βοΈ ππππππππΌ
βββββΧβΧβΧβΧβ
ββ${text}
βββπππππππππΌ | ππππππππ 
βββββΧβΧβΧβΧβ
ββ${['Si','Tal vez sΓ­','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
ββ${vs}
βββββΧβΧβΧβΧββ`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'ππ°πΊπ-π±πΎπ', null, null, [
['πΎπππ° ππ΄ππ', `${usedPrefix + command} ${text}`],
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
handler.limit = 1
export default handler
