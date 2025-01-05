// import React from "react";
// import Logo from "../../assets/logo.svg";

// function Sidebar() {
//   return (
//     <aside className='fixed top-0 left-0 bg-white z-10 w-20 h-full border-r-2 flex flex-col justify-between items-center py-4'>
//       <a href='#home'>
//         <img src={Logo} alt='' />
//       </a>
//       <nav className=''>
//         <div className=''>
//           {/* Menu Links */}
//           <ul className='flex flex-col items-center space-y-6'>
//             <li>
//               <a href='#home' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-home'></i>
//               </a>
//             </li>
//             <li>
//               <a href='#about' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-user-following'></i>
//               </a>
//             </li>
//             <li>
//               <a href='#services' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-briefcase'></i>
//               </a>
//             </li>
//             <li>
//               <a href='#resume' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-graduation'></i>
//               </a>
//             </li>
//             <li>
//               <a href='#portofolio' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-layers'></i>
//               </a>
//             </li>
//             <li>
//               <a href='#contact' className='hover:text-gray-300'>
//                 <i className='hover:text-yellow-500 transition-all text-2xl icon-bubble'></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Nav Footer */}
//       <div className='text-center px-5 py-2'>
//         <span className='text-sm text-gray-400'>
//           Copyright &copy; 2024 Ghalib Hani Pratama. All Rights Reserved
//           {/* Copyright &copy; 2024 Ghalib Hani Pratama */}
//         </span>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import Logo from "../../assets/logo.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className='fixed top-4 left-4 z-50 bg-yellow-500 text-white p-3 rounded-md md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className='icon-menu text-2xl'></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-white z-40 w-20 md:h-full h-full border-r-2 flex flex-col justify-between items-center py-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-20`}
      >
        <a href='#home'>
          <img src={Logo} alt='Logo' />
        </a>
        <nav className=''>
          <div className=''>
            {/* Menu Links */}
            <ul className='flex flex-col items-center space-y-6'>
              <li>
                <a href='#home' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-home'></i>
                </a>
              </li>
              <li>
                <a href='#about' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-user-following'></i>
                </a>
              </li>
              <li>
                <a href='#services' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-briefcase'></i>
                </a>
              </li>
              <li>
                <a href='#resume' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-graduation'></i>
                </a>
              </li>
              <li>
                <a href='#portofolio' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-layers'></i>
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-gray-300'>
                  <i className='hover:text-yellow-500 transition-all text-2xl icon-bubble'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Nav Footer */}
        <div className='text-center px-5 py-2'>
          <span className='text-sm text-gray-400'>
            Copyright &copy; 2024 Ghalib Hani Pratama. All Rights Reserved
          </span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
