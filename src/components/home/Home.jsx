import React from "react";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

function Home() {
  return (
    <section
      id='home'
      className='h-screen flex flex-col justify-center items-center'
    >
      <div className='text-center  p-4 rounded-2xl'>
        <img src={Me} className='mx-auto' alt='' />
        <h1 className='text-3xl mt-6 mb-2 font-[900]'>Ghalib Hani Pratama</h1>
        <span className='text-gray-700'>I'm a Full Stack Developer</span>
        <HeaderSocials />
        <button
          className='bg-[#FF5733] mt-6 tracking-wider px-8 py-2 text-white font-[1000] rounded-3xl hover:scale-110 hover:bg-[#ff8469] transition-transform duration-300 ease-in-out'
          href='#contact'
        >
          Hire Me
        </button>
        <ScrollDown />
        {/* <UseAnimations
          className='absolute bottom-0 left-[935px] right-0 mb-4'
          animation={arrowDown}
          size={40}
          color='#FF5733'
        /> */}
      </div>
    </section>
  );
}

export default Home;
