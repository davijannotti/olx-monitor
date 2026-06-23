require('dotenv').config()

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
    logFilePath: '../data/scrapper.log',
    timestampFormat:'YYYY-MM-DD HH:mm:ss'
}

module.exports = config
