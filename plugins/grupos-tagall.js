let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`πΌπ΄π½ππ°πΉπ΄: ${text ? `${text}\n` : ''}
    
ββγ πππ½ππππππ ππ πππππ γ\n` + users.map(v => 'βΰ¦ΰ§£Ν‘Νβ³βͺ@' + v.replace(/@.+/, '')).join`\n` + '\nβββββ', null, {
mentions: users
    })
}

handler.help = ['invocar']
handler.tags = ['grupos']
handler.command = ['invocar', 'tagall']
handler.admin = true
handler.group = true

export default handler
