import React from 'react';
import Service from './Service';
import { ServiceData } from '../Data/Service.js';

const Services = () => {
  return (
    <div className='w-screen h-[100vh] lg:mt-[20vh] mt-[30vh] flex flex-col items-center justify-between gap-10 p-4'>
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