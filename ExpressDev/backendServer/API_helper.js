import axios from "axios";
//const request = require('request');

export async function callAPI(urli) {
  const res = await axios.get(urli);
  return res.data;
}

