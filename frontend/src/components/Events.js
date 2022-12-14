import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

function Events({currentUser, isSignedIn, updateReserve, checkReserved, setCurrentUser}) {
    const [events, setEvents] = useState([])
    const [sucess, setSucess] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://127.0.0.1:3000/events')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            setEvents(data);
        })
    }, [])
    console.log(currentUser)

    function handleMakeReservation(e){
    if (isSignedIn){
        fetch(`http://127.0.0.1:3000/reservations`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                event_id: e
            })
        })
            .then(res => {
                if(res.ok){
                    // alert("Your reservation was submitted!")
                    // window.location.reload()
                    res.json().then(data => setCurrentUser(data))
                    updateReserve(e)
                    console.log(res)
                    setSucess(true)
                    setTimeout(sucessRemove, 4000)
                } else {

                }
            })
    } else {
        navigate('/login')
    }
    } 

    function handleToRequest(){
        if (isSignedIn){
            navigate('/request')
        } else {
            navigate('/login')
        }
    }

    function sucessRemove() {
        setSucess(false)
    }

    return (
        <div className="events">
            <h1 className="title">Public Events</h1>
        <motion.div initial={{ y: 10, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className="grid-container">
            {events.map(event => {
                return (
                <div className="events-container">
                    <div className="events-img-container">
                        <img src={event.image}></img>
                    </div>

                    <div className="events-info-container">
                        <h1>{event.name}</h1>
                        <div>
                            <p>{event.start_time} - {event.end_time}</p> 
                            <p>{event.date}</p> 
                            {isSignedIn ? checkReserved.includes(event.id) ? 
                            <button type="button" className="reserved-check" ><i className='bx bx-check' ></i></button>
                            :
                            <button className="reserve-button" onClick={()=> handleMakeReservation(event.id)} type="button">Reserve</button>
                            :
                            <NavLink to="/login" exact="true"><button type="button" >Reserve</button></NavLink>
                        }
                        </div>
                    </div>
                </div> 
                )
            })}
            <div className="to-request-container">
            <div onClick={handleToRequest} className="to-request"><p className="to-request">Request Private Event</p> <i class='bx bx-right-arrow-alt'></i></div>
            </div>        
        </motion.div>

        <AnimatePresence>
            {sucess ? <motion.div  initial={{ opacity: 0, y: 5}} animate={{ opacity: 1 , y: 0}} transition={{ ease: "easeOut", duration: .5 }} exit={{ opacity: 0 , y: 5}} className="pop-up">
                <i className='bx bx-check' ></i>
                <p>Thanks for your reservation! You are all set!</p>
            </motion.div> : null}
        </AnimatePresence>
        
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

export default Events;