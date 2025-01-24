import React from 'react'
import Image from 'next/image'
import img from '../../public/my.png'
const About = () => {
  return (
    <div className='relative w-screen h-[110vh] lg:h-[100vh] mt-[150vh] lg:mt-[100vh] overflow-x-hidden flex items-center gap-[100px] justify-center '>
        <div className="about-image border-[0px] rounded-lg resize  w-[20vh] flex items-center  justify-center h-[40vh]">
<Image src={img} width={100}/>
        </div>
        <div className="text-and-skills ">
            <h1 className='text-5xl font-bold hover:scale-110 pointer'>About Me
            <hr className='hr1 w-[20%] h-[2vh] rounded-full' />
            </h1>
<p className='w-[50vh] mt-[10px]'>Hi There, I am Audwitiya Bandyopadhyay Doing this job from
    2021 to Now. I am a Full Stack Web Developer. I have a good 
    knowledge of creating a Website and a Web Application.
</p>

<div className="skills flex flex-col "> 
     <div className="text-2xl font-bold">Skills</div>
     <ul className='w-[80vh]   '>
        <li className='flex hr12165'> <span className='w-[30vh]'>HTML & CSS</span>  <hr className='hr1 w-[100%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>JavaScript</span>  <hr className='hr1 w-[80%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>React Js</span>  <hr className='hr1 w-[85%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Next Js</span>  <hr className='hr1 w-[91%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Node js</span>  <hr className='hr1 w-[78%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Express Js</span>  <hr className='hr1 w-[95%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>SQL</span>  <hr className='hr1 w-[80%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Mongo DB</span>  <hr className='hr1 w-[100%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Firebase</span>  <hr className='hr1 w-[100%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Python</span>  <hr className='hr1 w-[70%] h-[2vh] rounded-full' /></li>
        <li className='flex hr12165'> <span className='w-[30vh]'>Graphics Design</span>  <hr className='hr1 w-[88.5%] h-[2vh] rounded-full' /></li>

        </ul>
</div>
        </div>
    </div>
  )
}

export default About