import React from "react";

function HeaderSocials() {
  return (
    <div className='flex justify-center space-x-8 mt-6'>
      <a href='https://www.instagram.com/ghalibhani/' target='_blank'>
        <i className='fa-brands hover:text-yellow-500 transition-all text-2xl fa-instagram'></i>
      </a>
      <a href='https://x.com/ghalibhani_' target='_blank'>
        <i className='fa-brands hover:text-yellow-500 transition-all text-2xl fa-twitter'></i>
      </a>
      <a href='https://www.linkedin.com/in/ghalibhanipratama/' target='_blank'>
        <i className='fa-brands hover:text-yellow-500 transition-all text-2xl fa-linkedin'></i>
      </a>
      <a href='https://github.com/ghalibhani' target='_blank'>
        <i className='fa-brands hover:text-yellow-500 transition-all text-2xl fa-github'></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
