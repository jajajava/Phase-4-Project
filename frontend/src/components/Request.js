import React, { useEffect, useState } from "react";

function Request() {
    const [events, setEvents] = useState([])

    useEffect(() =>{
        fetch('http://127.0.0.1:3000/events')
        .then(r => r.json())
        .then(data => setEvents(data))
    }, [])

    console.log(events)

    return (
        <div className='login' >
            <div className='login-container' >
                <div className="login-img">
                    <img src="https://i.postimg.cc/zBBp58GH/fwff33.png" alt="image" />
                </div>
                <form style={{paddingTop: "50px"}}>
                    <h1>Events</h1>
                    <div className="user-container">
                        <p>Name</p>
                        <input type="text" placeholder="Enter event name" />
                    </div>
                    <div className="user-container">
                        <p>Date</p>
                        <input type="date" required/>
                    </div>
                    <div className="time-container">
                        <div className="user-container">
                            <p>Start Time</p>
                            <input type="time" />
                        </div>
                        <div className="user-container">
                            <p>End Time</p>
                            <input type="time" />
                        </div>
                    </div>
                    <div className="user-container">
                        <p>Description</p>
                        <textarea rows="3" />
                    </div>
                    <div className="link-container">
                        <button type="submit">Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Request;