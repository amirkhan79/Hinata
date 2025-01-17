const { proto } = (await import('@adiwajshing/baileys')).default
let M = proto.WebMessageInfo;
async function handler(m) {
    if (!m.quoted) throw 'reply pesan!'
    let q = M.fromObject(await m.getQuotedObj())
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['bq (reply from teks reply)']
handler.tags = ['baileys']
handler.command = /^bq$/i

export default handler
