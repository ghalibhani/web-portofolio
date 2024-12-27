import React from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

function ScrollDown() {
  return (
    <div className='absolute bottom-6 left-[75px] right-0 flex flex-col items-center'>
      <a href='#about' className='text-center'>
        <span className='text-gray-600 mb-2'>Scroll Down</span>
        <UseAnimations
          className='ml-5 mt-2'
          animation={arrowDown}
          size={40}
          color='gray'
        />
      </a>
    </div>
  );
}

export default ScrollDown;
