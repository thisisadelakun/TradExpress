import React from 'react'
import '../Styles/Footy.css'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


const Footy = () => {
    return (
        <div className='foots'>
            <div className='ourfoot'>
                <div id='products'>
                    <p>Products</p>
                    <a href="#">Bitcoin</a><br />
                    <a href="#">Alt</a><br />
                    <a href="#">Fiat</a><br />
                    <a href="#">Refill</a><br />
                    <a href="#">p2p</a>

                </div> <br />

                <div id='learn'>
                    <p>Learn</p>
                    <a href="#">Blog</a><br />
                    <a href="#">Help Centre</a>

                </div> <br />

                <div id='contact'>
                    <p> Contacts</p>
                    <a href="#">hello@tradeexpress.com </a><br />
                    <a href="#">support@tradeexpress.com</a><br />
                    <div className='socialmedia'>
                        <a href="#"><FaTwitter /></a>
                        <a href=""><FaTelegram /></a>
                        <a href=""><FaWhatsapp /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                </div> <br />

                <div id='company'>
                    <p>Company</p>
                    <a href="#">About Us </a><br />
                    <a href="#">Careers </a><br />

                    <a href="#">Rates </a><br />
                    <a href="#">Mobile</a>

                </div> <br />

                <div id='legal'>
                    <p>Legal</p>
                    <a href="#">Privacy Policy </a><br />
                    <a href="#">Anti-Money Laundering </a><br />
                    <a href="#">Terms and Conditions</a>
                </div> <br />
            </div>
            <div id='copyright'>
                <div className='copyingright'>
                    <p id='reserved'>© 2021 TradeExpress Technologies All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footy