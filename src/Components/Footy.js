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
                    <a href="javascript:void(0)" onClick={foo} >Bitcoin</a><br />
                    <a href="javascript:void(0)" onClick={foo} >Alt</a><br />
                    <a href="javascript:void(0)" onClick={foo} >Fiat</a><br />
                    <a href="javascript:void(0)" onClick={foo} >Refill</a><br />
                    <a >p2p</a>

                </div> <br />

                <div id='learn'>
                    <p>Learn</p>
                    <a href="javascript:void(0)" onClick={foo} >Blog</a><br />
                    <a href="javascript:void(0)" onClick={foo} >Help Centre</a>

                </div> <br />

                <div id='contact'>
                    <p> Contacts</p>
                    <a href="javascript:void(0)" onClick={foo}>hello@tradeexpress.com </a><br />
                    <a href="javascript:void(0)" onClick={foo}>support@tradeexpress.com</a><br />
                    <div className='socialmedia'>
                        <a href="javascript:void(0)" onClick={foo} ><FaTwitter /></a>
                        <a href="javascript:void(0)" onClick={foo}><FaTelegram /></a>
                        <a href="javascript:void(0)" onClick={foo}><FaWhatsapp /></a>
                        <a href="javascript:void(0)" onClick={foo} ><FaFacebook /></a>
                    </div>
                </div> <br />

                <div id='company'>
                    <p>Company</p>
                    <a href="javascript:void(0)" onClick={foo} >About Us </a><br />
                    <a href="javascript:void(0)" onClick={foo} >Careers </a><br />

                    <a href="javascript:void(0)" onClick={foo} >Rates </a><br />
                    <a href="javascript:void(0)" onClick={foo} >Mobile</a>

                </div> <br />

                <div id='legal'>
                    <p>Legal</p>
                    <a href="javascript:void(0)" onClick={foo} >Privacy Policy </a><br />
                    <a href="javascript:void(0)" onClick={foo} >Anti-Money Laundering </a><br />
                    <a href="javascript:void(0)" onClick={foo} >Terms and Conditions</a>
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