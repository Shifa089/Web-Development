import { useState } from 'react' //This is how u import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  //let counter =5;
  const addValue = () =>{
    if(counter!=20)
    {
      counter++;
      setCounter(counter);
    }
  }

  const subValue = () =>{
    if(counter!=0)
    {
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>This is a good counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subValue}>Subtract Value {counter}</button>
    </>
  )
}

export default App
