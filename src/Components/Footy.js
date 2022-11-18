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
                    <a href="javascript:void(0)" onClick={[1]} >Fiat</a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Alt</a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Refill</a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Bitcoin</a><br />
                    <a href="javascript:void(0)" onClick={[1]}  >p2p</a>

                </div> <br />

                <div id='learn'>
                    <p>Learn</p>
                    <a href="javascript:void(0)" onClick={[1]} >Blog</a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Help Centre</a>

                </div> <br />

                <div id='contact'>
                    <p> Contacts</p>
                    <a href="javascript:void(0)" onClick={[1]}>hello@tradeexpress.com </a><br />
                    <a href="javascript:void(0)" onClick={[1]}>support@tradeexpress.com</a><br />
                    <div className='socialmedia'>
                        <a href="javascript:void(0)" onClick={[1]} ><FaTwitter /></a>
                        <a href="javascript:void(0)" onClick={[1]}><FaTelegram /></a>
                        <a href="javascript:void(0)" onClick={[1]}><FaWhatsapp /></a>
                        <a href="javascript:void(0)" onClick={[1]} ><FaFacebook /></a>
                    </div>
                </div> <br />

                <div id='company'>
                    <p>Company</p>
                    <a href="javascript:void(0)" onClick={[1]} >About Us </a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Careers </a><br />

                    <a href="javascript:void(0)" onClick={[1]} >Rates </a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Mobile</a>

                </div> <br />

                <div id='legal'>
                    <p>Legal</p>
                    <a href="javascript:void(0)" onClick={[1]} >Privacy Policy </a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Anti-Money Laundering </a><br />
                    <a href="javascript:void(0)" onClick={[1]} >Terms and Conditions</a>
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