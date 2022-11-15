import React from "react";
import { NavLink } from "react-router-dom";

function Intro() {
    return (
        <div className="intro">
            <div className="intro-container">
                <div className="text-container">
                    <div className="sub-head">About</div>
                    <p>The New York Ashton Garden is an advocate for the plant world. 
                        The Garden pursues its mission through its role as a museum of 
                        living plant collections arranged in gardens and landscapes across 
                        its National Historic Landmark site; through its comprehensive 
                        education programs in horticulture and plant science; and through 
                        the wide-ranging research programs of the International Plant Science Center.</p>
                </div>
                <img src="https://i.postimg.cc/C16pBTGV/1.png" alt="image" />
            </div>   

            <div className="intro-container">
                <img src="https://i.postimg.cc/4xTkh19n/2.png" alt="image" />
                <img src="https://i.postimg.cc/FF62mMXX/4.png" alt="image" className="overlap-img"/>
                <div className="text-container">
                    <div className="sub-head">Plants</div>
                    <p>The New York Ashton Garden is an advocate for the plant world. 
                        The Garden pursues its mission through its role as a museum of 
                        living plant collections arranged in gardens and landscapes across 
                        its National Historic Landmark site; through its comprehensive 
                        education programs in horticulture and plant science; and through 
                        the wide-ranging research programs of the International Plant Science Center.</p>
                </div>
            </div>     

            <div className="intro-container">
                <div className="text-container">
                    <div className="sub-head">Events</div>
                    <div>
                    <p>The New York Ashton Garden is an advocate for the plant world. 
                        The Garden pursues its mission through its role as a museum of 
                        living plant collections arranged in gardens and landscapes across 
                        its National Historic Landmark site; through its comprehensive 
                        education programs in horticulture and plant science; and through 
                        the wide-ranging research programs of the International Plant Science Center.</p>
                    <button type="butotn" className="book-btn"><NavLink to="/events" exact="true" style={{color: "#000"}}>BOOK NOW</NavLink></button>
                    </div>
                </div>
                <img src="https://i.postimg.cc/5txhsNpV/3.png" alt="image" />
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