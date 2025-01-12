import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export const Navbar = () => {
  const toggleNavbar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
  };

  return (
    <div class="font-[popins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <header class="bg-white">
        <nav className="">
          <div>
            <img class="W-16" src="" alt="" className="class" />
          </div>
          <div class="">
            <ul>
              <li><Link to="" className='nav-link'></Link></li>
              <li><Link to="" className='nav-link'></Link></li>
              <li><Link to="" className='nav-link'></Link></li>
              <li><Link to="" className='nav-link'></Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}
