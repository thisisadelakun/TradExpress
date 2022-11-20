import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TradLogo from '../Assets/TradExpressLogo.png'
import '../Styles/NavBar.css'

const NavBar2 = () => {
    return (
        <div>

            <Navbar id='nav' className='nav-bar' expand="lg">
            <img className='tradlogo' src={TradLogo} alt="" />
                <Container>
                    <Navbar.Toggle id='toggled' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" id='btts'>Instant Buy/Sell</Nav.Link>
                            <Nav.Link href="#home" id='btts'>Learn</Nav.Link>
                            <Nav.Link href="#link" id='bttn' className='btn btn'>Login</Nav.Link> <br />
                            <Nav.Link href="#link" id='bttt' className='btn btn-light ' >Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar2