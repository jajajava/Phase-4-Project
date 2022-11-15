import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login({setIsSignedIn, setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (username != '' && password != ''){
            fetch("http://127.0.0.1:3000/auth/login", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  username: username,
                  password: password,
                }),
              })
                .then((res) => {
                    if (res.ok){
                        res.json().then((data) => {
                        localStorage.setItem("jwt", data.token);
                        setIsSignedIn(true);
                        setCurrentUser(data.user)
                        navigate('/')
                        })
                    } else {
                        localStorage.setItem("jwt", null)
                        setError(true)
                    }
                })
            } else {
                alert("Please try again!")
            }
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <div className="login-img">
                    <img src="https://i.postimg.cc/wj8NFgKc/3grgregrg4.png" alt="image" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="user-container">
                        <p>Username</p>
                        <input onChange={handleUsername} type="text" placeholder="Enter Username" name="username" />
                    </div>
                    <div className="user-container">
                        <p>Password</p>
                        <input onChange={handlePassword} type="password" placeholder="Enter Password" name="password" />
                    </div>
                    <ul className='errors'>
                        {error ? <li>* Username and password do not match or you do not have an account yet</li> : null}
                    </ul>
                    <div className="link-container">
                        <button type="submit">Sign In</button>
                        <p>Don't have an account? <span><NavLink to="/signup" exact="true" style={{color: "#000"}}>&nbsp; - Sign Up -</NavLink></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;