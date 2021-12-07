import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant='light' expand="lg">
                <Container>
                    <Navbar.Brand href="/">DJR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/cart"><i style={{ color:'#1d1d1f'}} className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            <Nav.Link href="/login"><i style={{ color:'#1d1d1f'}} className="fas fa-user"></i> Login</Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
