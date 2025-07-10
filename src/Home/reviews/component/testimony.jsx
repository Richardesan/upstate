import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import ReadMore from "./readMore";
const Testimony = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 4) % 5)
    );
  };

  const cards = [
    {
      id: 1,
      startcount: 5,
      text: `I had him install a 50 amp connection for me to be able to plug in my generator to supply my house with power.
He installed a breaker in my panel and a device that will not let me supply power with the generator without turning the main breaker off.
He is very professional, licensed and did a great job.
He satisfied me and I am a comercial electrical inspector.
Will use him again and highly recommend him.`,
      author: "Patrick Mcswain",
    },
    {
      id: 2,
      startcount: 5,
      text: `Did an awesome job getting our generator plug installed at our business!! Very fast and responsive.`,
      author: "Andrew Gregg",
    },
    {
      id: 3,
      startcount: 4,
      text: `Just want to say if you need any kind of electrical work for a good fair professional electrician upstate electrical system that’s who you need to call my family needed an electrician and it was cold. Our heat quit working called everyone and no one could come right out got told it’d be two or three days so I got in touch with upstate electrical. He came right out took care of everything the next day something unrelated happened again gave him a call. He came right back out. Took care of everything we got heat back in the house. He was very professional The prices were very fair would recommend upstate electrical system to anyone, especially if you’re looking for someone that’s gonna be very professional and fair these are the guys you need to call. I know if I had any other needs comes to electrical work they’re gonna be the ones I call hands-down.`,
      dp: "/testimoniladp.png",
      author: "Joey Ghant",
    },
    {
      id: 4,
      startcount: 5,
      title: "THE CHILL ROOM IS HAS PROVIDED AN INCREDIBLE ATMOSPHERE IN WEB3.",
      text: `I highly recommend upstate electrical systems for your electrical needs! They were very pleasant and professional!`,
      dp: "/attis.png",
      author: "Emily Sawyer",
    },
    {
      id: 5,
      startcount: 4,
      text: `I highly recommend upstate electrical systems for your electrical needs! They were very pleasant and professional!`,
      author: "Joshua Villeda",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 4 },
    left: { x: "-90%", scale: 0.5, zIndex: 3 },
    right: { x: "90%", scale: 0.5, zIndex: 2 },
    right1: { x: "50%", scale: 0.7, zIndex: 4 },
  };
 const getFirstLetter = (text) => {
  return text?.trim()?.charAt(0)?.toUpperCase() || "";
};

  return (
    <div className="flex items-center flex-col  justify-center relative  overflow-hidden text-white">
      {cards.map((card, index) => {
        const positionKey = positions[positionIndexes[index]];
        const variant = imageVariants[positionKey];

        return (
          <motion.div
            key={card.id}
            className={`absolute rounded-xl max-md:w-fit  max-sm:p-4 px-12 py-7 w-[685px]  text-xl font-semibold shadow-lg ${card.bg} rounded-[16px] border-[2px] border-[rgba(101,175,186,0.16)] backdrop-blur-[10px] bg-primaryCol shadow-[inset_1px_1px_4px_rgba(255,255,255,0.16),inset_-1px_-1px_4px_rgba(0,243,156,0.2),inset_8px_8px_16px_rgba(0,243,156,0.08),16px_16px_10px_rgba(8,15,52,0.16)] `}
            initial="center"
            animate={positionKey}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              zIndex: variant.zIndex,
            }}
          >
            <div className="flex flex-col justify-end items-start relative h-full gap-y-5 ">
              <img
                src="/quote.png"
                className="max-sm:w-10 w-16 object-contain"
              />
              {/* <p className="text-2xl font-bold text-[#65AFBA] max-sm:text-base">{card.title}</p> */}
              <div className="flex">
                {Array.from({ length: card.startcount }).map((_, index) => (
                  <GoStarFill className="mr-3 text-xl text-secondaryCol" />
                ))}
              </div>
              <div className="text-base text-[#65AFBA] max-sm:text-sm">
                <ReadMore text={card.text} maxChars={160} />
              </div>
              <section className="flex justify-between w-full">
                <div className="flex gap-x-5 items-center text-[#65AFBA] text-xl max-sm:text-sm max-sm:gap-x-2">
                  <div className="w-11 h-11 max-sm:w-9 max-sm:h-9 max-sm:text-lg text-xl flex justify-center items-center uppercase overflow-hidden bg-secondaryCol text-primaryCol rounded-full">
                   {getFirstLetter(card.author)}
                  </div>
                  <div className="">
                    <p className="font-bold text-base max-sm:text-sm">
                      {card.author}
                    </p>
                    <p className="font-normal text-sm max-sm:text-xs">
                      {card.role}
                    </p>
                  </div>
                </div>
                <img
                  src="/quote.png"
                  className="rotate-180 max-sm:w-10 w-16 object-contain"
                />
              </section>
            </div>
          </motion.div>
        );
      })}

      <div className="flex gap-4 pt-[30rem]  max-lg:pt-[24rem] max-sm:pt-[23rem]  z-10">
        <button
          onClick={handleBack}
          className="bg-[#1c393d] text-white px-4 py-2 rounded hover:scale-110 active:scale-95 transition-all duration-150 active:bg-primaryCol"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#1c393d] text-white px-4 py-2 rounded rotate-180 hover:scale-110 active:scale-95 transition-all duration-150 active:bg-primaryCol"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
