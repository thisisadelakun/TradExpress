import React from 'react'
import { FaHome } from "react-icons/fa"
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import { GiBuyCard } from 'react-icons/gi'
import { GiArchiveResearch } from 'react-icons/gi'
import { RiAccountPinBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import '../Styles/FooterBars.css'

const FooterBars = () => {
    return (
        <div className='container'>
            {/* <div className='sticked'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'><FaHome /><br /><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to='/Learn'><GiArchiveResearch /><br /><p>Learn</p></Link>
                        </li>
                        <li>
                            <Link to='/Buy/Sell'><GiBuyCard width={200} /><br /><p>Buy/sell</p></Link>
                        </li>

                        <li>
                            <Link to='/Market'><BsFillFileBarGraphFill /> <br /><p>Markets</p></Link>
                        </li>
                       
                        
                        <li>
                            <Link to='/Learn'><RiAccountPinBoxFill /><br /><p>Account</p></Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </div>
    )
}

export default FooterBars