import UserContextProvider from './context/UserContextProvider'
import './App.css'
import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Shifa</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
