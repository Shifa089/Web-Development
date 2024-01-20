import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState(0);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Shifajamadar123')
    //   .then(res => res.json())
    //   .then(data => {
    //                     setData(data);
    //                 }
    //         );
    // }, []);
    
  return (
    <div className='bg-slate-600 px-4 py-6 w-full text-white my-7'>Github Followers of {data.login}: {data.followers}
    <img src={data.avatar_url} className='w-40 h-40' alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Shifajamadar123');
    return response.json() ;
}