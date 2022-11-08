import dotenv from 'dotenv'
dotenv.config()
import * as db from './database2.js'
import express from 'express'
import jwt from 'jsonwebtoken'
const ssecret = process.env.SSECRET

var userAuth = express.Router()

userAuth.post('/createuser',  async (req, res) => {
    let { username, email, password } = req.body
    console.log(username)
    console.log(email)
    console.log(password)
    const dbres = await db.insertUser(username, password, email)
    res.send(dbres)
})

userAuth.post('/login', async (req, res) => {
    let { email, password } = req.body

    let existingUser;
    try{
        const temp = await db.getUserByEmail(email)
        existingUser = temp[0]
        console.log(existingUser)
    } catch {
        const err = new Error("Error! Something went wrong.")
        console.log(err)
        return err
    }
    if(!existingUser || existingUser.Password != password){
        const err = Error("Wrong details please check")
        console.log(err)
        return err
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
        return err
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