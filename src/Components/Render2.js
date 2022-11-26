import React, { useEffect, useState } from 'react'
import '../Styles/Render.css'
import ArrowDown from '../Assets/ArrowDown.png'
import ArrowUp from '../Assets/ArrowUp.png'
import Marquee from "react-fast-marquee";




const Render2 = () => {
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
                <p className='loading animate__animated animate__pulse animate__slower	3s animate__infinite	infinite' >Loading, please wait...</p>
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
                                                <img src={percent_change_24h > 0 ? ArrowUp : ArrowDown} alt="" width={12} />
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