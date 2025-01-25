import React from 'react';
import Service from './Service';
import { ServiceData } from '../Data/Service.js';

const Services = () => {
  return (
    <div className="lg:w-screen w-[150%] h-[200vh] lg:h-auto flex flex-col items-center align-middle center justify-center mt-20 ">
      <span className='text-4xl md:text-8xl font-bold uppercase'>Services</span>
      <div className="flex w-screen h-max items-center justify-evenly flex-col lg:flex-row flex-wrap gap-4">
        {
          ServiceData.map((item, index) => {
            return <Service key={index} {...item} />
          })
        }
      </div>
    </div>
  );
}

export default Services;