import React from "react";
import Main from "./Main";
import Intro from "./Intro";
import Signup from "./Signup";

function Home({isSignedIn}) {
    return (
        <>
            <Main />
            <Intro isSignedIn={isSignedIn}/>
        </>
    )
}

export default Home;