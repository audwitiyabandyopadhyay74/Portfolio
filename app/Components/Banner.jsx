import Image from 'next/image';
import Myimg from "../../public/my.png";

const Banner = () => {
  return (
    <div className='banner w-screen lg:h-[80vh] h-auto gap-[-100vh] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center p-[10vh] lg:mt-0 mt-[30vh]'>
      <div className="text mt-[100vh] px-4 lg:px-[50px] z-100 ">
        <span className='text-3xl lg:text-5xl z-0'>Hi, I am a <h1 className='font-bold'>Web Developer</h1> </span>
      </div>

      <div className="w-full mt-[50vh] lg:w-[40vh] h-auto px-4 lg:px-[5vh] flex bg-center items-center justify-center relative">
        <span className='square mt-[-100vh] border-[10px] w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] rounded-md hidden lg:flex items-center justify-center'>a</span>
        <span className='circle'></span>
        <span className='square mt-[-100vh] border-[10px] w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] rounded-md hidden lg:flex items-center justify-center'>a</span>
        <span className='circle'></span>
        <span className='square mt-[-100vh] border-[10px] w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] rounded-md hidden lg:flex items-center justify-center'>a</span>
        <hr className='w-[35vh] lg:w-[70vh] h-[3.5vh] lg:h-[7vh] rounded-full hr15 absolute z-110' />
        <Image className='h-auto w-full max-w-[250px] lg:max-w-[500px]  lg:mt-0  z-00 relative lg:scale-1 scale-150' src={Myimg} alt="My Image" />
        <hr className='w-[35vh] lg:w-[70vh] h-[3.5vh] lg:h-[7vh] rounded-full hr105 absolute z-100' />
      </div>
    </div>
  );
};

export default Banner;
