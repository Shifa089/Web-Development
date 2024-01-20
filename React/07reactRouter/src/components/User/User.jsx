import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-slate-600 px-4 py-6 w-full text-white my-7'>User: {userid}</div>
  )
}

export default User