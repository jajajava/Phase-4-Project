import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            <div className='login-container'>
                <div className="login-img">
                    <img src="https://i.postimg.cc/wj8NFgKc/3grgregrg4.png" alt="image" />
                </div>
                <form>
                    <h1>Login</h1>
                    <div className="user-container">
                        <p>Username</p>
                        <input type="text" placeholder="Enter Username" name="username" />
                    </div>
                    <div className="user-container">
                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" name="password" />
                    </div>
                    <div className="link-container">
                        <button type="submit">Sign In</button>
                        <p>Don't have an account? <span><NavLink to="/signup" exact style={{color: "#000"}}>&nbsp; - Sign Up -</NavLink></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;