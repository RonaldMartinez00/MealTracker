import React from 'react';

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <div className="row">
                <form className="column" id="login-form">
                    <h2 className="loginTitle">Login</h2>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="passwordField" id="email-login"></input>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="passwordField" id="password-login"></input>
                    <button type="submit" id="loginButton">Login</button>
                </form>
                <form className="column" id="signup-form">
                    <h2 className="loginTitle">Sign Up</h2>
                    <label className="loginInput">Name:</label>
                    <input className="userInput" type="text" name="usernameField" id="name-signup"></input>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="passwordField" id="email-signup"></input>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="passwordField" id="password-signup"></input>
                    <button type="submit" id="loginButton">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
