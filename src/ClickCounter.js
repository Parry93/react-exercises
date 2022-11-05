import React, { useState } from 'react'




const ClickCounter = ({value = 0}) => {

  const [clickCount, setClickCount] = useState(value)
  function handleIncrement() {
    setClickCount(clickCount + 1)
}

  return (
    <div>
     
        <h2>click: {clickCount}</h2>
        <button onClick={handleIncrement}>+</button>
    
   
    </div>
  )
}

export default ClickCounter
