"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#3001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-[65px] flex flex-row items-center justify-between">
        <div className="md:hidden ml-10" onClick={toggleNav}>
          {isNavOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </div>
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[25px] hidden md:block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ajit Rawat
          </span>
        </a>

        <div
          className={`${
            isNavOpen ? "flex" : "hidden"
          } md:flex md:items-center md:w-[500px] w-full md:static absolute md:bg-transparent bg-[#3001417] left-0 md:py-0 py-2 md:pl-0 pl-7 md:opacity-100 opacity-95 top-[65px] md:flex-row flex-col transition-all duration-500`}
        >
          <div className="flex items-center justify-between w-full md:bg-transparent bg-[#0300154e] md:mr-[15px] mr-0 md:px-[20px] px-0 md:py-[10px] py-2 md:rounded-full text-gray-200">
            <a href="#hero" className="cursor-pointer mx-2">
              About me
            </a>
            <a href="#skills" className="cursor-pointer mx-2">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-2">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1QEGEa0clXYghOvRBqCGzKOTUzJaQ-kny/view?usp=drive_link"
              className="cursor-pointer mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
