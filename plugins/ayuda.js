

let handler = async (m, { conn }) => {

    let info1 = 'π°πππ³π° π³π΄π» π±πΎπ'


    let info
        = `
*πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ π³π΄π» π±πΎπ*
    
β­β[ ππππ-πππ ]
β *β€ π·πΎπ»π° ${name}*
β
β *γπ€ π΄πππ°π³πΎ π³π΄π» π±πΎπ π€ε½‘*
β *=> π±πΎπ π°π²ππΈππΎ β*
β *=> π±πΎπ π³π΄ πππΎ πΏππ±π»πΈπ²πΎ β*
β *=> ππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}*
β°βββββββββββββββ
    
*ΒΏπππ΄ π΄π ππ½ π±πΎπ?*
    
un Bot de WhatsApp es una inteligencia  artificial con la cual podras interactuar 
a travez de comandos que puedes ver escribiendo .menu, estos comandos son capaces 
de realizar diversas tareas como descargar mΓΊsica, videos, crear stickers, descarga de 
imagenes etc. recuerda que cada comando deve ser ejecutado con su prefijo . antes de escribirlo, ejemplo .aesthetic.
si intentas poner un comando que no es del Bot este simplemente  no responderΓ‘, asi que revisa bien el menu de comandos disponibles
  
    
*π΅π°π»π»πΎπ πΎ π»π΄π½ππΈπππ³ π³π΄ ππ΄ππΏππ΄πππ°π π³π΄ π²πΎπΌπ°π½π³πΎπ:*
    
Si bien el Bot no esta activo las 24 horas del dia pero puede que en determinado momento el Bot deje de funcionar por unos minutos si pasa mas de 10 minutos tienes que ser pasiciente, el Bot volvera. Tambien puede que varios Comandos no funcionen debido a mala respuesta del servidor, si no Funciona simplemente  intenta en otro momento.
    
*π²ππ΄π°π³πΎπ:*
    
Este Bot Fue Creado con partes de repositorios de hotros Bots, editado/creado por TAKU programador novato. ;)

*π»πΈπΌπΈππ΄π*

para envitar abusos del Bot, Este tiene un Sistema de limites el cual te consumiran segun el comando ejecutado, Por defecto sΓ© otorgan 15 Limites por usuarios Pero Puedes obtener mas al Dia usando el comando .reclamarxp, una vez hecho Γ©sto ejecutar el comando .buyall para obtener mΓ‘s lΓ­mites. Recuerda que solo es posible una vez al dia asi que usalo sabiamente. De igual manera si eres activo e interactuas con el Bot podrΓ‘s comprar mas limites al ganar mas EXP.
EXO = experiencia de uso del Bot
    
*π΄π½πππ°π π° πΆπππΏπΎπ πΎ πππΎ π³π΄π» π±πΎπ π΄π½ πΏπ*
    
se admite usar el Bot en privado, si basa a invitar al Bot a tu grupo, el Creador Owner Del Bot, Tiene que ser admins.
    
*ππ΄πΏπΎππΈππΎππΈπΎ π³π΄π» π±πΎπ*
 
El repositorio Del Bot sera visto en breve...

*πππ± π±πΎππ*

Los comandos  .jadibot, .getcode, .stopjadibot no estan abilitados en este Bot

 *π³πΈππ΅ππππ° π³π΄π» π±πΎπ*
BY Taku-Bot/Taku ;)
`
    conn.sendButton(m.chat, info1, info, author, [['πΌπ΄π½ππ¬', `.menu`]], m)
}


handler.customPrefix = /terminos|ayuda|infobot|informacion|dildo|botmorto/i
handler.command = new RegExp
handler.help = ['ayuda']
handler.tags = ['main']
handler.fail = null
export default handler

