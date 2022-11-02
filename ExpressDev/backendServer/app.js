import dotenv from 'dotenv';
dotenv.config();
import * as db from './database2.js'
import express from 'express'
const APIkey = process.env.APIkey;
// const express = require("express");
const PORT = process.env.PORT || '3001';
const app = express();
const Api_helper = require('./API_helper');

app.use(express.json());

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

app.get('/getIngredientsearch', (req, res) => {
    Api_helper.callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=appl&number=5&metaInformation=true`)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.send(error);
    });

});

app.post('/createuser',  (req, res) => {
    newUV = req.body;
    sqlres = connection.query(`
        INSERT INTO users (UID, Username, Password, Email, PID, FID)
        VALUES (((SELECT MAX(UID) FROM users)+1),?,?,?,?,?)
    `, [])
    
});

app.get('/getUsers', async (req, res) => {
    const users = await db.getUsers()
    res.send(users);
});

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
