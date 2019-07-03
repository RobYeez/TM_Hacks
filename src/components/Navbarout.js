import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

export default function Navibarin() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
