import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Events from "./Events";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/events" element={<Events />}></Route>
      </Routes>
    </>
  )
}

export default App;