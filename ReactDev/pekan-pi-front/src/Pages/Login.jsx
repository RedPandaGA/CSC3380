import React from "react";
import { useEffect } from "react";
import './split.css';
import {Link} from "react-router-dom"

function Login() {
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
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input className= "buttonL"type="submit" value="Login" /> 
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
                      <input type="text" placeholder="Full Name" />
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <input className= "buttonL" type="submit" value="Submit" />    
                     </form>
                     {/* add picture in top right corner */}
                     
               </div>
          </div>
       </div>
</div>

);
}

export default Login;



