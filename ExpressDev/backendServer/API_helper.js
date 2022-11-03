import axios from 'axios'
//const request = require('request');

export async function callAPI(urli) {
    const res = await axios.get(urli)
    return res.data
}

export async function test(){
    const res = await axios.post('http://localhost:3002/createuser', {
        answer: 42
      });
    return res
}