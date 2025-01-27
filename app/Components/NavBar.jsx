"use client";
import React, { useState } from 'react';
import ScreenNav from './Screenanav';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`w-screen h-24 flex items-center justify-between lg:gap-1 gap-[40%] fixed top-[1vh] z-50 ${isMenuOpen?"bg-white mt-[-1vh]":""}`}>
        <div className="logo text-2xl font-bold p-4">
          Portfolio
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden visible p-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </div>

        {/* Desktop Navigation */}
        <div className={`links flex h-24 w-max lg:visible ${isMenuOpen ? 'visible' : 'invisible'} lg:flex lg:items-center lg:gap-4`}>
          <ul className="flex items-center gap-6 p-4 text-lg">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Projects</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (ScreenNav Component) */}
      {isMenuOpen && <ScreenNav />}
    </>
  );
};

export default NavBar;
