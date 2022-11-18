import React from 'react'
import '../Styles/CustomerReview.css'
import Ireti from '../Assets/ireti.png'
import Olagoke from '../Assets/olagoke text and profile.png'
import Bayo from '../Assets/bayo.png'
import Marquee from "react-fast-marquee";
import photo1 from '../Assets/Ellipse 3 ireti.png'
import photo2 from '../Assets/Ellipse 3 bayo.png'
import photo3 from '../Assets/Ellipse 3 Olagoke.png'
import Cards from '../Assets/Union Bayo.png'
import Quote from '../Assets/quote-line.png'


const CustomerReview = () => {
    return (
        <div>
            <div className='articulate'>
                <p className="customerreview">
                    Customer's Review
                </p>
            </div>
            <div className='container2'>
            <Marquee  gradient={false} pauseOnClick={[0]}>
                <div id='imagingtext'>
                    <img id='ireti' src={Ireti} alt="" />
                    <img id='ireti' src={Olagoke} alt="" />
                    <img id='bayo' src={Bayo} alt="" />
                </div>
            </Marquee>
            </div>


            <div id='imagingreviews'>

                <div className='card1'>
                    <img id='maincard1' src={Cards} alt="" />
                    <img id='quotation1' src={Quote} alt="" />
                    <p id='cardp1'>
                        Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.
                    </p>
                    <img id='photoid1' src={photo1} alt="" />
                </div>

                <div className='card2'>
                    <img id='maincard2' src={Cards} alt="" />
                    <img id='quotation2' src={Quote} alt="" />
                    <p id='cardp2'>
                        Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.
                    </p>
                    <img id='photoid2' src={photo2} alt="" />
                </div>

                <div className='card3'>
                    <img id='maincard3' src={Cards} alt="" />
                    <img id='quotation3' src={Quote} alt="" />
                    <p id='cardp3'>
                        Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.
                    </p>
                    <img id='photoid3' src={photo3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default CustomerReview