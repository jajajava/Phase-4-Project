import React, { useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

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