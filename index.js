const TelegramBot = require('node-telegram-bot-api');

const token = '7649558071:AAFztosTagONDQHU3K-8Z3BMLfmOcoV9jwE';
const webAppUrl = '/';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start')
  {
    await bot.sendMessage(chatId, 'тест1',
        {
            reply_markup:
            {
                keyboard:
                [
                    [{text: 'заполни форму'}]
                ]
            }
        }
    )
    /*await bot.sendMessage(chatId, 'тест2',
        {
            reply_markup:
            {
                inline_keyboard:
                [
                    [{text: 'сделать заказ', web_app: {webAppUrl}}]
                ]
            }
        }
    )*/

  }
});