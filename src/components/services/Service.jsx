import React from "react";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import { col } from "framer-motion/client";

function Service() {
  const data = [
    {
      id: 1,
      image: Image2,
      title: "Web Development",
      description:
        "I can build a beautiful and scalable website using HTML, CSS, and React.js.",
    },
    {
      id: 2,
      image: Image1,
      title: "Mobile App Development",
      description:
        "I can develop a mobile application that runs on Android and iOS.",
    },
    {
      id: 3,
      image: Image3,
      title: "API Development",
      description: "I can develop REST API using Java and Springboot.",
    },
  ];
  return (
    <section id='services' className='md:pt-40 pt-28 flex flex-col justify-center md:px-36 px-8'>
      <h2 className='font-bold text-5xl'>Services</h2>
      <div className='md:flex justify-center gap-12 mt-16'>
        {data.map((item, index) => {
          const color = ["bg-purple-400", "bg-blue-400", "bg-red-400"];
          const bgColor = color[index % color.length];
          return (
            <div
              className={`flex flex-col mb-5 md:mb-0 md:w-[500px] p-10 rounded-3xl ${bgColor} justify-center items-center`}
              key={item.id}
            >
              <img className='w-40 h-40' src={item.image} alt='' />
              <h1 className='font-bold text-center my-4 text-2xl text-white'>
                {item.title}
              </h1>
              <p className='text-center font-semibold text-white'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
