import React from 'react';


function User({currentUser, isSignedIn}) {

console.log(currentUser)
    return (
        <div className='user-page'>
            <div className='users-container'>
                <div className='welcome-message'>
                    <h1>Welcome Back</h1>
                    <p>{`${currentUser.username}`.toUpperCase()}</p>
                </div>

                <div className='reservations'>
                    <h1>RESERVATIONS</h1>
                    {currentUser.events?.map(event => {
                        return (
                        <div key="event.id" className='for-margin'>
                            <div className='time-box'>
                            <div className='time-flex'>
                                <p>{event.name}</p>
                                <p>{event.start_time} - {event.end_time}</p>
                                <p>{event.date}</p>
                            </div>
                        <i className='bx bx-x'></i>
                        </div>
                        </div>
                        )
                    })}
                    
                </div>

                <div className='requests'>
                    <h1>REQUESTS</h1>
                    {currentUser.requested_events?.map(event => {
                        return (
                        <div key="event.id" className='for-margin'>
                            <div  className='time-box'>
                                <div className='time-flex'>
                                <p>{event.name}</p>
                                <p>{event.start_time} - {event.end_time}</p>
                                <p>{event.date}</p>
                            </div>
                            <i className='bx bx-x'></i>
                        </div>
                    <p className='description'><i>{event.description}</i></p>
                    </div>
                    
                        )
                    })}
                   
                    
                </div>
            </div>
        </div>
    )
}


export default User;


