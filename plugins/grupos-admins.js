let handler = async (m, { conn, participants, args }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
   
    let text = args.join` `
    let oi = `*πππππΌππ:* ${text}`
        let textt = `
γ* πππππππππ ππππππ *γ

${oi}

${listAdmin}


`.trim()
       const ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
      
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', textt, m, false, { contextInfo: { mentionedJid } })
    }

handler.help = ['admins']
handler.tags = ['grupos']

handler.command = /^(admins|@admins)$/i

handler.group = true

export default handler
