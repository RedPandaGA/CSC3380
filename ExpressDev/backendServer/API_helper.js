import axios from 'axios'
//const request = require('request');

export async function callAPI(urli) {
    const res = await axios.get(urli)
    return res.data
}

// console.log(await callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=appl&number=2&metaInformation=true`))