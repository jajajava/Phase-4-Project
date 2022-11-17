import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Request from "./Request";
import User from "./User";
import Events from "./Events";
import Plants from "./Plants";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [checkReserved, setCheckReserved] = useState('')
  const token = localStorage.getItem('jwt')

  const navigate = useNavigate();

  useEffect(()=> {token !== null? 
    fetch('http://127.0.0.1:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {setCurrentUser(res); 
      setIsSignedIn(true);
      setCheckReserved(res.events?.map(event => event.id))
    })
    : setIsSignedIn(false)}, [isSignedIn])
    console.log(currentUser)

    function handleSignout(){
      localStorage.removeItem('jwt')
      setCurrentUser({})
      setIsSignedIn(false)
      navigate('/')
    }

    function updateReserve(e) {
  
      const newArr = [...checkReserved]
      newArr.push(e)
      
      setCheckReserved(newArr)
    }

  return (
    <>
      <Header currentUser={currentUser} isSignedIn={isSignedIn} handleSignout={handleSignout}/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/login" element={<Login setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/request" element={<Request currentUser={currentUser}/>}></Route>
        <Route exact path="/user" element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} isSignedIn={isSignedIn} setCheckReserved={setCheckReserved}/>}></Route>
        <Route exact path="/events" element={<Events checkReserved={checkReserved} updateReserve={updateReserve} currentUser={currentUser} isSignedIn={isSignedIn} setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/plants" element={<Plants />}></Route>
      </Routes>
    </>
  )
}

export default App;