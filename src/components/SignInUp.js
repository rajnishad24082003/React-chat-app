import React, { useState } from "react";
import "../assets/css/signup.css";

function SignInUp() {
  let [hideShow, setHideShow] = useState("");

  let signinpage = () => {
    setHideShow("");
  };
  let signuppage = () => {
    setHideShow("right-panel-active");
  };

  return (
    <div className="signInUpmainCont">
      <div className={`containersignup ${hideShow}`} id="containersignup">
        {/* actual form sign up*/}
        <div className="form-container sign-up-container">
          <form action="#" className="formsignup">
            <h1 className="h1signup">Create Account</h1>
            <div className="social-container">
              <a href="*" className="social asignup">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="*" className="social asignup">
                <i className="bi bi-google"></i>
              </a>
              <a href="*" className="social asignup">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <span className="spansignup">
              or use your email for registration
            </span>
            <input className="inputsignup" type="text" placeholder="Name" />
            <input className="inputsignup" type="email" placeholder="Email" />
            <input
              className="inputsignup"
              type="password"
              placeholder="Password"
            />
            <button className="buttonsignup">Sign Up</button>
            <button
              className="orsignin"
              onClick={() => {
                signinpage();
              }}
            >
              sign in
            </button>
          </form>
        </div>
        {/* actual form sign up*/}

        {/* actual form sign in*/}
        <div className="form-container sign-in-container">
          <form action="#" className="formsignup">
            <h1 className="h1signup">Sign in</h1>
            <div className="social-container">
              <a href="*" className="social asignup">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="*" className="social asignup">
                <i className="bi bi-google"></i>
              </a>
              <a href="*" className="social asignup">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <span className="spansignup">or use your account</span>
            <input className="inputsignup" type="email" placeholder="Email" />
            <input
              className="inputsignup"
              type="password"
              placeholder="Password"
            />
            <a href="*" className="asignup">
              Forgot your password?
            </a>
            <button className="buttonsignup">Sign In</button>
            <button
              className="orsignup"
              onClick={() => {
                signuppage();
              }}
            >
              sign up
            </button>
          </form>
        </div>
        {/* actual form sign in*/}

        {/* transition form sign in/up */}
        <div className="overlay-container">
          <div className="overlaysignup">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost buttonsignup"
                id="signIn"
                onClick={() => {
                  signinpage();
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost buttonsignup"
                id="signUp"
                onClick={() => {
                  signuppage();
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* transition form sign in/up */}
      </div>
    </div>
  );
}

export default SignInUp;
