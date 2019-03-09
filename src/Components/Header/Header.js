import React from 'react';
import './Header.css';
import mobicon from '../../Images/mobile.png';
import logo from '../../Images/tvm-logo.png';
import name from '../../Images/name.png';

function Header() {
    return (
        <header className="title-bar">
            <nav className="title-bar-nav">
                <div className="title-bar-mobile">
                    <img
                        src={mobicon}
                        height="32"
                        alt="mobile menu"
                    />
                </div>
                <div className="title-bar-logo">
                    <img
                        src={logo}
                        height="26"
                        alt="TV Maze API"
                    />
                </div>
                <div>
                    <img
                        src={name}
                        // height="26"
                        alt="TV Maze API"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header; 