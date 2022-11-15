import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Events from "./Events";
import User from "./User";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const token = localStorage.getItem('jwt')

  useEffect(()=> {token !== null? 
    fetch('http://127.0.0.1:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => setCurrentUser(res))
    : setIsSignedIn(false)}, [isSignedIn])
    console.log(currentUser)

    function handleSignout(){
      localStorage.removeItem('jwt')
      setCurrentUser({})
    }

  return (
    <>
      <Header currentUser={currentUser} isSignedIn={isSignedIn} handleSignout={handleSignout}/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/login" element={<Login setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/events" element={<Events />}></Route>
        <Route exact path="/user" element={<User />}></Route>
      </Routes>
    </>
  )
}

export default App;