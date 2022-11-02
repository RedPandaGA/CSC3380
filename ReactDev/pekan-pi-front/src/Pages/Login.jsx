function Login() {
  // const left = document.querySelector(".left");
  // const right = document.querySelector(".right");
  // const container = document.querySelector(".container");

  // left.addEventListener("mouseenter", () => {
  //   container.classList.add("hover-left");
  // });

  // left.addEventListener("mouseleave", () => {
  //   container.classList.remove("hover-left");
  // });

  // right.addEventListener("mouseenter", () => {
  //   container.classList.add("hover-right");
  // });

  // right.addEventListener("mouseleave", () => {
  //   container.classList.remove("hover-right");
  // });

  return (
    <>
    <div className="container">
    <div className="split left">
    <h1>Login Below</h1>
      <div className="leftloginpage">
      <div className="box">
      <div className="container1">
      <div className="form">
      <h2>Login to Pekan Pi</h2>
      <h3>Recipe generator built to help limit food waste!</h3>
      <form>
      <div className="input__box">
      <input type="text" placeholder="Email" />
      </div>
                    <div className="input__box">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="input__box">
                      <input type="submit" value="Login" />
                    </div>
                    <a href="Forgot.jsx">
                      <p className="forget">Forgot Password? Click Here </p>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
        <div className="split right">
        <h1>Sign Up Today</h1>
        <div className="rightsignup">
        <div className="box">
        <div className="container1">
        <div className="form">
        <h2>Don't have an account?</h2>
        <h3>Enter your information below to create an account!</h3>
        <form>
        <div className="input__box">
        <input type="text" placeholder="Full Name" />
        </div>
        <div className="input__box">
        <input type="text" placeholder="Email" />
        </div>
        <div className="input__box">
        <input type="password" placeholder="Password" />
        </div>
        <div className="input__box">
        <input type="submit" value="Submit" />
        </div>
      </form>
      </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  </div>
    </>
  );
}

export default Login;

