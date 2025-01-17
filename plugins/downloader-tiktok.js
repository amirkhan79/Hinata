import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
import got from "got"

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
let imgr = flaaa.getRandom()
    let spas = "                "
    let type = (args[0] || '').toLowerCase()
    let urut = text.split`|`
    let one = urut[1]
    if (!text) throw 'Masukkan link tiktok\nApa yang kamu cari?'

    let data = [
        "tikdl",
        "scraper",
        "godown"
    ]
    let listSections = []
    Object.keys(data).map((v, index) => {
        listSections.push(
            ["Method " + data[v].toUpperCase(), usedPrefix + command + " " + data[v] + " |" + text]
        )
    })
    switch (type) {
        case 'tikdl':
            try {
                m.reply(wait)
                let Tikdl = await (await fetch("https://api.tikdl.caliphdev.codes/video?url=" + one)).json()
                let T = Tikdl.result
                let TikdlCap = `${spas}*[ T I K T O K ]*

*ID:* ${T.id}
*Title:* ${T.title}
*Created:* ${T.created_at}

${readMore}${spas}*[ S T A T S ]*
*Like:* ${T.stats.likeCount}
*Comment:* ${T.stats.commentCount}
*Share:* ${T.stats.shareCount}
*Play:* ${T.stats.playCount}
*Saved:* ${T.stats.saveCount}

${spas}*[ V I D E O ]*
*Widh:* ${T.video.width}
*Height:* ${T.video.height}
*Duration:* ${T.video.durationFormatted}
*Ratio:* ${T.video.ratio}

${spas}*[ A U D I O ]*
*ID:* ${T.music.id}
*Title:* ${T.music.title}
*Author:* ${T.music.author}
*Duration:* ${T.music.durationFormatted}
`
                await conn.sendButton(m.chat, TikdlCap, author, T.video.watermark, [
                    ["🎥 Video [NO WM]", usedPrefix + command + " getvideo |" + T.video.noWatermark],
                    ["🎶 Music", usedPrefix + command + " getmusic |" + T.music.play_url]
                ], m, adReplyS)
            } catch (e) {
                throw eror
            }
            break

        case 'scraper':
            try {
                m.reply(wait)
                let Scrap = await Tiktokdl(one)
                let S = Scrap.result
                let ScrapCap = `${spas}*「 T I K T O K 」*

*📛Author:* ${S.author.nickname}
*📒Title:* ${S.desc}
`
                await conn.sendButton(m.chat, ScrapCap, author, S.download.wm, [
                    ["🎥 Video [NO WM]", usedPrefix + command + " getvideo |" + S.download.nowm],
                    ["🎶 Music", usedPrefix + command + " getmusic |" + S.download.music]
                ], m, adReplyS)
            } catch (e) {
                throw eror
            }
            break

        case 'godown':
            try {
                m.reply(wait)
                const god = await axios.get("https://godownloader.com/api/tiktok-no-watermark-free?url=" + one + "&key=godownloader.com");
                let GoCap = `${spas}*[ T I K T O K ]*

*Desc:* ${god.data.desc}
`
                await conn.sendButton(m.chat, GoCap, author, god.data.video_watermark, [
                    ["🎥 Video [NO WM]", usedPrefix + command + " getvideo |" + god.data.video_no_watermark],
                    ["🎶 Music", usedPrefix + command + " getmusic |" + god.data.music_url]
                ], m, adReplyS)
            } catch (e) {
                throw eror
            }
            break

        case 'getmusic':
            try {
                m.reply(wait)
                await conn.sendMessage(m.chat, {
                    audio: {
                        url: one
                    },
                    seconds: fsizedoc,
                    ptt: true,
                    mimetype: "audio/mpeg",
                    fileName: "vn.mp3",
                    waveform: [100, 0, 100, 0, 100, 0, 100]
                }, {
                    quoted: m
                })
            } catch (e) {
                throw eror
            }
            break
        case 'getvideo':
            try {
                m.reply(wait)
                await conn.sendFile(m.chat, one, 'tiktok.mp4', `${spas}*[ T I K T O K]*\nNo Watermark\nMade by: ${author}`, m)
            } catch (e) {
                throw eror
            }
            break

        default:
            return conn.sendButton(m.chat, htki + " TIKTOK DOWN " + htka + "\n⚡ Silakan pilih metode yang anda mau.", author, imgr + command, listSections, m)
    }
}
handler.help = ["tiktok"]
handler.tags = ["downloader"]
handler.command = /^t(iktok|t(dl)?)$/i

export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/* New Line */

//@xct007/tiktok-scraper

async function Tiktokdl(url) {
    //async function tiktokdl(url) {
    try {
        function API_URL(aweme) {
            return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
        };
        async function getAwemeId(url) {
            // any :/
            let result;
            const Konto1 = /video\/([\d|\+]+)?\/?/;
            const valid = url.match(Konto1);
            if (valid) {
                return valid[1];
            } else {
                try {
                    const data = await got
                        .get(url, {
                            headers: {
                                "Accept-Encoding": "deflate",
                            },
                            maxRedirects: 0,
                        })
                        .catch((e) => e.response.headers.location);
                    const _url = data;
                    const _valid = _url.match(Konto1);
                    if (_valid) {
                        result = _valid[1];
                    }
                } catch (error) {
                    // console.log(error)
                    result = false;
                }
            }
            return result;
        };
        const valid = await getAwemeId(url);
        //if (!valid) return false // result = false
        const data = await got
            .get(API_URL(valid), {
                headers: {
                    "Accept-Encoding": "deflate",
                    "User-Agent": "okhttp/3.14.9",
                },
            })
            .catch((e) => e.response);
        //if (!data) return false // result = false
        const body = JSON.parse(data.body);
        const obj = body.aweme_list.find((o) => o.aweme_id === valid)
        const results = {
            aweme_id: obj.aweme_id,
            region: obj.region,
            desc: obj.desc,
            create_time: obj.create_time,
            author: {
                uid: obj.author.uid,
                unique_id: obj.author.unique_id,
                nickname: obj.author.nickname,
                birthday: obj.author.birthday,
            },
            duration: obj.music.duration,
            download: {
                nowm: obj.video.play_addr.url_list[0],
                wm: obj.video.download_addr.url_list[0],
                music: obj.music.play_url.url_list[0],
                music_info: {
                    id: obj.music.id,
                    title: obj.music.title,
                    author: obj.music.author,
                    is_original: obj.music.is_original,
                    cover_hd: obj.music.cover_hd.url_list[0],
                    cover_large: obj.music.cover_large.url_list[0],
                    cover_medium: obj.music.cover_medium.url_list[0],
                },
            },
        };
        return {
            status: true,
            result: results //data.body //valid
        }
    } catch (e) {
        return {
            status: false,
            result: e
        }
    }
}