
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            {/* Uses React bootstrap menu*/}
            <Navbar bg="primary" variant="dark">
                <Nav className=" footer-bar">
                    <p>&copy; {new Date().getFullYear()} Copyright: Dhanapala Godage </p>
                    
                </Nav>
            </Navbar>
        </footer>
    )
}

export default Footer;