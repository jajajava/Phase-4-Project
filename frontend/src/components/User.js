import React from 'react';


function User({currentUser, setCurrentUser, setCheckReserved}) {
    const token = localStorage.getItem('jwt')

function handleDeleteReservation(e){
    fetch(`http://127.0.0.1:3000/reservations/${e}`, {
        method: "DELETE",
        headers: {
            'content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if(res.ok){
            // window.location.reload()
            res.json().then(data => {
                setCurrentUser(data);
                setCheckReserved(data.events?.map(event => event.id))
            })
        } else {
            res.json().then(console.log(res))
        }
    })
}

console.log(currentUser.requested_events?.length)


function handleDeleteRequest(e){
    fetch(`http://127.0.0.1:3000/requested_events/${e}`, {
        method: "DELETE",
        headers: {
            'content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if(res.ok){
            res.json().then(data => setCurrentUser(data))
        } else {
            res.json().then(console.log(res))
        }
    })
}

    return (
        <div className='user-page'>
            <div className='users-container'>
                <div className='welcome-message'>
                    <h1>Welcome Back</h1>
                    <p>{`${currentUser.username}`.toUpperCase()}</p>
                </div>

                <div className='reservations'>
                    <h1>RESERVATIONS</h1>
                    {currentUser.events?.length === 0 ? 
                    <p className='no-events'><i>No events reserved.</i></p> 
                    :
                    currentUser.events?.map(event => {
                        return (
                        <div key={event.id} className='for-margin'>
                            <div className='time-box'>
                            <div className='time-flex'>
                                <p className='name-width'>{event.name}</p>
                                <p>{event.start_time} - {event.end_time}</p>
                                <p>{event.date}</p>
                            </div>
                        <i onClick={()=> {handleDeleteReservation(event.id)}} className='bx bx-x'></i>
                        </div>
                        </div>
                        )
                    })
                    }
                    
                    
                </div>

                <div className='requests'>
                    <h1>REQUESTS</h1>
                    {currentUser.requested_events?.length === 0 ? 
                    <p className='no-events'><i>No events requested.</i></p> 
                    :
                    currentUser.requested_events?.map(event => {
                        return (
                        <div key="event.id" className='for-margin'>
                            <div className='time-box'>
                                <div className='time-flex'>
                                <p>{event.name}</p>
                                <p>{event.start_time} - {event.end_time}</p>
                                <p>{event.date}</p>
                            </div>
                            <i onClick={()=> handleDeleteRequest(event.id)} className='bx bx-x'></i>
                        </div>
                    <p className='description'><i>{event.description}</i></p>
                    </div>
                    
                        )
                    })
                    }
                
                   
                    
                </div>
            </div>
        </div>
    )
}


export default User;


