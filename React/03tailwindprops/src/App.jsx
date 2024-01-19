import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "Shifa",
    age : 22
  };

  let myArr = [1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS test</h1>
      {/* <Card channel="Shifa" myObj={myObj} myArr={myArr} /> */}
      <Card userName="Shifa" btnText="Click me" />
      <Card userName="Hello" btnText="Visit me" />
    </>
  )
}

export default App
