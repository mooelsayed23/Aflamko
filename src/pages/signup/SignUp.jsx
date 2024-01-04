import React from "react";
import "./SignUp.css";
export default function SignUp() {
  const hsignUp = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };
  const hsignIn = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  return (
    <div className="ddd">
      <div className="s-container right-panel-active" id="container">
        <div className="form-container sign-up-container">
          <form action="/">
            <h1 className="text-nowrap">Create Account</h1>

            <span className="mt-5">or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="/">
            <h1>Sign In</h1>

            <span className="mt-4">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={hsignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello,Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={hsignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
