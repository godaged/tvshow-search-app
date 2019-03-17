import React from 'react';
import logo from '../../Images/tvm-logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Header() {
    return (

        <header>
            {/* Uses React bootstrap menu*/}
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand ><span ><img src={logo} height="26px" alt="TV Maze API" /></span></Navbar.Brand>
                <Nav className="mr-auto menu-bar">
                {/* activeStyle will highlight selected page*/}
                    <NavLink exact to="/" className="menu-bar" activeStyle={{background: 'green'}}>Home</NavLink>
                    <NavLink to="/Show/1" className="menu-bar" activeStyle={{background: 'green'}}>Show</NavLink>
                    <NavLink to="/Episodes/1" className="menu-bar" activeStyle={{background: 'green'}}>Episodes</NavLink>
                </Nav>
                
            </Navbar>
            
            <h1>TV Show Search</h1>            
        </header>
    )
}

export default Header; 
