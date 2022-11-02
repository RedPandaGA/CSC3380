//import required libraries
import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();
//get environment variables
const DBHOST = process.env.DBHOST;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DBNAME = process.env.DBNAME;
//Establish a server connection pool.
const pool = mysql.createPool({
    host: DBHOST,
    user: USER,
    password: PASS,
    database: DBNAME
}).promise();

async function getTableNames(){
    const [sqlres] = await pool.query("show tables");
    return sqlres;
}

async function insertUser(username, password, email){
    const [sqlres] = await pool.query(`
        INSERT INTO users (Username, Password, Email)
        VALUES (?,?,?)
    `, [username, password, email]);
    return sqlres;
}

async function getUsers(){
    const [sqlres] = await pool.query(`
        SELECT *
        FROM users
    `);
    return sqlres;
}

async function getPantries(){
    const [sqlres] = await pool.query(`
        SELECT *
        FROM pantry
    `);
    return sqlres;
}

async function insertPantry(){
    const [sqlres] = await pool.query(`
        INSERT INTO Pantry ()
        VALUES ()
    `);
    return sqlres;
}

const results = await insertUser("test7", "test", "test7@test.com");
const results2 = await getUsers();
//const results4 = await insertPantry();
const results3 = await getPantries();
console.log(results);
console.log(results2);
//console.log(results4);
console.log(results3);
