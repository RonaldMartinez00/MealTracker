import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function Login() {
    const [namesignup, setnamesignup] = useState(null);
    const [emailsignup, setemailsignup] = useState(null);
    const [passwordsignup,setpasswordsignup] = useState(null);
    const [passwordLogin,setpasswordLogin] = useState(null);
    const [emailLogin, setemailLogin] = useState(null);
    

    return (
        <div>
            <h1>Signup or Login</h1>
            <div className="row">
                <form className="column" id="login-form">
                    <h2 className="loginTitle">Login</h2>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="email" id="emailLogin" onChange={(e)=>{
                        setemailLogin(e.target.value); console.log(emailLogin)}}/>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="password" id="passwordLogin" onChange={(e)=>{
                        setpasswordLogin(e.target.value); console.log(passwordLogin)}}/>
                    <button type="submit" id="loginButton">Login</button>
                </form>
                <form className="column" id="signup-form">
                    <h2 className="loginTitle">Sign Up</h2>
                    <label className="loginInput">Name:
                    </label>
                    <input required className="userInput" type="text" name="name" id="namesignup" onChange={(e)=>{
                        setnamesignup(e.target.value); console.log(namesignup)}}/>
                    <label className="loginInput">Email:</label>
                    <input required className="userInput" type="email" name="email" id="emailsignup" onChange={(e)=>{
                        setemailsignup(e.target.value); console.log(emailsignup)}}/>
                    <label className="loginInput">Password:</label>
                    <input required className="userInput" type="password" name="password" id="passwordsignup" onChange={(e)=>{
                        setpasswordsignup(e.target.value); console.log(passwordsignup)}}/>
                    <button type="submit" id="signupButton">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;



