import React from 'react'
import './CandleBody.css'
import Flames from './Flames';

const CandleBody = ({ variant }) => {
  return <div className={`candle-body ${variant}`}>
    <Flames/>
      <div className="candle-thread"></div>
  </div>;
};

export default CandleBody
