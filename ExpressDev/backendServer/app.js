import dotenv from 'dotenv';
dotenv.config();
import * as db from './database2.js'
import express from 'express'
const APIkey = process.env.APIkey;
// const express = require("express");
const PORT = process.env.PORT || '3001';
const app = express();
import * as Api_helper from './API_helper.js'
//const Api_helper = require('./API_helper.cjs');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Go to /getAPIresponse to see the API response.");
});

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`);
});

app.get('/getAPIresponse', async (req, res) => {
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=beef,+potatoes,+carrots}`)
    res.send(test)
});

app.get('/getIngredientsearch', async (req, res) => {
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=appl&number=5&metaInformation=true`)
    res.send(test)
});

// app.post('/createuser',  (req, res) => {
// });

app.get('/getUsers', async (req, res) => {
    const users = await db.getUsers()
    res.send(users)
});

app.get('/getUsers/:id', async (req, res) => {
    const id = req.params.id
    const user = await db.getUser(id)
    res.send(user)
})

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
