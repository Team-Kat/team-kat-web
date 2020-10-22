import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Bar = () => (
    <Navbar collapseOnSelect bg = 'light' fixed = 'top' expand = 'lg'>
        <Navbar.Brand href = '/'>Team KAT</Navbar.Brand>
        <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'>
            <Nav className = 'mr-auto'>
                <Nav.Link href = '/projects'>Projects</Nav.Link>
                <Nav.Link href = '/members'>Members</Nav.Link>
                <Nav.Link href = '/recruit'>Recruit</Nav.Link>
            </Nav>
            <hr />
            <Nav>
                <Nav.Link href = '/login'>Login</Nav.Link>
                <Nav.Link href = 'https://discord.gg/nSP7HFT'>Server</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Bar