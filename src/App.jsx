import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // let counter = 0;

    let [counter,setCounter]=useState(0);

    const addValue = ()=>{
      if(counter<20){
        setCounter(counter+1)
      }
      else{
        alert("Max Value 20 !!!")
      }
    }

    const removeValue = ()=>{
      if(counter>0){
        setCounter(counter-1)
      }
      else{
        alert("Value Can't be Negetive!!!")
      }
    }

    const clean = ()=>{
      setCounter(counter=0)
    }


  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Increase</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Decrease</button>
      <br /><br />
      <button
      onClick={clean}
      >Clear</button>
    </>
  )
}

export default App
