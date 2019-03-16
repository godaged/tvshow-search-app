import React from 'react';
//import mobicon from '../../Images/mobile.png';
import logo from '../../Images/tvm-logo.png';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (

        <header>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand ><span ><img src={logo} height="26" alt="TV Maze API" /></span></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Show/1">Show</Nav.Link>
                    <Nav.Link href="/Episodes/1">Episodes</Nav.Link>
                </Nav>
                
            </Navbar>
            <h1>TV Show Search</h1>
            
        </header>
    )
}

export default Header; 