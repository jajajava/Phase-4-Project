import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <ul className='nav-menu'>
                    <li><NavLink to="/" exact>HOME</NavLink></li>
                    <li>EVENTS</li>
                    <li>BOOKING</li>
                </ul>
                <div className='logo'><NavLink to="/" exact>The Ashton Garden</NavLink></div>
                <div className='user'>
                    <span><NavLink to="/login" exact>LOGIN</NavLink></span> / <span><NavLink to="/signup" exact>SIGN UP</NavLink></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;