import userEvent from '@testing-library/user-event';
import React from 'react';
import { NavLink } from "react-router-dom";

function Header({currentUser, handleSignout, isSignedIn}) {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <ul className='nav-menu'>
                    <li><NavLink to="/" exact="true">HOME</NavLink></li>
                    <li>PLANTS</li>
                    <li><NavLink to="/events" exact="true">EVENTS</NavLink></li>
                </ul>
                <div className='logo'><NavLink to="/" exact="true">The Ashton Garden</NavLink></div>
                <div className='user'>
                    {isSignedIn === false ? 
                    <div><span><NavLink to="/login" exact="true">LOGIN</NavLink></span> <span>/</span> <span><NavLink to="/signup" exact="true">SIGN UP</NavLink></span> </div> :
                    <div className='logout'><span><NavLink to="/user" exact="true">{`${currentUser.username}`.toUpperCase()}</NavLink></span> <i className='bx bx-log-out' onClick={() => handleSignout()}></i></div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;