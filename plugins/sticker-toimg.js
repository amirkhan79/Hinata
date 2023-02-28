import { webp2png, webp2mp4 } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    let notStickerMessage = `Reply sticker with command *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*DONE*', m, null, adReply)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = /^t(oim(age|g)|im(age|g))$/i

export default handler