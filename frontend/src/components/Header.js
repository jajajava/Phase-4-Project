import React from 'react';

function Header() {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <ul className='nav-menu'>
                    <li>HOME</li>
                    <li>EVENTS</li>
                    <li>BOOKING</li>
                </ul>
                <div className='logo'>The Ashton Garden</div>
                <div className='user'>
                    <span>LOGIN</span> / <span>SIGN UP</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;