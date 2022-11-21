import React from 'react'
import '../Styles/Footy.css'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { BiArrowToTop } from 'react-icons/bi'


const Footy = () => {
    return (
        <div className='foots'>
            <div className='ourfoot'>
                <div id='products'>
                    <p>Products</p>
                    <a href="#top">Bitcoin</a><br />
                    <a href="#top">Alt</a><br />
                    <a href="#top">Fiat</a><br />
                    <a href="#top">Refill</a><br />
                    <a href="#top">p2p</a>

                </div> <br />

                <div id='learn'>
                    <p>Learn</p>
                    <a href="#top">Blog</a><br />
                    <a href="#top">Help Centre</a>

                </div> <br />

                <div id='contact'>
                    <p> Contacts</p>
                    <a href="#top">hello@tradeexpress.com </a><br />
                    <a href="#top">support@tradeexpress.com</a><br />
                    <div className='socialmedia'>
                        <a href="#top"><FaTwitter /></a>
                        <a href="#top"><FaTelegram /></a>
                        <a href="#top"><FaWhatsapp /></a>
                        <a href="#top"><FaFacebook /></a>
                    </div>
                </div> <br />

                <div id='company'>
                    <p>Company</p>
                    <a href="#top">About Us </a><br />
                    <a href="#top">Careers </a><br />

                    <a href="#top">Rates </a><br />
                    <a href="#top">Mobile</a>

                </div> <br />

                <div id='legal'>
                    <p>Legal</p>
                    <a href="#top">Privacy Policy </a><br />
                    <a href="#top">Anti-Money Laundering </a><br />
                    <a href="#top">Terms and Conditions</a>
                </div> <br />
            </div>
            <div className='gotop'>
                <div className='container'>
                    <a className='gotopping' href="#top"><BiArrowToTop /></a>
                </div>
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