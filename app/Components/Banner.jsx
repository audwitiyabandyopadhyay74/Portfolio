import React from 'react'
import Image from 'next/image'
import Myimg from "../../public/my.png"

const Banner = () => {
  return (
    <div className='banner flex-wrap w-screen h-[80vh] flex lg:z-0 z-1000 absolute top-24 justify-between p-[20vh] items-center'>
      <div className="text px-[50px]">
        <span className='text-5xl'>Hi, I am a <h1 className='font-bold'>Web Developer</h1> </span>
      </div>

      <div className="w-[40vh] h-max px-[5vh] flex bg-center items-center justify-center relative">
     <br /> <span className='square border-[10px] w-[300px] h-[300px] rounded-md flex items-center justify-center'>a</span>       
    <br />  <span className='circle'></span>
     <br /> <span className='square border-[10px] w-[300px] h-[300px] rounded-md flex items-center justify-center'>a</span>       
     <br /> <span className='circle'></span>
     <br /> <span className='square border-[10px] w-[300px] h-[300px] rounded-md flex items-center justify-center'>a</span>       

      
       <hr className='w-[70vh] h-[7vh] rounded-full hr15 absolute z-110' />
        <Image className='h-[70vh] w-[30vh] z-0 relative' src={Myimg} width={500} alt="My Image" />
        <hr className='w-[70vh] h-[7vh] rounded-full hr105 absolute z-100' />
      </div>
    </div>
  )
}

export default Banner