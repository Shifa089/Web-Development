import React, {useContext, useState} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({userName, password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        value={userName} 
        type="text"
        placeholder='Enter name'
        onChange={(e) => setUserName(e.target.value)}/>
        <input
        value={password} 
        type="password"
        placeholder='Enter password'
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login