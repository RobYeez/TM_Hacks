import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import logo from '../images/logoz.svg';
import '../StyleSheets/navbar.css'
const Navbarin = () => {
    return (
        <div>
            <Navbar id="hardchange" variant="light" expand="lg">
                <Navbar.Brand href="/">
                    <div align='center'><img src={logo} width='200' height='25'/></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/purchase">Purchase</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};
export default Navbarin;
