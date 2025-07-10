import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const iconStyle =
    "text-3xl hover:scale-105 hover:text-secondaryCol transition-all duration-200 active:95 cursor-pointer";
  const linkStyle =
    "hover:text-secondaryCol transition-all duration-200 cursor-pointer hover:font-semibold hover:underline";
  return (
    <div className="bg-[#021419] py-12 text-[#9CA3AF]">
      <section className="w-9/12 max-lg:w-full max-lg:px-10  pb-7 border-b border-[#1F2937]   mx-auto flex flex-wrap  max-md:flex-col max-md:gap-y-5 items-start justify-between">
        <div>
          <p className="mb-4 text-white font-semibold">UPSTATE ELECTRICAL SYS. LLC</p>
          <div className="">

          <p>P.O. Box 58 Chesnee sc 29323</p>
          <p className="mt-1">Upstateelectricalsystemsllc@gmail.com</p>
          <div className="flex gap-x-3 items-center mt-5">
            <FiFacebook className={iconStyle} />
            <FiInstagram className={iconStyle} />
            <FaXTwitter className={iconStyle} />
          </div>
          </div>
        </div>
        <div className="text-[#9CA3AF] ">
          <p className="text-white font-semibold mb-4">Company</p>
           <div className="space-y-1">

          <p className={linkStyle}>Home</p>
          <p className={linkStyle}>Services</p>
          <p className={linkStyle}>Projects</p>
          <p className={linkStyle}>Reviews</p>
           </div>

        </div>
        <div className="text-[#9CA3AF] ">
          <p className="text-white font-semibold mb-4">Services</p>
          <div className="space-y-1">

          <p className="">Electric vehicle installation</p>
          <p className="">Electrical repairs</p>
          <p className="">Wiring and Rewiring</p>
          <p className="">Circuit breaker installation and repair</p>
          <p className="">Lighting installation and repairs</p>
          <p className="">Outlet and switch installation</p>
          </div>

        </div>
         <div className="text-[#9CA3AF] ">
          <p className="text-white font-semibold mb-4">Hours</p>
          <ul className="space-y-1">
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
            <li>Sun: 12:00am - 12:00pm</li>
          </ul>
        </div>
      </section>
      <p className="text-center mt-7 text-sm">
      <span className="mr-5">© 2025</span>   UPSTATE ELECTRIC SYS. LLC All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
