import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Events({currentUser}) {
    const [events, setEvents] = useState([])

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
                    alert("Your reservation was submitted!")
                    window.location.reload()
                } else {
                    console.log(res)
                }
            })
    }

    return (
        <div className="events">
            <h1 className="public">Public Events</h1>
        <div className="grid-container">
            {events.map(event => {
                return (
                <div className="events-container">
                    <div className="events-img-container">
                        <img src="https://i.postimg.cc/SKGhkdMD/4F34F4.png"></img>
                    </div>

                    <div className="events-info-container">
                        <h1>{event.name}</h1>
                        <div>
                            <p>{event.start_time} - {event.end_time}</p> 
                            <p>{event.date}</p> 
                            <button onClick={()=> handleMakeReservation(event.id)} type="button">Reserve</button>
                        </div>
                    </div>
                </div> 
                )
            })}
            <div className="to-request-container">
            <NavLink to="/request" exact="true" className="to-request"><p>Request Private Event</p> <i class='bx bx-right-arrow-alt'></i></NavLink>
            </div>        
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

export default Events;