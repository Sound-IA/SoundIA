import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export function NavBar() {
  return (
    <div className='flex justify-between items-center w-4/6 mx-auto py-8'>
      <Link to={'/'} href='/MainPage' className='flex items-center z-20'>
        <img src={Logo} alt='logo' className='w-55 mr-4'/>
        <span className='text-white font-normal text-2xl'>Soundwave</span> 
          </Link>
          
          <ul className='flex'>
              <li>
                  <Link to={'/discover'} className='hover:text-nav-hover text-white font-normal text-lg mr-10'>Discover</Link>
              </li>
              <li>
                  <Link to={'/join'} className='text-white hover:text-nav-hover font-normal text-lg'>Join</Link>
              </li>
          </ul>

    </div>
  );
}
