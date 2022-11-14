import React from 'react';
import { NavLink } from 'react-router-dom';

function Signup() {
    return (
        <div className='login'>
            <div className='login-container'>
                    <img src="https://i.postimg.cc/x1q0YnnB/pexels-deeana-arts-2565222.jpg" alt="image" />
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
                        <p>Confirme Password</p>
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="link-container">
                        <button type="submit">Sign Up</button>
                        <p>Back to <span><NavLink to="/login" exact style={{color: "#000"}}>&nbsp; - Log in -</NavLink></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;