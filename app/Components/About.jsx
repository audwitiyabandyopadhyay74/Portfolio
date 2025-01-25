import React from 'react'
import Image from 'next/image'
import img from '../../public/my.png'
const About = () => {
  return (
    <div className= ' lg: relative w-screen h-[130vh] lg:h-auto mt-[150vh] lg:mt-[100vh] overflow-hidden flex items-center gap-[100px] justify-center '>
        <div className=" invisible lg:visible   about-image border-[0px] rounded-lg resize  w-[20vh] flex items-center  justify-center h-[40vh]">
<Image src={img} width={100}/>
        </div>
        <div className="text-and-skills relative ml-1/2 lg:relative w-screen  lg:w-max lg:block flex flex-col items-start justify-center ">
            <h1 className='text-5xl font-bold hover:scale-110 pointer'>About Me
            <hr className='hr1 w-[20%] h-[2vh] rounded-full' />
            </h1>
<p className='w-[50vh] mt-[10px]'>Hi There, I am Audwitiya Bandyopadhyay Doing this job from
    2021 to Now. I am a Full Stack Web Developer. I have a good 
    knowledge of creating a Website and a Web Application.
</p>

<div className="skills flex flex-col "> 
     <div className="text-2xl font-bold">Skills</div>
     <ul className='lg:w-[80vh] w-screen  lg:block flex lg:flex-row flex-col items-start justify-between gap-[10px] '>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh]  relative'>HTML & CSS</span> <div className="w-[100%] flex  justify-start items-center"><hr className='hr1 w-[100%] h-[2vh] rounded-full absolute lg:relative' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165]'> <span className='w-[30vh relative]'>JavaScript</span>     <div className='w-[80%]  flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[100%] h-[2vh] rounded-full absolute lg:relative' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>React Js</span>       <div className='w-[85%]   flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[100%] h-[2vh] rounded-full absolute lg:relative' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Next Js</span>        <div className='w-[91%]   flex  justify-start items-center h-[2vh]'> <hr className='hr1 w-[100%] h-[2vh] rounded-full' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Node js</span>        <div className='w-[78%]   flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[78%] h-[2vh] rounded-full  absolute lg:relative ' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Express Js</span>     <div className='w-[95%]   flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[95%] h-[2vh] rounded-full  absolute lg:relative ' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>SQL</span>            <div className='w-[80%]   flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[80%] h-[2vh] rounded-full  absolute lg:relative ' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Mongo DB</span>       <div className='w-[100%]  flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[100%] h-[2vh] rounded-full absolute lg:relative ' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Firebase</span>       <div className='w-[100%]  flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[100%] h-[2vh] rounded-full absolute lg:relative ' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Python</span>         <div className='w-[70%]   flex  justify-start items-center h-[2vh]' ><hr className='hr1 w-[100%] h-[2vh] rounded-full' /></div></li>
        <li className='flex lg:gap-[10px] lg:flex-row flex-col  relative hr12165'> <span className='w-[30vh] relative'>Graphics Design</span><div className='w-[100%]  flex  justify-start items-center h-[2vh]'><hr className='hr1 w-[88.5%] h-[2vh] rounded-full' /></div></li>

        </ul>
</div>
        </div>
    </div>
  )
}

export default About