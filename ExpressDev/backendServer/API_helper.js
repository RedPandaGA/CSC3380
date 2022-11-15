import axios from "axios";

//makes a call to the provided url
export async function callAPI(urli) {
  const res = await axios.get(urli);
  return res.data;
}

