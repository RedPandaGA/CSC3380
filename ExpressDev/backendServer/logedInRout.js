import dotenv from 'dotenv'
dotenv.config()
import * as db from './database2.js'
import express from 'express'
import jwt from 'jsonwebtoken'
const ssecret = process.env.SSECRET

var logedInRout = express.Router()
/*
{
	aisles: [{aisleName: "aisle1", ingredients: [{..},{..}] }, {aisleName: "aisle2", ingredients: [{..},{..}]}]
}
*/
logedInRout.use((req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(200).json({success: false, message: "Error Token was not provided."})
    }
    const decodedToken = jwt.verify(token, ssecret)
    if(!decodedToken){
        return res.status(404).json({success: false, message: "Error Invalid token"})
    } else {
        console.log("sucess")
        next()
    }
})

//Spoonacular API call functions BEGIN

logedInRout.get('/getAPIresponse', async (req, res) => {
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=beef,+potatoes,+carrots}`)
    res.send(test)
})

logedInRout.get('/getIngredientsearch/:search', async (req, res) => {
    const search = req.params.search
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=${search}&number=5&metaInformation=true`)
    res.send(test)
})

//Spoonacular API call functions END

//PostgreSQL API call functions BEGIN

logedInRout.get('/createuserTest', async (req, res) => {
    Api_helper.test();
    res.send()
})

logedInRout.get('/getUsers', async (req, res) => {
    const users = await db.getUsers()
    console.log(users)
    res.send(users)
})

logedInRout.get('/getUsers/:id', async (req, res) => {
    const id = req.params.id
    const user = await db.getUser(id)
    res.send(user)
})

logedInRout.get('/getPantries' , async (req, res) => {
    const pantries = await db.getPantries()
    res.send(pantries)
})

logedInRout.get('/getPantry' , async (req, res) => {
    const id = req.params.id
    const pantry = await db.getPantry(id)
    res.send(pantry)
})

logedInRout.get('/getFavorites' , async (req, res) => {
    const favorites = await db.getFavorites()
    res.send(favorites)
})

logedInRout.get('/getFavorites/:id' , async (req, res) => {
    const id = req.params.id
    const favorites = await db.getFavorite(id)
    res.send(favorites)
})

//PostgreSQL API call functions END

export default logedInRout