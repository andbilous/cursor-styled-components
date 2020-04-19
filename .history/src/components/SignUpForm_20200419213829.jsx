import React from 'react';
import styled from "styled-components";

const SignUpFormStyles = styled.div`
*{
  box-sizing: border-box;
}
.login-page {
  width: 450px;
  margin: auto;
  background: #000;
}
.form {
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 0 auto;
  margin-top:10px;
  padding: 18px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  border: 1px solid #fff;
  background:grey;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px;
  font-size: 14px;
}
.form input[type="checkbox"]{
  transform: translateX(-58px);
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #2cdaf5;
  width: 100%;
  border: 0;
  padding: 8px;
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
.links{
  display:flex
}
.remember{
color:#fff;
}
.additional{
 color: #2cdaf5;
 display: flex;
 justify-content: flex-end;
}
.additional a{
  font-size:10px
 }
.img-container{
  background: pink;
  border-radius: 50%;
  width:10%;
  transform: translateY(20px);
  margin-left: 43%;
}
img{
  margin: 6px 11px;
  width: 50%;
}
.image-label{
  display:block;
  color:#fff;
  margin-left: 12rem;
  margin-top: 1.5rem;
}
.label-remember{
  display: inline-block;
  margin-bottom: .5rem;
  transform: translateX(-123px);
    font-size: 13px;
    width: 500px;
  margin-top: -5px;
}
footer{
  color: dimgrey;
}
.name{
  display:flex;
  justify-content: space-between;
}
.name input{
  width:47%
}
`


class SignUpForm extends React.Component{
  constructor(){
    super();
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      remember: false
    }
    this.email = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.password = React.createRef();
  }

  onChange=(e)=>{
    this.setState({
      [`${e.target.id}`]:e.target.value
    })
    this.validateFields(e.target.id,e.target.value)
  }

  validateFields=(type,value)=>{
    if(type==='firstName' || type ==='lastName' ){
      
        console.log(this.firstName.current.style.borderColor='red')
    } 
    if(type ==='email'){

    }
    if(type ==='password'){

    }


    console.log(type,value)
  }
  render(){
    return (
      <SignUpFormStyles>
  <div class="login-page">
    <div class='img-container'>
      <img src={require('../assets/padlock.png')}/>
      </div>
      <span class='image-label'>Sign Up</span>
    <div class="form">
      <form class="login-form">
        <div class='name'>
          <input
          id='firstName'
           type="text"
           ref={this.firstName}
           value={this.state.firstName} 
           onChange={this.onChange}
           placeholder="First Name"
           />
          <input 
           ref={this.lastName}
           type="text" 
           id='lastName'
           onChange={this.onChange}
          value={this.state.lastName} 
          placeholder="Last Name"
          />
          </div>
          <input 
            ref={this.email}
            id='email'
          type="text"
          onChange={this.onChange}
           value={this.state.email} 
           placeholder="Email-address"
           />
          <input
           ref={this.password}
           id='password'
           type="password" 
           onChange={this.onChange}
           value={this.state.password}
            placeholder="password"
            />
        <div class='links remember'>
          <input type="checkbox"/><label class='label-remember'>
            I want to receive inspiration, marketing promotions and updates via email.
            </label>
            </div>
       <button>Sign In</button>
       <div class='links additional'>
         <p><a href="#">Already have an account? Sign in</a></p>
         </div>
         <footer>
         <span>Copyright C Your Website 2020</span>
         </footer>
      </form>
    </div>
  </div>
      </SignUpFormStyles>
     
    )
  }
 
}


export default  SignUpForm;