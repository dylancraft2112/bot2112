import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*ΒΏπππ΄ π΄πππ°π π±πππ²π°π½π³πΎ?*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
π *${v.title}* (${v.url})
β π³πππππππ: ${v.durationH}
β²οΈ πππ±πΈπ³πΎ: ${v.publishedTime}
ποΈ ${v.view} views
      `.trim()
      case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} (${v.subscriber}) ππππππππππππ
π₯ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['buscaryt']
handler.tags = ['descargas', 'herramientas']
handler.command = /buscaryt/i
handler.limit = false
export default handler
