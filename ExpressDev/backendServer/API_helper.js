import axios from "axios";
//const request = require('request');

export async function callAPI(urli) {
  const res = await axios.get(urli);
  return res.data;
}

export async function test() {
  const res = await axios.post("http://localhost:3002/createuser", {
    username: "test6",
    password: "test",
    email: "test6@test.com",
  });
  return 0;
}
