import React from 'react'
// import Image from 'next/image'

const Service = (props) => {
  return (
    <div className='lg:w-[25%] w-[90%] lg:h-[80vh] h-[60vh] service border rounded-lg flex flex-col items-center justify-evenly hover:scale-110 hover:translate-y-[-5rem] cursor-pointer '>
<i className={`text-8xl rounded-lg mt-[50px]  ${props.className}`}></i>
<h1 className='text-3xl font-bold text-center '>{props.title}</h1>
<p className='text-1xl text-center max-w-[100vh]  '>{props.description}</p>
    </div>
  )
}

export default Service