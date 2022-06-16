import React, {useState} from "react";

function Calc() {
  
  function random() {
    console.log('random')
    return Math.floor(Math.random() * 20)
  }
  const [number, setNumber] = useState(() => {
    return random()
  })

  function incre() {
    setNumber((prev) => {
      return prev + 1
    })
  }

  function decre() {
    setNumber((prev) => {
      return prev - 1
    })
  }

  return(
    <div>
      <p>{number}</p>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
    </div>
  )
}

export default Calc