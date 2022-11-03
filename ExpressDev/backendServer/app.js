//import and initialize dotenv to read environment variables
import dotenv from 'dotenv';
dotenv.config();
//import our own js libraries
import * as Api_helper from './API_helper.js'
import * as db from './database2.js'
//environment variables
const APIkey = process.env.APIkey;
const PORT = process.env.PORT || '3001';
//import and start express
import express from 'express'
const app = express();
//set express to parse html body as json
app.use(express.json());

//Express utility functions BEGIN

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`);
});

app.get('/', (req, res) => {
    res.send("Go to /getAPIresponse to see the API response.");
});


//Express utility END

//Spoonacular API call functions BEGIN

app.get('/getAPIresponse', async (req, res) => {
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=beef,+potatoes,+carrots}`)
    res.send(test)
});

app.get('/getIngredientsearch/:search', async (req, res) => {
    const search = req.params.search
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=${search}&number=5&metaInformation=true`)
    res.send(test)
});

//Spoonacular API call functions END

//PostgreSQL API call functions BEGIN
app.get('/createuserTest', async (req, res) => {
    Api_helper.test();
    res.send()
})

app.post('/createuser',  async (req, res) => {
    await req.body
    console.log(req.body.username)
    console.log(req.body.password)
    console.log(req.body.email)
    const dbres = await db.insertUser(req.body.username, req.body.password, req.body.email)
    res.send(dbres)
})

app.get('/getUsers', async (req, res) => {
    const users = await db.getUsers()
    res.send(users)
})

app.get('/getUsers/:id', async (req, res) => {
    const id = req.params.id
    const user = await db.getUser(id)
    res.send(user)
})

app.get('/getPantries' , async (req, res) => {
    const pantries = await db.getPantries()
    res.send(pantries)
})

app.get('/getPantries/:id' , async (req, res) => {
    const id = req.params.id
    const pantry = await db.getPantry(id)
    res.send(pantry)
})

app.get('/getFavorites' , async (req, res) => {
    const favorites = await db.getFavorites()
    res.send(favorites)
})

app.get('/getFavorites/:id' , async (req, res) => {
    const id = req.params.id
    const favorites = await db.getFavorite(id)
    res.send(favorites)
})

//PostgreSQL API call functions END

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
