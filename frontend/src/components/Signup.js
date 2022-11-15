import React from 'react';
import { NavLink } from 'react-router-dom';

function Signup() {
    return (
        <div className='login'>
            <div className='login-container'>
                <div className="login-img">
                    <img src="https://i.postimg.cc/wj8NFgKc/3grgregrg4.png" alt="image" />
                </div>
                <form>
                    <h1>Sign Up</h1>
                    <div className="user-container">
                        <p>Username</p>
                        <input type="text" placeholder="Enter Username" />
                    </div>
                    <div className="user-container">
                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className="user-container">
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="link-container">
                        <button type="submit">Sign Up</button>
                        <p>Back to <span><NavLink to="/login" exact style={{color: "#000"}}>&nbsp; - Log In -</NavLink></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;