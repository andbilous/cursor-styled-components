import React,{useState,useEffect} from 'react';
import styled from "styled-components";

const SignInFormStyles=styled.div`
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
  transform: translateX(-100px);
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
 justify-content: space-between;
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
  transform: translateX(-200px);
  font-size: 13px;
  width: 50%;
  margin-top: -5px;
}
footer{
  color: dimgrey;
}
`



const SignInForm =() =>{
  useEffect(() => {
    setEmail(localStorage.getItem('email'));
    setPassword(localStorage.getItem('password'));
  }, [])

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  return (
    <SignInFormStyles>
<div class="login-page">
  <div class='img-container'>
    <img src={require('../assets/padlock.png')}/>
    </div>
    <span class='image-label'>Sign In</span>
  <div class="form">
    <form class="login-form">
    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email-address"/>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="password"/>
      <div class='links remember'><input onChange={()=>{
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
      }} type="checkbox"/>
      <label class='label-remember'>Remember me</label></div>
     <button>Sign In</button>
     <div class='links additional'>
     <p><a href="#">Forgot password?</a></p>
       <p><a href="#">Dont have an account? Sign Up</a></p>
       </div>
       <footer>
       <span>Copyright C Your Website 2020</span>
       </footer>
    </form>
  </div>
</div>
    </SignInFormStyles>
   
  )
}


export default  SignInForm;