require('dotenv').config();
const APIkey = process.env.APIkey;
const { response } = require("express");
const express = require("express");
const PORT = process.env.PORT || '3001';
const app = express();
const Api_helper = require('./API_helper');

app.get('/', (req, res) => {
    res.send("Go to /getAPIresponse to see the API response.");
});

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`);
});

app.get('/getAPIresponse', (req, res) => {
    Api_helper.callAPI(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=beef,+potatoes,+carrots}`)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.send(error);
    });
    
});

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
