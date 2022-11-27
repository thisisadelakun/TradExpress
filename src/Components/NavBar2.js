import React from 'react'
import TradLogo from '../Assets/TradExpressLogo.png'
import '../Styles/NavBar2.css'

const NavBar2 = () => {
    
    return (
        <div className='allnav'>
            <nav class="navbar">
                <div className="navbar-overlay" onclick={toggleMenuOpen()}></div>

                <button type="button" className="navbar-burger" onclick={toggleMenuOpen()}>
                    <span className="material-icons">menu</span>
                </button>
                <img className="navbar-title" src={TradLogo} alt="logo1" />
                <nav className="navbar-menu">
                    <button id='navbtns' type="button">Instant Buy/Sell</button>
                    <button id='navbtns' type="button" className="active">Learn</button>
                    <button id='navbtns' type="button">Login</button>
                    <button id='navbtns' type="button">Get Started</button>
                </nav>
            </nav>
        </div>
    )
}

const toggleMenuOpen = () => document.body.classList.toggle('open');

export default NavBar2