import React, { useEffect, useState } from 'react'
import '../Styles/Render.css'
import ArrowDown from '../Assets/ArrowDown.png'
import ArrowUp from '../Assets/ArrowUp.png'
import Marquee from "react-fast-marquee";
import ContentLoader from "react-content-loader"




const Render2 = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=30')
                .then((res) => res.json())
                .then((rep) => setData(rep.data), setIsLoading(false))
        }, 3000)

    })
    if (isLoading) {
        return (
            <div className='itsloading2'>
                <Marquee gradient={false}>
                    <div className="subloading13">
                        <div className="subloader13">
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={120}
                                viewBox="50 30 400 130"
                                backgroundColor="#ffffff"
                                foregroundColor="#f0f0f0"
                                {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                            </ContentLoader>
                        </div>
                        <div className="subloader13">
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={120}
                                viewBox="50 30 400 130"
                                backgroundColor="#ffffff"
                                foregroundColor="#f0f0f0"
                                {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                            </ContentLoader>
                        </div>
                        <div className="subloader13">
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={120}
                                viewBox="50 30 400 130"
                                backgroundColor="#ffffff"
                                foregroundColor="#f0f0f0"
                                {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                            </ContentLoader>
                        </div>
                        <div className="subloader13">
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={120}
                                viewBox="50 30 400 130"
                                backgroundColor="#ffffff"
                                foregroundColor="#f0f0f0"
                                {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                            </ContentLoader>
                        </div>
                        <div className="subloader13">
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={100}
                                viewBox="50 30 400 130"
                                backgroundColor="#ffffff"
                                foregroundColor="#f0f0f0"
                                {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                            </ContentLoader>
                        </div>
                    </div>
                </Marquee>

            </div>
        )
    }
    return (
        <div className='rendering'>
            <Marquee gradient={false} pauseOnClick={[0]}>
                <div className='renderold'>
                    {data.map((datum) => {
                        const { id, symbol, price_usd, percent_change_24h } = datum
                        return (
                            <div className='dating'>
                                <div id='datums' key={id}>
                                    <div className='coin'>

                                        <p className='symbol'>{symbol}/USD</p>
                                        <div className='sub-coin'>
                                            <button className='btn btn-percent' id='chng'> 24h chg% </button > <br />
                                            <span className='hours24'>
                                                {percent_change_24h}%
                                                <img className='arrows1' src={percent_change_24h > 0 ? ArrowUp : ArrowDown} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p className='price-usd'>${price_usd} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Marquee>

        </div>
    )
}

export default Render2