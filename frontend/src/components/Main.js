import React from "react";
import { motion } from "framer-motion";

function Main() {

    return (
        <main className="main">
            <div className="main-container">
                <p>NEW YORK</p>
                <span></span>
                <motion.div className="welcome" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                    <h1><i>Welcome</i></h1>
                    <p>TO THE MOST ELEGANT PLANT WORLD.</p>
                </motion.div>
                <span></span>
                <div className="hours">
                    <p>TODAY'S HOURS <br></br>
                    10 AM - 6 PM</p>
                </div>
                <img src="https://i.postimg.cc/fbS54Y8k/Flower-1-1.png" alt="image"></img>
            </div>
            <div className="main-footer">
                <p>©2022</p>
                <p>THE GREATEST GIFT OF THE GARDEN IS THE RESTORATION OF THE FIVE SENSES.</p>
                <p>WINTER</p>
            </div>
        </main>
    )
}

export default Main;