import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TradLogo from '../Assets/TradExpressLogo.png'
import '../Styles/NavBar.css'

const NavBar = () => {
    return (
        <div>

            {/* <Navbar id='nav' className='nav-bar' expand="lg">
                <Container>
                <img src={TradLogo} alt="" />  
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
            </Navbar> */}

            <div className='mdefault'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={TradLogo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" id='btts'>Instant Buy/Sell</Nav.Link>
                                <Nav.Link href="#home" id='btts'>Learn</Nav.Link>
                                <Nav.Link href="#link" id='bttn' className='btn btn'>Login</Nav.Link> <br />
                                <Nav.Link href="#link" id='bttt' className='btn btn-light ' >Get Started</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>



            <div className='tabonly'>
                <Navbar bg="" variant="dark">
                    <div className='tradoimage'>
                        <Navbar.Brand href="#home"><img className='tradsss' src={TradLogo} alt="" /></Navbar.Brand>
                    </div>
                    <div className='burgess'>
                        <Nav className='lontor'>
                            <div className='sublontor1'>
                                <Nav.Link href="#home" id='bttss'>Instant Buy/Sell</Nav.Link>
                                <Nav.Link href="#home" id='bttsso'>Learn</Nav.Link>
                            </div>
                            <div className='sublontor2'>
                                <Nav.Link href="#link" id='bttns' className='btn btn'>Login</Nav.Link> <br />
                                <Nav.Link href="#link" id='bttts' className='btn btn-light ' >Get Started</Nav.Link>
                            </div>
                        </Nav>
                    </div>
                </Navbar>
            </div>

        </div>
    )
}

export default NavBar