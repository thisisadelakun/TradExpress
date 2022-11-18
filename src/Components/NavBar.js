// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import TradLogo from '../Assets/TradExpressLogo.png'
// import '../Styles/NavBar.css'
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// const NavBar = () => {
//     return (
//         <div>

//             <Navbar collapseOnSelect expand='lg' variant='dark' className='navals'>
//                 <Container className='navcontainer'>
//                     <img src={TradLogo} alt="" />
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-lg">
//                             <Nav.Link href="#home">Instant Buy/Sell</Nav.Link>
//                             <Nav.Link eventKey={2} href="#home">Learn</Nav.Link>
//                             <Nav.Link href="#link" className='btn btn-danger' >Login</Nav.Link>
//                             <Nav.Link href="#link" className='btn btn-light' >Get Started</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default NavBar

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TradLogo from '../Assets/TradExpressLogo.png'
import '../Styles/NavBar.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <div>

            <Navbar expand="lg">
                <Container>
                    <img src={TradLogo} alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" id='btts'>Instant Buy/Sell</Nav.Link>
                            <Nav.Link href="#home" id='btts'>Learn</Nav.Link> 
                            <Nav.Link href="#link" id='bttn' className='btn btn'>Login</Nav.Link> <br />
                            <Nav.Link to='/Buy/Sell' href="#link" id='bttt'className='btn btn-light ' >Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar