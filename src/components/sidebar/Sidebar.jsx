import React from "react";
import Logo from "../../assets/logo.svg";

function Sidebar() {
  return (
    <aside className='fixed top-0 left-0 bg-white z-10 w-20 h-full flex flex-col justify-between items-center py-4'>
      <a href='#home'>
        <img src={Logo} alt='' />
      </a>
      <nav className=''>
        <div className=''>
          {/* Menu Links */}
          <ul className='flex flex-col items-center space-y-4'>
            <li>
              <a href='#home' className='hover:text-gray-300'>
                <i className='icon-home'></i>
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-gray-300'>
                <i className='icon-user-following'></i>
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-gray-300'>
                <i className='icon-briefcase'></i>
              </a>
            </li>
            <li>
              <a href='#resume' className='hover:text-gray-300'>
                <i className='icon-graduation'></i>
              </a>
            </li>
            <li>
              <a href='#portofolio' className='hover:text-gray-300'>
                <i className='icon-layers'></i>
              </a>
            </li>
            <li>
              <a href='#blog' className='hover:text-gray-300'>
                <i className='icon-note'></i>
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-gray-300'>
                <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Nav Footer */}
      <div className='text-center px-5 py-2'>
        <span className='text-sm text-gray-400'>
          Copyright &copy; 2024 Ghalib Hani Pratama. All Rights Reserved
          {/* Copyright &copy; 2024 Ghalib Hani Pratama */}
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
