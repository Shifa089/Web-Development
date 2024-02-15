import React from 'react'
import { Container, LogoutBtn, Logo } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  // console.log("authstatus",authStatus);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]
  return (
    <header className='py-3 shadow w-full sm:h-24' style={{ backgroundColor: '#D4E7C5' }}>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className='flex ml-auto sm:flex-wrap sm:justify-center sm:items-center'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='sm:text-left'>
                  <button onClick={() => navigate(item.slug)} className='text-xl inline-bock px-6 py-2 duration-200 hover:text-2xl hover:ease-out hover:underline rounded-full sm:text-lg'>{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header