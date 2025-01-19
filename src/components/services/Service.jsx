import React from "react";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

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
    <section
      id='services'
      className='md:pt-40 pt-28 flex flex-col justify-center md:px-36 px-8'
    >
      <h2 className='font-bold text-5xl'>Services</h2>
      <div className='md:flex justify-center mt-16 gap-10'>
        {data.map((item, index) => {
          const color = ["bg-purple-400", "bg-blue-400", "bg-red-400"];
          const bgColor = color[index % color.length];
          return (
            <CardContainer className='mt-8 md:mt-0 inter-var w-80'>
              <CardBody
                className={`${bgColor} relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border`}
                key={item.id}
              >
                <CardItem
                  translateZ='100'
                  rotateX={20}
                  rotateZ={-10}
                  className='w-full mt-4 flex justify-center'
                >
                  <img
                    src={item.image}
                    height='5000'
                    width='1000'
                    className='h-24 w-24 object-cover rounded-xl group-hover/card:shadow-xl'
                    alt='thumbnail'
                  />
                </CardItem>
                <CardItem
                  translateZ='50'
                  className='font-bold w-full text-center my-4 text-3xl text-white'
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-center text-white'
                >
                  {item.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
