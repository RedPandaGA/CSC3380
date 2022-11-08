import React from "react";
import { useState } from "react";
import './split.css';
import {Link} from "react-router-dom"
import axios from 'axios'

async function Logincall(email, password){
  const data = { email: email, password: password }
  axios({
    method: 'post',
    url: 'http://localhost:3002/auth/login',
    data: data
  })
  .then(res => {
    if(res.status == 200) {
      console.log("recieved")
      console.log(res)
      console.log(res.data.data)
      localStorage.setItem('udata', JSON.stringify(res.data.data))
    } else {
      const error = new Error(res.error);
      throw error;
    }
  })
  .catch(err => {
    console.error(err);
    alert('Error logging in please try again')
  })
}

//leaving temporarily: seems to be a weird behavior where I can only call each end point once before it is cached and will no longer actaully get the response
// async function tempTest(){
//   const token = JSON.parse(localStorage.getItem('udata')).token
//   console.log("begin?")
//   axios({
//     method: 'GET',
//     url: 'http://localhost:3002/getFavorites',
//     headers: { Authorization : `token ${token}` }
//   })
//   .then(res => {
//     console.log("PLEASE")
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err);
//     alert('Error in GET')
//   })
//   console.log("fin?")
// }

async function signupCall(username, email, password){
  const data = { username: username, email: email, password: password }
  axios({
    method: 'POST',
    url: 'http://localhost:3002/auth/createuser',
    data: data
  })
  .then(res => {
    console.log("User successfully added!")
  })
  .catch(err => {
    console.error(err);
    alert('Error signing up please try again')
  })
}

function Login() {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="login-page">
      
      {/*left seciton */}
      
      <div className="left-section">
           <h1 className="titleL">Login Below</h1>
           <div className="boxL">
           
            <div className="login-form-container">
                  <h2 className="header2L">Login to PeKan Pi</h2>
                  <h4 className="header2left">Recipe generator built to help </h4>
                  <h4 className="header2left" >limit food waste!</h4>
                    <form className="login-from">
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={p => setPassword(p.target.value)}/>
                        <input className= "buttonL"type="submit" value="Login" onClick={() => Logincall(email, password)}/> 
                     </form>
                   <Link to="/forgot">
                     <p className="forget">Forgot Password? Click Here </p>
                  </Link>
             </div>
             </div>

       </div>

        {/*right seciton */}

        <div className="right-section">
           <h1 className="titleL">Sign Up Today</h1>
          <div className="boxL">
              
               <div className="signup-form-container">
                    <h2 className="header2L">Don't have an account?</h2>
                    <h4 className="header2right">Enter your information below</h4>
                    <h4 className="header2right">to create an account!</h4>
                    <form className="signup-from">
                      <input type="text" placeholder="Username" value={username} onChange={u => setUsername(u.target.value)}/>
                      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                      <input type="password" placeholder="Password" value={password} onChange={p => setPassword(p.target.value)}/>
                      <input className= "buttonL" type="submit" value="Submit" onClick={() => signupCall(username, email, password)}/>    
                     </form>
                     {/* add picture in top right corner */}
                     
               </div>
          </div>
       </div>
</div>

);
}

export default Login;



