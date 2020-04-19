import React from 'react';
import styled from "styled-components";

const SignUpFormStyles=styled.div`
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
`



const SignUpForm =() =>{
  return (
    <SignUpFormStyles>
    <div>
  HTML SCSS JSResult EDIT ON
  <div className="form">
    <ul className="tab-group">
      <li className="tab active">
        <a href="#signup">Sign Up</a>
      </li>
      <li className="tab">
        <a href="#login">Log In</a>
      </li>
    </ul>
    <div className="tab-content">
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <form action="/" method="post">
          <div className="top-row">
            <div className="field-wrap">
              <label>
                First Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" />
            </div>
            <div className="field-wrap">
              <label>
                Last Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" />
            </div>
          </div>
          <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email" required autoComplete="off" />
          </div>
          <div className="field-wrap">
            <label>
              Set A Password<span className="req">*</span>
            </label>
            <input type="password" required autoComplete="off" />
          </div>
          <button type="submit" className="button button-block">
            Get Started
          </button>
        </form>
      </div>
      <div id="login">
        <h1>Welcome Back!</h1>
        <form action="/" method="post">
          <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email" required autoComplete="off" />
          </div>
          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
            </label>
            <input type="password" required autoComplete="off" />
          </div>
          <p className="forgot">
            <a href="#">Forgot Password?</a>
          </p>
          <button className="button button-block">Log In</button>
        </form>
      </div>
    </div>
    {/* tab-content */}
  </div>{" "}
  {/* /form */}
</div>;

    </SignUpFormStyles>
  )
}


export default  SignUpForm;