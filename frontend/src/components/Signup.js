import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup({setIsSignedIn, setCurrentUser}) {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errorsList, setErrorsList] = useState([])

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handlePasswordConfirm(e){
        setPasswordConfirm(e.target.value)
    }

    function handleSubmit(e){
    e.preventDefault()
            fetch('http://127.0.0.1:3000/users', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                    },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    password_confirmation: passwordConfirm
                })
            })
            .then(res => {
                if (res.ok){
                    res.json().then((data) => {
                        console.log(data)
                        localStorage.setItem("jwt", data.token);
                        setIsSignedIn(true);
                        setCurrentUser(data.user);
                        navigate('/')
                    })
                } 
                else {
                    res.json().then(res => setErrorsList(res.error))
                    errorsList.splice(0, errorsList)
                }
            })
        }
    console.log(errorsList)

    return (
        <div className='login'>
            <div className='login-container'>
                <div className="login-img">
                    <img src="https://i.postimg.cc/wj8NFgKc/3grgregrg4.png" alt="image" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    

                    <div className="user-container">
                        <p>Username</p>
                        <input onChange={handleUsername} type="text" placeholder="Enter Username" />
                    </div>
                    <div className="user-container">
                        <p>Password</p>
                        <input onChange={handlePassword} type="password" placeholder="Enter Password" />
                    </div>
                    <div className="user-container">
                        <p>Confirm Password</p>
                        <input onChange={handlePasswordConfirm} type="password" placeholder="Confirm Password" />
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