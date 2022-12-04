import React from 'react'
import '../Styles/CustomerReview.css'
import Ireti from '../Assets/ireti.png'
import Olagoke from '../Assets/olagoke text and profile.png'
import Bayo from '../Assets/bayo.png'
import Marquee from "react-fast-marquee";


const CustomerReview = () => {
    return (
        <div className='custcunt'>
            <div className='articulate'>
                <p className="customerreview">
                    Customer's Review
                </p>
            </div>
            <div className='container2'>
                <Marquee gradient={false} pauseOnClick={[0]}>
                    <div id='imagingtext'>
                        <img id='ireti' src={Ireti} alt="" />
                        <img id='ireti' src={Olagoke} alt="" />
                        <img id='bayo' src={Bayo} alt="" />
                    </div>
                </Marquee>
            </div>

            <div className='contan3'>
                <div className='container'>
                    <div id='imagingtext2'>
                        <img id='ireti1' src={Ireti} alt="" />
                        <img id='ireti1' src={Olagoke} alt="" />
                        <img id='bayo1' src={Bayo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview