const fetch = require('node-fetch'); 

const getValuteData = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = response.json();
    return data;
};

const makeValuteMessage = (valute) => {
    return (`Информация по валюте ${valute.Name} 
    
    Курс : ${valute.Value}
    Коды : ${valute.CharCode}, ${valute.NumCode}, ${valute.ID}`);
}

module.exports = {
    makeValuteMessage,
    getValuteData
};