import React from "react";
import Data from "./Data";

function Resume() {
  return (
    <section id='resume' className='pt-40 flex flex-col justify-center px-36'>
      <h2 className='font-bold text-5xl'>Experience</h2>
      <div className='mt-16'>
        {Data.map((item, index) => {
          const { id, icon, year, title, description } = item;
          const isLastItem = index === Data.length - 1;
          return (
            <div key={id} className='flex items-center'>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-200 rounded-full p-3'>
                  <i className={icon}></i>
                </div>
                {!isLastItem && <div className='bg-gray-200 w-1 h-16'></div>}
              </div>
              <div className='ml-10'>
                <h3 className='font-bold text-2xl'>{title}</h3>
                <p className='text-gray-500'>{year}</p>
                <p className='text-gray-500'>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Resume;
