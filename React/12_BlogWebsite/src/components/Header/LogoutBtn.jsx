import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispath = useDispatch();
    const [text,setText] =useState("Logout")
    const logoutHandler = (e) => {
        setText("Logging Out")
        authService.logout().then(() => {
            dispath(logout());
            window.location.reload();
        })
    }
    return (
        <button
        className='text-xl inline-bock px-6 py-2 duration-200 hover:text-2xl hover:ease-out hover:underline rounded-full sm:text-lg'
            onClick={logoutHandler}
        >{text}</button>
    )
}

export default LogoutBtn