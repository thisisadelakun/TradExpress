import React from 'react'
import NavBar from './NavBar'
import '../Styles/Header.css'
import apple from '../Assets/Group 68@2xAppleStore.png'
import android from '../Assets/Group 69AndroidStore.png'
import bgrc from '../Assets/Group 127.png'



const Header = () => {
    return (
        <div className='headercontainer'>
            <div className='formobiles'>
                <NavBar />
                <div className='jayjayok'>
                    <div className='container'>
                        <div className='header-text'>
                            <p className='buy '>Buy, sell and manage your <br /> Crypto on TradExpress.</p>
                            <p className='easy'>Easily Trade Cryptocurrencies  like BTC, USDT, ETH, LTC & XRP with NGN.</p>
                            <button className='getstarted'>Get Started</button>
                            <div className="headerapp">
                                <img className='colo' src={apple} alt="" />
                                <img className='colo' src={android} alt="" />
                            </div>

                        </div>

                        <div className='headers01-images01'>
                                <img className='fluid' src={bgrc} alt="" />
                            </div>

                    </div>
                </div>

                <div className='contaminated'>
                    <div className='header-text'>
                        <p className='buy '>Buy, sell and manage your <br /> Crypto on TradExpress.</p>
                        <p className='easy'>Easily Trade Cryptocurrencies  like BTC, USDT, ETH, LTC & XRP with NGN.</p>
                        <button className='getstarted'>Get Started</button>
                        <div className="headerapp">
                            <img className='colo' src={apple} alt="" />
                            <img className='colo' src={android} alt="" />
                        </div>

                    </div>
                    <div className='headers-images'>
                            <img className='contenter-images' src={bgrc} alt=""/>
                        </div>
                </div>
            </div>


            <div className='fortabdesktop'>
                <NavBar />
                <div className='containerdesk'>

                    {/* <div className='header-text'>

                        <p className='buy animate__animated animate__slower	3s animate__pulse animate__repeat-2	2'>Buy, sell and manage your <br /> Crypto on TradExpress.</p>
                        <p className='easy'>Easily Trade Cryptocurrencies  like BTC, USDT, ETH, LTC & XRP with NGN.</p>
                        <button className='getstarted'>Get Started</button>
                        <div className="headerapp">
                            <img className='colo' src={apple} alt="" />
                            <img className='colo' src={android} alt="" />
                        </div>

                    </div> */}

                    {/* <div className='header-image'>
                            <img src={bgrc} alt="" />
                        </div> */}


                </div>
            </div>

        </div>
    )
}

export default Header