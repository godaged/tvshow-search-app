import React from 'react';
import mobicon from '../../Images/mobile.png';
import logo from '../../Images/tvm-logo.png';
// import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (

        //     <span ><img src={mobicon} height="32" alt="mobile menu" /> <img src={logo} height="26" alt="TV Maze API" /></span>

        <header>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand ><span ><img src={logo} height="26" alt="TV Maze API" /></span></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Show">Show</Nav.Link>
                    <Nav.Link href="/Episodes">Episodes</Nav.Link>
                </Nav>
                
            </Navbar>
            <h1>TV Show Search</h1>
        </header>
    )
}

export default Header; 