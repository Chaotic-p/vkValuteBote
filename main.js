'use strict';

const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const { getValuteData, makeValuteMessage } = require('./src/funcs.js');
const { helloMessage } = require('./src/messages.js');
const { mainKeyboard } = require('./src/keyboards.js');


const bot = new VkBot("c5881bdbd03af7a15eb95ae9587e899ac704392fff9e674fa76eef537a4e548f88ace5ee013d13a84f609");

bot.command('Начать', (ctx) => ctx.reply(helloMessage, null, Markup.keyboard(mainKeyboard)));

bot.command('Доллар', async (ctx) => {
    const valuteData = await getValuteData();
    const usdMessage = makeValuteMessage(valuteData.Valute.USD);
    ctx.reply(usdMessage);
});

bot.command('Евро', async (ctx) => {
    const valuteData = await getValuteData();
    const euroMessage = makeValuteMessage(valuteData.Valute.EUR);
    ctx.reply(euroMessage);
});


bot.startPolling((error) => {
    console.log(error);
});