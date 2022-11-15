//import node-postgre to allow node to connect to postgre db
import * as pg from "pg";
const { Pool } = pg.default;

//import and initialize dotenv to read environment variables
import dotenv from "dotenv";
dotenv.config();

//get environment variables
const DBHOST = process.env.DBHOST;
const USER = process.env.DBUSER;
const PASS = process.env.DBPASS;
const DBNAME = process.env.DBNAME;
const DBPORT = process.env.DBPORT;

//Establishes a pool of connections to the database
const pool = new Pool({
  host: DBHOST,
  user: USER,
  password: PASS,
  database: DBNAME,
  port: DBPORT,
});

//Debug functions
//Gets all the tables in the current database
export async function getTableNames() {
  const { rows } = await pool.query(`
        SELECT *
        FROM pg_catalog.pg_tables
        WHERE schemaname != 'pg_catalog' AND 
            schemaname != 'information_schema';
    `);
  return rows;
}

//Gets all users in the current database
export async function getUsers() {
  const { rows } = await pool.query(`
        SELECT *
        FROM users
    `);
  return rows;
}

//Gets all pantries in the current database
export async function getPantries() {
  const { rows } = await pool.query(`
        SELECT *
        FROM pantry
    `);
  return rows;
}

//Gets all favorites in the current database
export async function getFavorites() {
  const { rows } = await pool.query(`
        SELECT *
        FROM favorites
    `);
  return rows;
}

//Actual Functions

//Gets user data via searching for the username
export async function getUserByName(username){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "Username" = $1
    `, [username])
    return rows
}

//Creates a new entry in the users table, therefore creating a new user
export async function insertUser(username, password, email){
    let ret = null
    await pool.query(`
        INSERT INTO users ("Username", "Password", "Email")
        VALUES ($1,$2,$3)
    `,
      [username, password, email]
    )
    .then((dbres) => {
      ret = true;
    })
    .catch((err) => {
      console.log("error: " + err.stack);
      ret = false;
    });
    pool.query(`UPDATE pantry SET "pantryInfo" = '{ "aisles": [] }'`)
  return ret;
}

//Changes the password value in the users row found by UID
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

//Changes the username value in the users row found by UID
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

//Changes the email value in the users row found by UID
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

//Gets the value of password at the user row found by UID
export async function getPassword(UID){
    let ret = null
    await pool.query(`
        SELECT "Password" FROM users WHERE "UID" = $1
    `, [UID])
    .then(dbres => {
        ret = dbres.rows[0]
    })
    .catch(err => {
        ret = false
    })
    return ret
}

//Updates the pantryInfo found at the pantry row found by UID 
export async function updatePantry(UID, pantryInfo){
    let ret = null
    await pool.query(`
        UPDATE pantry SET "pantryInfo" = $1 WHERE "PID" = $2
    `, [pantryInfo, UID])
    .then(dbres => {
        ret = true
    })
    .catch(err => {
        ret = false
    })
    return ret
}

//Gets user data via searching for the id
export async function getUser(id){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "UID" = $1
    `,
    [id]
  );
  return rows;
}

//Gets user data via searching for the email
export async function getUserByEmail(email){
    const { rows } = await pool.query(`
        SELECT *
        FROM users
        WHERE "Email" = $1
    `,
    [email]
  );
  return rows;
}

//Gets the pantry row found by id
export async function getPantry(id) {
  const { rows } = await pool.query(`
        SELECT *
        FROM pantry
        WHERE "PID" = $1
    `,
    [id]
  );
  return rows;
}

//Gets the favorite row found by id
export async function getFavorite(id) {
  const { rows } = await pool.query(
    `
        SELECT *
        FROM favorites
        WHERE "FID" = $1
    `,
    [id]
  );
  return rows;
}
