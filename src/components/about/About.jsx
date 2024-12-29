import React from "react";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

function About() {
  return (
    <section className='h-screen flex flex-col justify-center px-36' id='about'>
      <h2 className='font-bold text-3xl'>About Me</h2>
      <div className='mt-8 flex items-center'>
        <div className='w-80'>
          <img src={Image} className='w-56' alt='' />
        </div>
        <div className='ml-16 p-8 rounded-xl shadow-2xl flex gap-14'>
          <div className='w-1/2 flex flex-col justify-center'>
            <p className='mt-4 text-justify text-gray-600'>
              Hello am Ghalib Hani Pratama, a Full Stack Developer from
              Indonesia. I have rich experience in web site design and building,
              also I am good at Node.js, React.js, Next.js, Express.js, and
              MongoDB. I love to talk with you about our unique.
            </p>
            <button
              className='bg-[#FF5733] w-52 mt-4 tracking-wider px-8 py-2 text-white font-[1000] rounded-3xl hover:scale-110 hover:bg-[#ff8469] transition-transform duration-300 ease-in-out'
              href='#contact'
            >
              Download CV
            </button>
          </div>
          <div className='w-1/2'>
            {/* ------------------ */}
            <div>
              <h1 className='text-gray-600 font-semibold'>JavaScript</h1>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                <div className='w-[80%] bg-yellow-400 h-2.5 rounded-full'></div>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-gray-600 font-semibold'>React JS</h1>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                <div className='w-[90%] bg-blue-600 h-2.5 rounded-full'></div>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-gray-600 font-semibold'>React Native</h1>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                <div className='w-[85%] bg-blue-400 h-2.5 rounded-full'></div>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-gray-600 font-semibold'>Java</h1>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                <div className='w-[75%] bg-green-600 h-2.5 rounded-full'></div>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-gray-600 font-semibold'>PHP</h1>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                <div className='w-[70%] bg-purple-700 h-2.5 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
