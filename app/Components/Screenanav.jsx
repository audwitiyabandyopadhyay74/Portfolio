import React from 'react'

const Screenanav = () => {
  return (
    <div className  ="links  bg-white mt-[100vh] flex h-screen w-screen justify-center lg:invisible visible z-50">
    <ul className='flex flex-col items-center   gap-[50px] p-[20px] text-2xl z-50 bg-white h-[1000vh] w-[100%] mt-[-90vh] fixed'>
<li>Home</li>
<li>About</li>
<li>Projects</li>
<li>Services</li>
<li>Contact</li>
    </ul>
  </div>  )
}

export default Screenanav