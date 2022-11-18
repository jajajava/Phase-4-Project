import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function ThankYou() {
    return (
        <div className="thankyou">
            <motion.div className="thankyou-container" initial={{ y: 5, opacity: 0}} animate={{ y: 0, opacity: 1, transition:{duration: 1} 
                    }}>
                <i class='bx bxs-check-circle'></i>
                <p className="message">Thank You For Your Request!</p>
                <p className="small-message">We will get back to you as soon as possible.</p>
                <div className="bts-container">
                    <NavLink to="/request" exact="true" ><button type="butotn" className="book-btn">Make Another Request</button></NavLink>
                    <NavLink to="/user" exact="true" ><button type="butotn" className="book-btn">Profile</button></NavLink>
                </div>
            </motion.div>
        </div>
    )
}

export default ThankYou;