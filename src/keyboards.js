const Markup = require('node-vk-bot-api/lib/markup');

const mainKeyboard = [
    [
        Markup.button('Доллар', 'positive'),
        Markup.button('Евро', 'positive'),
    ]
]

module.exports = {
    mainKeyboard
};