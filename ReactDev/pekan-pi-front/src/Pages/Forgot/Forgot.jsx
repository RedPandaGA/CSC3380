
import {Link} from "react-router-dom"
import "./forgot.css"
function ForgotPassword() {
  return(
    <div className="forget-page">
    <section>
      <h1>Forgot your Password?</h1>
      <p>Enter your email address below and we'll send you a link to reset your password.</p>
      <form action="/reset-password" method="POST">
        <label className="box1" htmlFor="email" >  Email:{" "}
          <input type="email"  placeholder="Email" name="email" id="email" required />
      
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