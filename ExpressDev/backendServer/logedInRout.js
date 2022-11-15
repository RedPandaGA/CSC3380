//Import and initialize dotenv to read environment variables
import dotenv from 'dotenv'
dotenv.config()
//import our own js support libraries
import * as db from './database2.js'
import * as Api_helper from './API_helper.js'
//import outside dependencies
import express from 'express'
import jwt from 'jsonwebtoken'
//Get environment variables
const APIkey = process.env.APIkey
const ssecret = process.env.SSECRET

var logedInRout = express.Router()

//Makes all functions in this route check to see if the request supplied a valid token
logedInRout.use((req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(200).json({success: false, message: "Error Token was not provided."})
    }
    const decodedToken = jwt.verify(token, ssecret)
    if(!decodedToken){
        return res.status(404).json({success: false, message: "Error Invalid token"})
    } else {
        console.log("success")
        next()
    }
})

//Used when a user attempts to update/change their password to make sure their old password matches the stored one before updating the stored password
async function passwordCheck(UID, confirmPass){
    console.log("oldPass " + confirmPass)
    const dataPass = await db.getPassword(UID)
    console.log(dataPass.Password)
    if(!dataPass){
        return false
    } else {
        if(dataPass.Password == confirmPass){
            return true
        } else {
            return false
        }
    }
}

//Spoonacular API call functions BEGIN

//Gets the potential ingredients to add to the pantry
logedInRout.get('/getIngredientsearch', async (req, res) => {
    const search = req.query.search
    const test = await Api_helper.callAPI(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIkey}&query=${search}&number=5&metaInformation=true`)
    console.log(test)
    res.send(test)
})

//Queries the spoonacular API to get recipes by either requesting random recipes when there is no search query provided, or by searching for reacipes with the search value
logedInRout.get('/getRecipesByName', async (req, res) => {
    const search = req.query.search
    console.log("Search: " + search)
    let test
    if(search.length == 0) {
        test = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/random?apiKey=${APIkey}&addRecipeInformation=true&number=9`)
    } else {
        test = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}&query=${search}&addRecipeInformation=true&number=9`)
    }
    res.send(test)
})

//Queries the spoonacular API to get recipes based on the users pantry
logedInRout.get('/getRecipesWithPantry', async (req, res) => {
    const pantry = req.query.pantry
    let pantryInfo = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=${pantry}&number=9`)
    const rIds = pantryInfo.map((recipe) => {
        return recipe.id
    })
    let idString = ""
    rIds.forEach((id) => {
        idString = idString.concat(id+',')
    })
    idString = idString.substring(0, idString.length-1)
    let recipes = await Api_helper.callAPI(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${APIkey}&ids=${idString}`)
    res.send({results: recipes})
})

//Spoonacular API call functions END

//PostgreSQL API call functions BEGIN

//updates the user's username so long as the old password matches the stored password
logedInRout.post('/updateUsername', async (req, res) => {
    let check = await passwordCheck(req.body.UID, req.body.oldPassword)
    if(!check){
        res.status(500).send({ success: false, message: "Incorrect old password"})
        return
    } else {
        const update = await db.updateUsername(req.body.UID, req.body.newUsername)
        if(!update){
            res.status(500).send({ success: false, message: "Update failed try again"})
            return
        } else {
            res.status(200).send({ success: true, message: "Successfully Updated Username"})
            return
        }
    }
})

//updates the user's email so long as the old password matches the stored password
logedInRout.post('/updateEmail', async (req, res) => {
    let check = await passwordCheck(req.body.UID, req.body.oldPassword)
    if(!check){
        res.status(500).send({ success: false, message: "Incorrect old password"})
        return
    } else {
        const update = await db.updateEmail(req.body.UID, req.body.newEmail)
        if(!update){
            res.status(500).send({ success: false, message: "Update failed try again"})
            return
        } else {
            res.status(200).send({ success: true, message: "Successfully Updated Email"})
            return
        }
    }
})

//updates the user's password so long as the old password matches the stored password
logedInRout.post('/updatePassword', async (req, res) => {
    let check = await passwordCheck(req.body.UID, req.body.oldPassword)
    if(!check){
        res.status(500).send({ success: false, message: "Incorrect old password"})
        return
    } else {
        const update = await db.updatePassword(req.body.UID, req.body.newPassword)
        if(!update){
            res.status(500).send({ success: false, message: "Update failed try again"})
            return
        } else {
            res.status(200).send({ success: true, message: "Successfully Updated Password"})
            return
        }
    }
})

//updates the users pantry to contain the new/updated pantry sent from client-side
logedInRout.post('/updatePantry', async (req, res) => {
    const update = await db.updatePantry(req.body.UID, req.body.pantryInfo)
    if(!update){
        res.status(500).send({ success: false, message: "Update failed try again"})
        return
    } else {
        res.status(200).send({ success: true, message: "Successfully Updated Password"})
        return
    }  
})

//gets all users data
logedInRout.get('/getUsers', async (req, res) => {
    const users = await db.getUsers()
    console.log(users)
    res.send(users)
})

//gets user information via the user's id
logedInRout.get('/getUsers/:id', async (req, res) => {
    const id = req.params.id
    const user = await db.getUser(id)
    res.send(user)
})

//gets all pantries data
logedInRout.get('/getPantries' , async (req, res) => {
    const pantries = await db.getPantries()
    res.send(pantries)
})

//gets pantry via the provided id
logedInRout.get('/getPantry' , async (req, res) => {
    const id = req.query.UID
    const pantry = await db.getPantry(id)
    console.log(pantry)
    res.send(pantry)
})

//gets all favorites data
logedInRout.get('/getFavorites' , async (req, res) => {
    const favorites = await db.getFavorites()
    res.send(favorites)
})

//gets favorites via the provided id
logedInRout.get('/getFavorites/:id' , async (req, res) => {
    const id = req.params.id
    const favorites = await db.getFavorite(id)
    res.send(favorites)
})

//PostgreSQL API call functions END

export default logedInRout