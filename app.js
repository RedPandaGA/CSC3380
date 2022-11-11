// Import and initialize dotenv to read environment variables
import dotenv from 'dotenv'
dotenv.config()
//import our own js libraries
//environment variables
const PORT = process.env.PORT || '3002'
const path = require("path");
//import and start express
import express from 'express'
import userAuth from './auth.js'
import logedInRout from './logedInRout.js'
const app = express()
import cors from 'cors'
app.use(cors())
app.use(express.json())
app.use('/auth', userAuth)
app.use('/', logedInRout)

/********************************************************* Heroku utility functions BEGIN ************************************************************************************/

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "ReactDev/pekan-pi-front/build")));
}

/********************************************************* Heroku utility functions END ************************************************************************************/


/********************************************************* Express utility functions BEGIN ************************************************************************************/

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`)
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "ReactDev/pekan-pi-front/build/index.html"));
});

/********************************************************* Express utility functions END ************************************************************************************/

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
