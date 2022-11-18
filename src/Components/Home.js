import React from 'react'
import '../Styles/Home.css'
import Header from './Header'
import Render from './Render'
import EasyMode from '../Assets/rafiki-lady.png'
import Finacial from '../Assets/cuate.png'
import Investment from '../Assets/amico.png'
import Numberone from '../Assets/emojione-monotone_keycap-1.png'
import Phone from '../Assets/cuate2.png'
import Numbertwo from '../Assets/emojione-monotone_keycap-2.png'
import Piggybank from '../Assets/rafiki-piggybank.png'
import Coin from '../Assets/cuatemoney.png'
import Artilces from './Artilces'
import Numberthree from '../Assets/emojione-monotone_keycap-3.png'
import CustomerReview from './CustomerReview'
import Footy from './Footy'
import { useState } from 'react'

const Home = () => {
    const [less, setLess] = useState(false)
    return (
        <div className='wall'>
            <Header />
            <Render />
            <div className='main'>
                <p className="reasons">Why do people get involved with Cryptocurrencies?</p>
                <div className="gallery">
                <img className='easymode' src={EasyMode} alt="" />
                <p className='firstp'>Easy Mode of Payment</p>
                <p className='words'>
                    People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.
                </p>
            </div>

                <div className="reasonsgallery1">
                    <div className="gallery">
                        <img className='easymode' src={EasyMode} alt="" />
                        <p className='firstp'>Easy Mode of Payment</p>
                        <p className='words'>
                            People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.
                        </p>
                    </div>

                    <div className="gallery-2">
                        <img className='finacial' src={Finacial} alt="" />
                        <p className='firstp'>Financial Freedom</p>
                        <p className='words'>
                            Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money..
                        </p>
                    </div>

                    <div className="gallery">
                        <img className='investment' src={Investment} alt="" />
                        <p className='firstp'>Investment</p>
                        <p className='words'>
                            The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.
                        </p>
                    </div>

                </div>

                {less && <See />}
                <section className='see-btn'><button onClick={() => setLess(!less)} className='less-btn'> {less ? 'See Less' : 'See More'}</button></section>

                <div>
                    <button className='btn-learnmore'>Learn More</button>
                </div>

                <div>
                    <p className='simplesteps'>Buy and Sell your Cryptocurrency in 3 simple steps</p>
                </div>

                <div id='creatings'>
                    <div className='createafreeaccount'>
                        <img id='numberone' src={Numberone} alt="" />
                        <p className='freeaccountp'>Create a free Account</p>
                        <small className='freesmall'>
                            Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.
                        </small>
                        <img className='learnmoreimage1' src={Phone} alt="" />
                    </div>

                    <div className='depositing'>
                        <img className='learnmoreimage2' src={Piggybank} alt="" />

                        <img id='numbertwo' src={Numbertwo} alt="" />

                        <p className='depositp'>Depositt</p>
                        <small className='depositsmall'>
                            Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.
                        </small>

                    </div>

                    <div className='buyorsellcrypto'>
                        <img id='numberthree' src={Numberthree} alt="" />
                        <p className='sellcryptop'>Buy/ Sell Crypto</p>
                        <small className='buyorsellsmall'>
                            Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.
                        </small>
                        <img className='learnmoreimage3' src={Coin} alt="" />
                    </div>
                </div>
            </div>

            <Artilces />
            <CustomerReview />
            <Footy />




        </div>
    )
}

function See() {
    return (
        <div className="reasonsgallery">
            

            <div className="gallery-2">
                <img className='finacial' src={Finacial} alt="" />
                <p className='firstp'>Financial Freedom</p>
                <p className='words'>
                    Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money..
                </p>
            </div>

            <div className="gallery">
                <img className='investment' src={Investment} alt="" />
                <p className='firstp'>Investment</p>
                <p className='words'>
                    The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.
                </p>
            </div>

        </div>

    )
}

export default Home