//import node-postgre to allow node to connect to postgre db
import * as pg from 'pg'
const { Pool } = pg.default
//import and initialize dotenv to read environment variables 
import dotenv from 'dotenv'
dotenv.config()
//get environment variables
const DBHOST = process.env.DBHOST
const USER = process.env.DBUSER
const PASS = process.env.DBPASS
const DBNAME = process.env.DBNAME
const DBPORT = process.env.DBPORT

const pool = new Pool({
    host: DBHOST,
    user: USER,
    password: PASS,
    database: DBNAME,
    port: DBPORT
})

//Debug functions
export async function getTableNames(){
    const { rows } = await pool.query(`
        SELECT *
        FROM pg_catalog.pg_tables
        WHERE schemaname != 'pg_catalog' AND 
            schemaname != 'information_schema';
    `)
    return rows;
}

export async function getUsers(){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
    `)
    return rows
}

export async function getPantries(){
    const { rows } = await pool.query(`
        SELECT *
        FROM pantry
    `)
    return rows
}

export async function getFavorites(){
    const { rows } = await pool.query(`
        SELECT *
        FROM favorites
    `)
    return rows
}

// const tables = await getTableNames()
// console.log(tables)

// await insertUser("test1", "test", "test1@test.com")
// await insertUser("test2", "test", "test2@test.com")
// await insertUser("test3", "test", "test3@test.com")
// const results = await insertUser("test4", "test", "test4@test.com")
// const results2 = await getUsers()
// const results3 = await getPantries()
// const results4 = await getFavorites()
// console.log(results)
// console.log(results2)
// console.log(results3)
// console.log(results4)

//Actual Functions
//Insert users
export async function insertUser(username, password, email){
    let ret = null
    await pool.query(`
        INSERT INTO users ("Username", "Password", "Email")
        VALUES ($1,$2,$3)
    `, [username, password, email])
    .then(dbres => {
        // console.log("good res: " + JSON.stringify(dbres))
        ret = true
    })
    .catch(err => {
        console.log("error: " + err.stack)
        ret = false
    })
    return ret
}

export async function updatePassword(UID, newPassword){
    let ret = null
    await pool.query(`
        UPDATE users SET "Password" = $1 WHERE "UID" = $2
    `, [newPassword, UID])
    .then(dbres => {
        ret = true
    })
    .catch(err => {
        ret = false
    })
    return ret
}

export async function updateUsername(UID, newUsername){
    let ret = null
    await pool.query(`
        UPDATE users SET "Username" = $1 WHERE "UID" = $2
    `, [newUsername, UID])
    .then(dbres => {
        ret = true
    })
    .catch(err => {
        ret = false
    })
    return ret
}

export async function updateEmail(UID, newEmail){
    let ret = null
    await pool.query(`
        UPDATE users SET "Email" = $1 WHERE "UID" = $2
    `, [newEmail, UID])
    .then(dbres => {
        ret = true
    })
    .catch(err => {
        ret = false
    })
    return ret
}

export async function getPassword(UID){
    let ret = null
    await pool.query(`
        SELECT "Password" FROM users WHERE "UID" = $1
    `, [UID])
    .then(dbres => {
        ret = dbres
    })
    .catch(err => {
        ret = false
    })
    return ret
}

export async function getUser(id){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "UID" = $1
    `, [id])
    return rows
}

export async function getUserByName(username){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "Username" = $1
    `, [username])
    return rows
}

export async function getUserByEmail(email){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "Email" = $1
    `, [email])
    return rows
}

export async function getPantry(id){ 
    const { rows } = await pool.query(`
        SELECT *
        FROM pantry
        WHERE "PID" = $1
    `, [id])
    return rows
}

export async function getFavorite(id){ 
    const { rows } = await pool.query(`
        SELECT *
        FROM favorites
        WHERE "FID" = $1
    `, [id])
    return rows
}