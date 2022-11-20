import React from 'react'
import Appstore from '../Assets/appstore.png'
import Playstore from '../Assets/Groupandroid.png'
import '../Styles/Artilces.css'
import googleplaylogo from '../Assets/logos_google-play-icon.png'
import applelogo from '../Assets/ion_logo-apple.png'

const Artilces = () => {
    return (
        <div>
            <div className='getit'>
                <div id='container'>
                    <div className='container'>
                        <p className='tenminutes'>
                            Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
                        </p>
                        <p className='created'>
                            Create your account for free and start trading today!
                        </p>
                        <button className="btn-gettingstarted">
                            Get Started
                        </button>

                        <div id='stores'>
                            <img  src={Appstore} alt="" />
                            <img src={Playstore} alt="" />
                        </div>
                    </div>

                    <div id='storex'>
                        <div className='applestores'>
                            <a href="#top">
                                <img id='applestoricons' src={applelogo} alt="" />
                                <small className='smallapplestores'>Download on the</small>
                                <p className='papplestores'>App Store</p>
                            </a>
                        </div>
                        <div className='googleapps'>
                            <a id='googleapps' href="#top">
                                <img id='googleappicons' src={googleplaylogo} alt="" />
                                <small className='smallgooglestores'>Download on the</small>
                                <p className='papplestores'>Google Play</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <CustomerReview/> */}
            </div>
        </div>
    )
}

export default Artilces