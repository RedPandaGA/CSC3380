//require('dotenv').config();
import * as pg from 'pg'
const { Pool } = pg.default
import dotenv from 'dotenv';
dotenv.config();
//import pkg from 'pg'
//get environment variables
const DBHOST = process.env.DBHOST;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DBNAME = process.env.DBNAME;
const DBPORT = process.env.DBPORT;
//"type": "module",

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

// const results = await insertUser("test1", "test", "test1@test.com")
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
    const { rows } = await pool.query(`
        INSERT INTO users ("Username", "Password", "Email")
        VALUES ($1,$2,$3)
    `, [username, password, email])
    return rows
}

export async function getUser(id){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "UID" = $1
    `, [id])
    return rows
}