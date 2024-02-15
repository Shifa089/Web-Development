import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { useEffect } from 'react'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else
      {
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between w-full'>
      <div className='w-full grid grid-rows-3 min-h-screen' style={{gridTemplateRows: '80px 1fr 400px'}}>
        <Header />
        <main className='self-stretch'>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div style={{backgroundColor: '#E1F0DA'}} className='flex justify-center items-center h-screen'>
      <div id="loader"></div>
    </div>
  );
}

export default App
