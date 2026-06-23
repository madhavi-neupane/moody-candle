import React, {useState} from 'react'
import Candle from '../components/candle/Candle'
import './App.css'

function App() {

  const [selectedCandle, setSelectedCandle] = useState('classic')

 return(
  <div className='candle-choice'>
    <h1>Choose your Candle</h1>
    <select value={selectedCandle}
    onChange={(e) => setSelectedCandle(e.target.value)}>
      <option value="classic">Classic</option>
      <option value="love">Lovey Dovey</option> 
      <option value="moody">Happy Mood</option>
      <option value="rainbow">Neutral</option>

    </select>
    <Candle variant={selectedCandle}/>
  </div>
 )
}

export default App


