import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: '#99BC85' }} className='w-full'>
      <div className='flex flex-col '>
        <div className='flex justify-evenly px-4 py-5'>
          <div>
            <Logo width='150px' />
          </div>
          <div className='flex flex-col justify-center text-center'>
            <p className='font-bold my-3 text-2xl'>The Site Of Your Choice</p>
            <div className='flex text-left'>
              <div className='mx-5'>
                <ul>
                  <li className='my-2 font-semibold opacity-70'>Services</li>
                  <li><Link to='/login' className='hover:underline text-sm'>Blogs</Link></li>
                  <li><Link to='/login' className='hover:underline text-sm'>Status</Link></li>
                  <li><Link to='/login' className='hover:underline text-sm'>Manage Account</Link></li>
                </ul>
              </div>
              <div className='mx-5'>
                <ul>
                  <li className='my-2 font-semibold opacity-70'>Company</li>
                  <li><Link to='/login' className='hover:underline text-sm'>About Us</Link></li>
                  <li><Link to='/login' className='hover:underline text-sm'>Contact Us</Link></li>
                  <li><Link to='/login' className='hover:underline text-sm'>Blog</Link></li>
                  <li><Link to='/login' className='hover:underline text-sm'>Management Team</Link></li>
                </ul>
              </div>
              <div className='mx-5'>
                <ul>
                  <li className='my-2 font-semibold opacity-70'>Customers</li>
                  <li><Link to='/login' className='hover:underline text-sm'>Customer Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex flex-col'>
          <div className='flex justify-center text-3xl py-3'>
            <FaFacebook className='mx-3' />
            <FaInstagram className='mx-3' />
            <FaLinkedin className='mx-3' />
            <FaGithub className='mx-3' />
            <FaTwitter className='mx-3' />
          </div>
          <div className='flex justify-center my-2 text-sm items-center'>
            <FaRegCopyright />
            <span className="align-middle px-2">Copyright. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer