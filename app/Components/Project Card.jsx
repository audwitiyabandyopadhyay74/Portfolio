import React from 'react'
import Image from 'next/image'
import Script from "next/script";


const ProjectCard = (props) => {
  return (
    <div className='lg:w-[25%] w-[90%] lg:h-[80vh] h-[60vh] service border rounded-lg flex flex-col items-center justify-evenly hover:scale-110 hover:translate-y-[-5rem] cursor-pointer '>
  <Image
                src={props.image || "../../public/project 1 Ma Durga.png"} 
                width={100} 
                height={100} 
                alt='Not Available' 
                className='border w-[95%] h-[30vh] rounded-lg mt-[10px]' 
            ></Image><h3 className='text-3xl font-bold text-center'>{props.title || "Title"}</h3>
<span className='text-1xl width-[30vh] text-center'>{props.description || "Description this is a sample of it"}</span>
<div className="flex gap-[10px]">
<a href={props.github}><i className="fa-brands fa-github text-2xl hover:scale-110 hover:cursor-pointer" style={{fontSize:"35px"}}></i></a>
<a href={props.link}> <i className="fa-solid fa-globe hover:scale-110 hover:cursor-pointer" style={{fontSize:"35px"}}></i> </a></div>
<Script src="https://kit.fontawesome.com/dd02391768.js"/>

    </div>
  )
}

export default ProjectCard