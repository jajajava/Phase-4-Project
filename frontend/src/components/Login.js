import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login({setIsSignedIn, setCurrentUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                        alert("Please try again!")
                    }
                })
            } else {
                alert("Please try again!")
            }
    }


    return (
        <div className='login'>
            <div className='login-container'>
                    <img src="https://i.postimg.cc/x1q0YnnB/pexels-deeana-arts-2565222.jpg" alt="image" />
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
                    <div className="link-container">
                        <button type="submit">Sign In</button>
                        <p>Don't have an account? <span><NavLink to="/signup" exact style={{color: "#000"}}>&nbsp; - Sign up -</NavLink></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;