function ForgotPassword() {
  return(
    <>
    <section>
      <h1>Forgot your Password?</h1>
      <p1>Enter your email address below and we'll send you a link to reset your password.</p1>
      <form action="/reset-password" method="POST">
        <div class="box1">
          <input type="email"  placeholder="Email" name="email" id="email" required />
        </div>
        <button type="submit">Reset Password</button>
        <p class="forget">
          Back to Login Page? Click Here</p>
      </form>
    </section>
    </>
  );
}

export default ForgotPassword;