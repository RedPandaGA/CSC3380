import {Link} from "react-router-dom"
import "./forgot.css"
function ForgotPassword(props) {
  return(
    <div className="forget-page">
    <section>
      {/* <div className="logo"> </div> */}
      <h1 className="h1Forgot">Forgot your Password?</h1> 
      <p className="pForgot">Enter your email address below and we'll send you a link to reset your password.</p>
      <form action="/reset-password" method="POST">
        <label className="box1" htmlFor="email" >  Email:{" "}
          <input type="emailF"  placeholder="example@gmail.com" name="email" id="email" required />
      
      </label>
        <button type="submit">Reset Password</button>
        <div className="forget">
        Back to Login Page? <Link to="/Login">Click Here</Link></div>
    
    </form>
    </section>
    </div>
  );
}

export default ForgotPassword;