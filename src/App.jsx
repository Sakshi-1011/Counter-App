import { useState } from 'react'
import './App.css'
import "tailwindcss"

function App() {

  const Min=0;
  const Max=108;

  const [count, setCount] = useState(0)

  const increment =()=>{
    //setCount(prev=>prev +1);
    setCount(prev=> (prev < Max ? prev + 1:prev));
  }

  const decrement=()=>{
    //setCount(prev=>(prev >0 ? prev-1:0));
    setCount(prev=>(prev >Min ? prev -1:prev));
  }

  const reset=()=>{
    setCount(0);
  }

  return (
   
    <div className='main'>
      <div className='sub-main'>
        
        <h1 className="head">Counter App</h1>
        <h2 className="head-count">{count}</h2>

        <div className='buttons'>
          <button onClick={increment}
        className="btn inc">
          Increase</button>

        <button onClick={decrement}
        className="btn dec">
          Decrease</button>

        <button onClick={reset}
        className="btn reset">
          Reset</button>
        </div>

        <p className="limits">
          Min Value: {Min} | Max Value: {Max}</p>

  
      </div>
    </div>
    
  )
}

export default App
