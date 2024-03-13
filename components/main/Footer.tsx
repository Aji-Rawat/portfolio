"use client";
import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { IoIosMail, IoIosArrowUp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Function to handle click on the upward arrow button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center ">
        <div className="flex flex-center items-center mb-4 md:mb-0 z-30">
          <p className="flex items-center mr-6 cursor-pointer">
            <FaXTwitter className="mr-2" />
            <a
              className="text-[15px]"
              href="https://www.x.com/"
              target="_blank"
            >
              X.com
            </a>
          </p>
          <p className="flex items-center mr-6 cursor-pointer">
            <RxGithubLogo className="mr-2" />
            <a
              className="text-[15px]"
              href="https://www.github.com/Aji-Rawat"
              target="_blank"
            >
              Github
            </a>
          </p>
          <p className="flex items-center mr-6 cursor-pointer">
            <RxLinkedinLogo className="mr-2" />
            <a
              className="text-[15px]"
              href="https://www.linkedin.com/in/Aji-Rawat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>

          <p className="flex items-center cursor-pointer">
            <IoIosMail className="mr-2" />
            <a
              className="text-[15px]"
              href="mailto:ajeetrawat056@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail
            </a>
          </p>
        </div>
        {/* Upward arrow button */}
        <button
          className="text-gray-400 hover:text-gray-600 focus:outline-none z-10"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
