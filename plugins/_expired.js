export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, '*πΆπΎπΎπ³ π±ππ΄,π π΄π» ππΈπ΄πΌπΏπΎ π³π΄π» π±πΎππ€ π΄π½ π΄πππ΄ πΆπππΏπΎ π·π° ππ΄ππΌπΈπ½π°π³πΎ ;)*')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}