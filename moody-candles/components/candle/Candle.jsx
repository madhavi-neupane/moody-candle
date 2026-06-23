import React from 'react'
import CandleBody from './CandleBody'
import Flames from './Flames'
import './CandleBody.css'


  const Candle = ({variant}) =>{
  return (
    <div className="candle">
        <CandleBody variant={variant}/>
    </div>
  )
}

export default Candle
