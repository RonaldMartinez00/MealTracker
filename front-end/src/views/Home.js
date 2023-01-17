import React, { useRef } from 'react';

function Home() {
    const emailLoginRef = useRef(null);
    const passwordLoginRef = useRef(null);
    const nameSignupRef = useRef(null);
    const emailSignupRef = useRef(null);
    const passwordSignupRef = useRef(null);
    

    const loginFormHandler = async (event) => {
        event.preventDefault();

        const email = emailLoginRef.current.value.trim();
        const password = passwordLoginRef.current.value.trim();


        /*if (email && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/tracker');
            } else {
                alert(response.statusText);
            }
        */ }
    };

    const signupFormHandler = async (event) => {
        event.preventDefault();

        const name = nameSignupRef.current.value.trim();
        const email = emailSignupRef.current.value.trim();
        const password = passwordSignupRef.current.value.trim();

        if (name && email && password) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/tracker');
            } else {
                alert(response.statusText);
            }
        }
    };  
    return (
        <div>
            <h1>Homepage</h1>
            <div className="row">
                <form className="column" id="login-form" onSubmit={loginFormHandler}>
                    <h2 className="loginTitle">Login</h2>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="passwordField" id="email-login" ref={emailLoginRef}></input>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="passwordField" id="password-login" ref={passwordLoginRef}></input>
                    <button type="submit" id="loginButton">Login</button>
                </form>
                <form className="column" id="signup-form" onSubmit={signupFormHandler}>
                    <h2 className="loginTitle">Sign Up</h2>
                    <label className="loginInput">Name:
                    </label>
                    <input className="userInput" type="text" name="usernameField" id="name-signup" ref={nameSignupRef}></input>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="passwordField" id="email-signup" ref={emailSignupRef}></input>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="passwordField" id="password-signup" ref={passwordSignupRef}></input>
                    <button type="submit" id="loginButton">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
