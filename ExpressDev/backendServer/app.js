require('dotenv').config();
const APIkey = process.env.APIkey;
const { response } = require("express");
const express = require("express");
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

app.get('/exampleSQL', (req, res) => {
    const [sqlres] = connection.query(`
        SELECT MAX(UID)+1
        FROM users
    `)
    res.send(sqlres[0]);
});

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
