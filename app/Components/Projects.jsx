import React from 'react';
import Card from "./Project Card";
import { ProjectData } from "../Data/Projects";

const Projects = () => {
  return (
    <div 
    className= "lg: relative w-screen h-[130vh] lg:h-auto mt-[150vh] lg:mt-[100vh] overflow-hidden flex items-center gap-[100px] justify-center"
    >
      <h1 className="w-[80%] text-center text-4xl md:text-8xl font-bold uppercase">Projects</h1>
      <div className="w-screen h-auto flex justify-center items-center flex-wrap gap-4 md:gap-10 mt-4">
        { 
          ProjectData.map((props) => <Card key={props.id} {...props} />)
        }
      </div>
    </div>
  );
}

export default Projects;