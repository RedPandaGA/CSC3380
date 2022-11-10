//import and initialize dotenv to read environment variables
import dotenv from 'dotenv'
dotenv.config()
//import our own js libraries
//environment variables
const PORT = process.env.PORT || '3001'
//import and start express
import express from 'express'
import userAuth from './auth.js'
import logedInRout from './logedInRout.js'
const app = express()
import cors from 'cors'
app.use(cors())
//set express to parse html body as json
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
//     next();
// };
// app.use(allowCrossDomain);
app.use(express.json())
app.use('/auth', userAuth)
app.use('/', logedInRout)
//Express utility functions BEGIN

app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}.`)
});

app.get('/', (req, res) => {
    res.send("Go to /getAPIresponse to see the API response.")
});

//Express utility END

/* 
- By ingredients
- By intolerances
- By religious affiliation
- By genre
- By calories
*/
