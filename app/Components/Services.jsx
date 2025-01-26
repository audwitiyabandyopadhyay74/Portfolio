import React from 'react';
import Service from './Service';
import { ServiceData } from '../Data/Service.js';

const Services = () => {
  return (
    <div className="lg: relative w-screen h-auto lg:h-auto mt-[150vh] lg:mt-[100vh] overflow-hidden flex flex-col items-center gap-[100px] justify-center">
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