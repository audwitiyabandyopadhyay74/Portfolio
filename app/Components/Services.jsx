import React from 'react';
import Service from './Service';
import { ServiceData } from '../Data/Service.js';

const Services = () => {
  return (
    <div className="lg: relative h-auto lg:h-auto mt-[150vh] lg:mt-[100vh] overflow-hidden gap-[100px]" style={{width:"100%",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
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