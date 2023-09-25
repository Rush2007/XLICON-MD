const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94753335072"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://darkalfaruwel:20070603@cluster0.j0oxr8o.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEN1a2M4L2ZTUmJGcVRyWlFWRTdVT0lkbCtxZjBqenhFSjZRaWduTlNGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNG1iTGdHZm5neEJ1QmhIZ2RMb0tEQkk5Uy9kWS9aN3dYeE1FaUdheWJuWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUDhFM0FTWnhyc2VkaFlIN0V5b2JYTnpyWkdqOERqbzljS29CMVJYbkhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSi9oKy8zY0J0eUpqMi8yNlY3L0tnR0VMeFpaZEdSODMrVjVxSzAwZWk0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLbGtXSk1BS1VoeE1UTklUdjZLckJUZG55RkRXUUdtdXYzbEYrdnNhV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk0b3hpZWFXSTIyNW9VdG9pY3NCRGtUNGlvVWFxMjFON3prNnRrSGZDQmc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTUo4S3lOODd2R2ZKN2plMmtKbisxb0M1NGdSbUtudko5ekhaR0FEQWtubUFMS1BZWWtrOUMySlpTc2JXbG93ZkRnenl4RlgwWHRPWTBEK0huUzlnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNSwiYWR2U2VjcmV0S2V5IjoiVzJZK2FRSjJzUlZLK295VjFxL2UwS0locTBUdFI0bGFVbTE3dVczTlF5MD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX2w5blFjNlRSby10ZUVLdlJleThvZyIsInBob25lSWQiOiIxYzBmOTA3YS02MjFlLTQ1NTItYmVhNi1jODkzOTVhYjUyYTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lQZ1VDVmo4Njk3ZEFmMUtUaUxFOUoyNm84PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYQ09PWG5PdDUxRzBSbHI5ZERWcHJaQitKaUE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV284ZTBFRUlLWXhhZ0dHQXM9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikd6azcydHdyK2M3ekVXQ0dKdlRORHBjNUVoa0g3T1BjcGZjV20yL3Zwbjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFIVzlpT0JiK2lJY0tWbFJ4SFY0cDFLK2Fta2kzY0Z4dHhWaFloQXc0M3NoSTBLL2dEVVkrdkFmZCtiZkQrZU9uazZNeXM1b0hxcUNwM2QveldNb0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1NXNrTFJqanNsWktzRmk5S3ptczZtQ1R5RGEvOFZZYm1RdVVWNGNGcFMxblJjZVFIanR2SFhKaWtWaC9uZk1XbXlSb044WjZHY1BpVXRtRWNiZVRpQT09In0sIm1lIjp7ImlkIjoiOTQ3NTMzMzUwNzI6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTVIuVEhFRUtTSEFOQSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzMzNTA3MjoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSczVPOXJjSy9uTzh4RmdoaWIwelE2WE9SSVpCK3pqM0tYM0ZwdHY3NlovIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk1NjMyMzkxfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY MR.THEEKSHANA,
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MR.THEEKSHANA : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI AM MR.THEEKSHANA' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
