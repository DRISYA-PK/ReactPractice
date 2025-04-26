import React, { useRef, useState } from 'react'

const InputFocus = () => {
  const numberRef=useRef();
  const [fact,getFact]=useState('');
  const buttonClicked=async()=>{
    const value=numberRef.current.value;
    const response=await fetch(`http://numbersapi.com/${value}`)
    const text=await response.text();
    getFact(text)
  }
  return (
    <div>
    <label>Enter A Number</label>  <input ref={numberRef} ></input>
    <button onClick={buttonClicked}>Get Description</button>
    <p>the number is {fact}</p>
    </div>
  )
}

export default InputFocus