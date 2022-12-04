import React, { useEffect, useState } from 'react'
import '../Styles/Render.css'
import ArrowDown from '../Assets/ArrowDown.png'
import ArrowUp from '../Assets/ArrowUp.png'
import ContentLoader from "react-content-loader"





const Render = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
                .then((res) => res.json())
                .then((rep) => setData(rep.data), setIsLoading(false))
        }, 3000)

    })
    if (isLoading) {
        return (
            <div className='itsloading1'>
                <div className="subloading11">
                    <div className="subloader12">
                        <ContentLoader
                            speed={2}
                            width={500}
                            height={160}
                            viewBox="50 0 400 130"
                            backgroundColor="#ededed"
                            foregroundColor="#f2f2f2"
                            {...props}
                        >
                            <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                        </ContentLoader>
                    </div>
                    <div className="subloader12">
                        <ContentLoader
                            speed={2}
                            width={500}
                            height={160}
                            viewBox="50 0 400 130"
                            backgroundColor="#ededed"
                            foregroundColor="#f2f2f2"
                            {...props}
                        >
                            <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                        </ContentLoader>
                    </div>
                    <div className="subloader12">
                        <ContentLoader
                            speed={2}
                            width={500}
                            height={160}
                            viewBox="50 0 400 130"
                            backgroundColor="#ededed"
                            foregroundColor="#f2f2f2"
                            {...props}
                        >
                            <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                        </ContentLoader>
                    </div>
                    <div className="subloader12">
                        <ContentLoader
                            speed={2}
                            width={500}
                            height={160}
                            viewBox="50 0 400 130"
                            backgroundColor="#ededed"
                            foregroundColor="#f2f2f2"
                            {...props}
                        >
                            <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                        </ContentLoader>
                    </div>
                    <div className="subloader12">
                        <ContentLoader
                            speed={2}
                            width={500}
                            height={160}
                            viewBox="50 0 400 130"
                            backgroundColor="#ededed"
                            foregroundColor="#f2f2f2"
                            {...props}
                        >
                            <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                            <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                        </ContentLoader>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='rendering'>
            <div className='rendernew'>
                {data.map((datum) => {
                    const { id, symbol, price_usd, percent_change_24h } = datum
                    return (
                        <div className='dating'>
                            <div id='datumss' key={id}>
                                <p className='symbolsss'>{symbol}/USD </p>
                                <p className='price-usd'>${price_usd} </p>
                                <p className='hours24'><span id='chng'>24h chg%: </span> {percent_change_24h}<img className='arows' src={percent_change_24h > 0 ? ArrowUp : ArrowDown} alt="" /></p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Render