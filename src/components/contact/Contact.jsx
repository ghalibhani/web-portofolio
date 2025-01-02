import React from "react";

function Contact() {
  return (
    <section id='contact' className='pt-40 flex flex-col justify-center px-36 pb-20'>
      <h2 className='font-bold text-5xl'>Get in Touch</h2>
      <div className='flex mt-14 gap-36'>
        <div>
          <h3 className='font-bold text-2xl'>Lets talk about everything!</h3>
          <p>Dont like form? Send me an email.</p>
        </div>

        <form action=''>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <input
                className='drop-shadow-lg p-5 rounded-3xl w-[300px]'
                type='text'
                placeholder='Insert your name'
              />
              <input
                className='drop-shadow-lg p-5 rounded-3xl w-[300px]'
                type='email'
                placeholder='Insert your email'
              />
            </div>
            <div>
              <input
                className='drop-shadow-lg p-5 rounded-3xl w-[615px]'
                type='text'
                placeholder='Insert your subject'
              />
            </div>
            <div>
              <textarea
                name=''
                id=''
                cols={30}
                rows={4}
                placeholder='Write your message'
                className='drop-shadow-lg p-5 rounded-3xl w-[615px]'
              ></textarea>
            </div>
            <button
              className='bg-[#FF5733] tracking-wider w-48 px-8 py-2 text-white font-[1000] rounded-3xl hover:scale-110 hover:bg-[#ff8469] transition-transform duration-300 ease-in-out'
              href='#contact'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
