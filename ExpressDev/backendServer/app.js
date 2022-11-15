//Import and initialize dotenv to read environment variables
import dotenv from 'dotenv'
dotenv.config()
//environment variables
const PORT = process.env.PORT || '3002'
//import and start express
import express from 'express'
//import the outside routes
import userAuth from './auth.js'
import logedInRout from './logedInRout.js'
const app = express()
//Opens up CORS rules
import cors from 'cors'
app.use(cors())
//Sets the app to use the JSON middleware
app.use(express.json())
//Adds both routes that are in seperate files
app.use('/auth', userAuth)
app.use('/api', logedInRout)

/********************************************************* Express utility functions BEGIN ************************************************************************************/

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`)
});

/********************************************************* Express utility functions END ************************************************************************************/
