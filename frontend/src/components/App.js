import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

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

  function handleSignout(){ //I'm not sure where we want to have this function. We might want to pass this down to header component, or have a useEffect or something
    localStorage.removeItem('jwt')
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/login" element={<Login setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
      </Routes>
    </>
  )
}

export default App;