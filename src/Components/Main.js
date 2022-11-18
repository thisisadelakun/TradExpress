import React from 'react'
import '../Styles/Main.css'
import { useState } from 'react'
import Home from './Home'


const Main = ({cartItems,setCartItems}) => {
  const [list,setList] = useState()
    
  return (
    <div className='myhome'>

      <Home />
      

    </div>
  )
}

export default Main