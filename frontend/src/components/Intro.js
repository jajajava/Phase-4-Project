import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Intro({isSignedIn}) {
    return (
        <div className="intro">
            <div className="intro-container">
                <div className="text-container">
                    <div className="sub-head">About</div>
                    <p>The New York Ashton Garden is a strong advocate for environmental 
                        protection. Founded by the late philanthropist Ashton Woods, the 
                        Garden pursues its mission to preserve the environment through its 
                        role as a museum of living plant collections from all around the 
                        earth. Through its comprehensive education programs in horticulture 
                        and botany, as well as a broad range of research programs available 
                        at the International Plant Science Center, we aim to inspire new 
                        generations to fall in love with nature.</p>
                </div>
                <motion.img className="welcome" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} src="https://i.postimg.cc/C16pBTGV/1.png" alt="image" />
            </div>   

            <div className="intro-container">
                <motion.img className="welcome" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} src="https://i.postimg.cc/4xTkh19n/2.png" alt="image" />
                <motion.img initial={{ y: 15, opacity: 0.3}} whileInView={{ y: 0, opacity: 1, transition:{duration: .8} }} src="https://i.postimg.cc/FF62mMXX/4.png" alt="image" className="overlap-img"/>
                <div className="text-container">
                    <div className="sub-head">Plants</div>
                    <p>From the arid mountains of far East Asia, to the tropical rainforests 
                        in South America, the Ashton Garden cares for plants imported from a 
                        myriad of diverse environments. The plants are under supervision of 
                        our research department, which offers visitors regional tours to get 
                        a detailed lesson on plants from specific regions (ticket and scheduling 
                        information is available online). </p>
                </div>
            </div>     

            <div className="intro-container">
                <div className="text-container">
                    <div className="sub-head">Events</div>
                    <div>
                    <p>Our publicly hosted events are perfect for your next family outing. We 
                        have seasonal events, regional tours, young botanist club meets, and 
                        many more events open to the public. These are only a fraction of all 
                        the exciting experiences that await at the Ashton Garden- we also offer 
                        private event booking. Whether you would like to schedule a tour for a 
                        private party, or would like to host a birthday celebration, we will work 
                        with you to get you an unmatched experience. Another popular private event 
                        option we offer is The Overlook, a venue at the top of a hill with a beautiful 
                        view of the gardens. This lavish venue has a maximum capacity of 300 visitors, 
                        ideal for a large wedding or any other formal event.</p>
                    <NavLink to="/events" exact="true" style={{color: "#000", marginRight: "20px"}}><button type="butotn" className="book-btn">Public Events</button></NavLink>
                    {isSignedIn ? <NavLink to="/request" exact="true" style={{color: "#000"}}><button type="butotn" className="book-btn">Private Events</button></NavLink> :
                    <NavLink to="/login" exact="true" style={{color: "#000"}}><button type="butotn" className="book-btn">Private Events</button></NavLink>
                    }
                    
                    </div>
                </div>
                <motion.img className="welcome" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} src="https://i.postimg.cc/5txhsNpV/3.png" alt="image" />
            </div>     

            <hr></hr>

            <div className="intro-footer">
                <div className="info-container">
                    <h1>Location</h1>
                    <p>1842 Jarvisville Road<br></br>
                    Brooklyn, NY 10458-5126</p>    
                </div>
                <div className="info-container">
                    <h1>Hours</h1>
                    <p><span>Mon - Fri</span> : 10am - 6pm</p>
                    <p><span>Sat - Sun</span> : 9am - 8pm</p>    
                </div>
                <div className="info-container">
                    <h1>Contact</h1>
                    <p>718 - 903 - 3998<br></br>
                    ashton@info.com</p>    
                </div>
                <div className="icons">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-instagram-alt' ></i>
                    <i className='bx bxl-twitter' ></i>
                    <i className='bx bxl-linkedin-square' ></i>
                </div>
            </div>
        </div>
    )
}

export default Intro;