import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <p className="flex items-center mr-6 cursor-pointer">
            <RxInstagramLogo className="mr-2" />
            <span className="text-[15px]">Instagram</span>
          </p>
          <p className="flex items-center mr-6 cursor-pointer">
            <RxGithubLogo className="mr-2" />
            <span className="text-[15px]">Github</span>
          </p>
          <p className="flex items-center mr-6 cursor-pointer">
            <RxLinkedinLogo className="mr-2" />
            <span className="text-[15px]">Linkedin</span>
          </p>

          <p className="flex items-center cursor-pointer">
            <IoIosMail className="mr-2" />
            <span className="text-[15px]">Mail</span>
          </p>
        </div>
        <div className="text-[15px] text-center">&copy; AJIT RAWAT</div>
      </div>
    </div>
  );
};

export default Footer;
