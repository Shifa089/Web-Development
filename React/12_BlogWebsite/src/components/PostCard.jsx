import React from 'react'
import fileservice from '../appwrite/fileConfig'
import { Link } from 'react-router-dom'


function PostCard({
    $id, title, featuredImage
}) {
  // console.log("id in POST CARD",$id);
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounder-xl p-4'>
            <div className='w-full justify-center mb-4 relative md:h-60 h-48 overflow-hidden'>
                <img src={fileservice.getFilePreview(featuredImage)} alt="" className='rounded-xl h-full w-full object-cover' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard