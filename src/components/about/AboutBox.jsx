import React from "react";

function AboutBox() {
  return (
    <div className='md:flex md:flex-row flex-col mt-16 justify-center gap-24'>
      <div className='flex gap-4 items-center'>
        <i className='text-5xl text-gray-300 icon-fire'></i>
        <div>
          <h3 className='font-bold text-2xl text-gray-700'>180</h3>
          <span className='font-semibold text-gray-700'>Project completed</span>
        </div>
      </div>
      <div className='flex gap-4 mt-5 md:mt-0 items-center'>
        <i className='text-5xl text-gray-300 icon-cup'></i>
        <div>
          <h3 className='font-bold text-2xl text-gray-700'>180</h3>
          <span className='font-semibold text-gray-700'>Cup of Coffe</span>
        </div>
      </div>
      <div className='flex gap-4 mt-5 md:mt-0 items-center'>
        <i className='text-5xl text-gray-300 icon-people'></i>
        <div>
          <h3 className='font-bold text-2xl text-gray-700'>180</h3>
          <span className='font-semibold text-gray-700'>Cup of Coffe</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
