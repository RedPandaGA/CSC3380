import dotenv from 'dotenv'
dotenv.config()
import * as db from './database2.js'
import express from 'express'
import jwt from 'jsonwebtoken'
const ssecret = process.env.SSECRET

var userAuth = express.Router()

//Calls on the DB function "insertUser" to insert a new user into the data base. 
userAuth.post('/createuser',  async (req, res) => {
    let { username, email, password } = req.body
    const dbres = await db.insertUser(username, password, email)
    if(!dbres){
        let data = { successful: false, message: "Credentials already in use" }
        res.send(data)
    } else {
        let data = { successful: true, message: "User successfully made" }
        res.send(data)
    }
})

//Checks to see if user credientials are correct and then generates a JWT token for verifying user authentication for future API calls from the client
userAuth.post('/login', async (req, res) => {
    let { email, password } = req.body

    let existingUser;
    try{
        const temp = await db.getUserByEmail(email)
        existingUser = temp[0]
    } catch {
        const err = new Error("Error! Something went wrong.")
        console.log(err)
        res.status(500).send({ success: false, message: "Server encountered an issue try again later" })
        return
    }
    if(!existingUser || existingUser.Password != password){
        const err = Error("Wrong details please check")
        console.log(err)
        res.status(500).send({ success: false, message: "Incorrect login! Please fix email/password." })
        return
    }
    let token;
    try {
        token = jwt.sign({ userId: existingUser.UID, username: existingUser.Username, email: existingUser.Email },
            ssecret,
            { expiresIn: "24h" }
            )
    } catch (err){
        const error = new Error("Error! Something went wrong.")
        console.log(err)
        res.status(500).send({ success: false, message: "Server encountered an issue try again later" })
        return
    }


    res.status(200).json({
        success: true,
        data: { 
                userId: existingUser.UID, 
                username: existingUser.Username, 
                email: existingUser.Email,
                token: token
            }
    })
})

export default userAuth