const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUREcFBpcjNSREZPRzJENithbktNUU53ZFFFeXE5d1JYVFdpbUpYRCtWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzVweit1WndBV0tQMmM5RU14Q3JmTmoySXByOGt5MTEyTHU5VE8yQmNtWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRStCZTJFVlZidVZDNzE2V0ZOMmluKzNBYkU4NzlMRUhCKzY4SFVDOFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZDN0VXdrMzFxa2ZkTjF0RytiZXVOdlJRMkJnS2tkSWUxOUNUb2xRaVJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGbDZBdXc2QlhSVnljNzhIWk52c2o0VSt2Skw1b3ZCYTQzYkVEbU5Ra0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQySHl5eUpSZFNKOXFJK21GbkFBdmhSMjB2c0FCUDFmQ01HQXQ2WjhUQkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUI5R09lV21VVi9nbHkzTkZQT3RyN3hZcy96YzFSTE5XZjlSd2ZZRmxXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0g3WkVjazNZd0JHNG82eFJVdVg5OFBIVlQxWVcxeVVxZWM5U1VTWE9uWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9TTTcxazRGVy9JYS96VGI2UlMwaWxMdGFjREJqT1lzUVlVTU8wSHNFWDFxWmRDc1V1dHdJcllpRnNWTWpYSWt0OG1weUxVZjVlay9OQXlWYUdadER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IlhNZHluN3JVYjdQM00zbVI5UkRKUW8rVWZ5M1k4Z1F4ekFXU3JxZmVoVWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Nzg0MDc1NzMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCOEUxQTBFN0YzMEM4OTJGMDg1MzZGN0M4RjE1MUM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY2NTM5NTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc4NDA3NTczM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMTFGODRBQ0IzODJBMjM5OURDMkE3RTAyN0FBNDZDNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjUzOTU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3ODQwNzU3MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTZBNjVFNEUwQjM5RjJGRjFGQTM0NDFFNzE4ODdBOEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjY1Mzk1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUzZMUUtTRDUiLCJtZSI6eyJpZCI6IjI1NTc4NDA3NTczMzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc4MzAxOTA5ODY0Njg5OjFAbGlkIiwibmFtZSI6IkpvbWlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcjBpSzhERVA3UzBjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwbkpQVEcyRlA1b1BLWUxMY1R0c1loaDZyTHRicHpQYzljYVduTkVTdWlZPSIsImFjY291bnRTaWduYXR1cmUiOiIvN3lpajE5djFUczRySStsSGd3NWRTdkMzMytZMzc0Tll1WUFvK1d2RFFLcG5KdFh6WlBkR0s5a0NWaXpOY0ZjMVp2OUhkbVpRWmpEalp1ano0STJCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnVsYXhLamZFeC93L1pzVWg5M0dXZm9xREtQVDNrYVR6M09aajVSYVgwa2Fta0w0YytDMlhqT09YV1pYWEk3bDQyaTY0djEzWm9TQjVZZjRhUDV3RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3ODQwNzU3MzM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkSnlUMHh0aFQrYUR5bUN5M0U3YkdJWWVxeTdXNmN6M1BYR2xwelJFcm9tIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY2NTM5NTMsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdWoifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍,-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-HACKER-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
