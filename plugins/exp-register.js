
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*[โ] ๐๐ฐ ๐ด๐๐๐ฐ๐ ๐๐ด๐ถ๐ธ๐๐๐๐ฐ๐ณ๐พ*  \n๐ฟ๐ฐ๐๐ฐ ๐๐พ๐ป๐๐ด๐ ๐ฐ ๐๐ด๐ถ๐ธ๐๐๐๐ฐ๐๐๐ด ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `*[โ] ๐ป๐พ ๐ด๐๐๐ฐ๐ ๐ฐ๐ฒ๐ธ๐ด๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ป*โ๐ป๐ฅธ๐ค๐ป\n*${usedPrefix}registrar nombre|edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*[โ] ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ฝ๐พ ๐ฟ๐๐ด๐ณ๐ด ๐ด๐๐๐ฐ๐ ๐๐ฐ๐ฒ๐ธ๐พ* (alfanumรฉrico)'
  if (!age) throw '*[โ] ๐ป๐ฐ ๐ด๐ณ๐ฐ๐ณ ๐ฝ๐พ ๐ฟ๐๐ด๐ณ๐ด ๐ด๐๐๐ฐ๐ ๐๐ฐ๐ฒ๐ธ๐ฐ* (Nรบmero)'
  age = parseInt(age)
  if (age > 120) throw '*[โ] ๐ด๐๐๐ฐ๐ ๐ผ๐๐ ๐๐ธ๐ด๐น๐พ, ๐๐๐ด๐ป๐๐ด ๐ฒ๐๐ฐ๐ฝ๐ณ๐พ ๐ฐ๐๐ฐ๐ ๐๐ด๐ด๐ฝ๐ฒ๐ฐ๐๐ฝ๐ฐ๐ณ๐พ*'
  if (age < 5) throw '*[โ] ๐ด๐๐ด๐ ๐ผ๐๐ ๐น๐พ๐๐ด๐ฝ  ๐ผ๐ธ๐ฝ๐ธ๐ผ๐พ ๐ณ๐ด ๐ด๐ณ๐ฐ๐ณ ๐ฟ๐ฐ๐๐ฐ ๐๐๐ฐ๐ ๐ด๐ป ๐ฑ๐พ๐* +15.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*๐๐ด๐๐ถ๐ธ๐๐๐๐ฐ๐ณ๐พ [โ]*

โญโใ๐ง๐ ๐ถ๐ป๐ณ๐ผ๐ฟ๐บ๐ฎ๐ฐ๐ถ๐ผ๐ป ใ
โโเผึถึชโโฆโ_๐ฝ๐พ๐ผ๐ฑ๐๐ด: ${name}
โโเผึถึชโโฆโ ๐ด๐ณ๐ฐ๐ณ: ${age} aรฑos
โโเผึถึชโโฆโ ๐ฝ๐: ${sn}
โฐโโโโ
*si falta su sn (numero de serie), escriba ${usedPrefix}sn
`.trim())
}
handler.help = ['reg <nombre>.<edad>'], 'register <nombre>.<edad>'
handler.tags = ['exp y limites']

handler.command = /^(registrar|reg(ister)?)$/i

export default handler
