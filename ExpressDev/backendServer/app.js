const { response } = require("express");
const express = require("express");
const PORT = process.env.PORT || '3001';
const app = express();
const Api_helper = require('./API_helper');

app.get('/', (req, res) => {
    res.send("Making API calls...");
});

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`);
});

app.get('/getAPIresponse', (req, res) => {
    Api_helper.callAPI('api url')
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.send(error);
    });
});