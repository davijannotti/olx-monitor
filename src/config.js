require('dotenv').config()
const fs = require('fs')
const path = require('path')

let config = {}

config.urls = process.env.OLX_URLS 
    ? process.env.OLX_URLS.split(',').map(url => url.trim()).filter(url => url !== '')
    : [
        'https://www.olx.com.br/games/consoles-de-video-game?ps=600&pe=1300&q=nintendo%20switch%20lite%20desbloqueado&sp=2&opst=2',
        'https://www.olx.com.br/estado-sp?q=ps4&opst=2'
    ]

// this tool can help you create the interval string:
// https://tool.crontap.com/cronjob-debugger

config.interval = process.env.SCRAPE_INTERVAL || '*/5 * * * *' 
config.telegramChatID = process.env.TELEGRAM_CHAT_ID
config.telegramToken = process.env.TELEGRAM_TOKEN
config.dbFile = '../data/ads.db'

config.logger={
    logFilePath: path.resolve(__dirname, '../data/scrapper.log'),
    timestampFormat:'YYYY-MM-DD HH:mm:ss'
}

// Programmatically create the directories for sqlite db and logger if they do not exist
const dbPath = path.resolve(__dirname, config.dbFile)
const dbDir = path.dirname(dbPath)
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true })
}

const logDir = path.dirname(config.logger.logFilePath)
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true })
}

module.exports = config
