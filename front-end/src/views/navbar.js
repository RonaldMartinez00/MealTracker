import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <header>
            <div className="nav-style">
                <h1 className="h1-fit">Dine Diary</h1>
                <div className="nav-links">
                    <a className="tracker-style" href="/tracker">Meal Tracker</a>
                    <a className="api-style" href="api.html">API</a>
                    <a className="profile" href="profile.html">Profile</a>
                </div>
                <button className="move-right login-home">
                <Link to='/login' className="login-home">Already a user? Login here.</Link>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
