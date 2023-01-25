const fetch = require('node-fetch');

const url = 'https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a4e863d63dmsh1c8d1d6573360cdp1f5cf1jsn3f96064ad730',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));