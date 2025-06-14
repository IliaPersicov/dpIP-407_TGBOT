const TelegramBot = require('node-telegram-bot-api');

const token = '7649558071:AAFztosTagONDQHU3K-8Z3BMLfmOcoV9jwE';
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start')
  {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, что необходимо заполнить',
    {
        reply_markup:
        {
            keyboard : 
            [
                [{text: 'Заполнить форму' , web_app: {url: webAppUrl}}]
            ]
        }
    })
    await bot.sendMessage(chatId, 'Заходи дорогой!',
    {
        reply_markup:
        {
            inline_keyboard : 
            [
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }
});