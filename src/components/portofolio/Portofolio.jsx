import React from "react";
import { useState } from "react";
import Menu from "./Menu";

function Portofolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (category) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatedItems);
  };

  return (
    <section
      id='portofolio'
      className='md:pt-40 pt-28 flex flex-col justify-center md:px-36 px-8'
    >
      <h2 className='font-bold text-5xl'>Recent Works</h2>
      <div className='flex flex-col md:flex-row justify-center gap-4 mt-10'>
        <span
          className='bg-yellow-300 px-4 text-center py-1 font-semibold rounded-xl cursor-pointer'
          onClick={() => setItems(Menu)}
        >
          Everything
        </span>
        <span
          className='bg-yellow-300 px-4 text-center py-1 font-semibold rounded-xl cursor-pointer'
          onClick={() => filterItem("Web")}
        >
          Web Developer
        </span>
        <span
          className='bg-yellow-300 px-4 text-center py-1 font-semibold rounded-xl cursor-pointer'
          onClick={() => filterItem("API")}
        >
          API Developer
        </span>
        <span
          className='bg-yellow-300 px-4 text-center py-1 font-semibold rounded-xl cursor-pointer'
          onClick={() => filterItem("Mobile")}
        >
          Mobile Developer
        </span>
      </div>
      <div className='grid grid-cols-3 mt-8 md:gap-8 gap-2'>
        {items.map((item) => {
          const { id, image, title, category, link } = item;
          return (
            <div
              className='shadow-lg rounded-3xl md:p-6 relative overflow-hidden group'
              key={id}
            >
              <div>
                <img src={image} alt={title} />
                <div className='bg-blue-500 absolute left-0 top-0 h-full w-full opacity-0 group-hover:opacity-80 transition-all'></div>
              </div>
              <span className='text-white font-semibold bg-purple-800 absolute top-0 left-10 px-4 py-2 rounded-b-2xl transform -translate-y-12 transition-all group-hover:opacity-100 group-hover:translate-y-0'>
                {category}
              </span>
              <h3 className='text-4xl text-white px-2 absolute top-24 transform translate-y-10 transition-all font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
                {title}
              </h3>
              <a
                className='text-white absolute text-2xl font-semibold bottom-6 bg-yellow-400 h-14 w-14 flex justify-center items-center cursor-pointer rounded-full transition-all opacity-0 group-hover:opacity-100'
                href={`${link}`}
              >
                <i className='icon-link'></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portofolio;
