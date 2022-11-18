import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Request({currentUser}) {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://127.0.0.1:3000/requested_events`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                name: name,
                date: date,
                start_time: start,
                end_time: end,
                is_public: false,
                spots_left: null,
                description: description,
                user_id: currentUser.id
            })
        })
        .then(res=>{
            if (res.ok){
                navigate('/thank-you')
                window.location.reload()
            } else {
                console.log(res)
            }
        })
    }

    return (
        <div className='login' >
            <div className='login-container' >
                <div className="login-img">
                    <img src="https://i.postimg.cc/zBBp58GH/fwff33.png" alt="image" />
                </div>
                <form onSubmit={handleSubmit} style={{paddingTop: "50px"}}>
                    <h1>Event</h1>
                    <div className="user-container">
                        <p>Name</p>
                        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter event name" />
                    </div>
                    <div className="user-container">
                        <p>Date</p>
                        <input onChange={(e)=>setDate(e.target.value)} type="date" required/>
                    </div>
                    <div className="time-container">
                        <div className="user-container">
                            <p>Start Time</p>
                            <input onChange={(e)=>setStart(e.target.value)} type="time" />
                        </div>
                        <div className="user-container">
                            <p>End Time</p>
                            <input onChange={(e)=>setEnd(e.target.value)} type="time" />
                        </div>
                    </div>
                    <div className="user-container">
                        <p>Description</p>
                        <textarea onChange={(e)=>setDescription(e.target.value)} rows="3" />
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