import React, {useEffect,useState} from 'react'
import '../Styles/Market.css'


const Market = () => {
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
 
    useEffect(()=>{
        setTimeout(()=>{

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=30')
              .then((res) => res.json())
              .then((rep) => setData(rep.data) ,setIsLoading(false))
        },5000)

    })
    if(isLoading){
        return(
            <div>
                <p className='loading'>Loading, please wait...</p>
            </div>
        )
    }
  return (
    <div>
        <div className='remdernewer'>
            <p className='markettracker '>Market Tracker</p>
            {data.map((datum)=>{
                const {id,name,symbol,price_usd} = datum
                return(
                    <div id='datumss' key={id}>
                        <p className='names'> {name} {symbol}${price_usd} <hr /></p>
                        {/* <p className='symbol'>{symbol}</p> 
                        <p className='price-usd'>${price_usd}</p> */}

                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Market