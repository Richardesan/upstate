import React, { useState } from "react";

const Card = ({data}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-[26rem] h-[26rem] overflow-hidden relative rounded-3xl flex flex-col items-start justify-end">
      <img src={data.img} className="w-full h-full absolute z-0 inset-0 object-cover" />

     <div
  onMouseEnter={() => setActive(true)}
  onMouseLeave={() => setActive(false)}
  onClick={() => setActive((prev) => !prev)} // mobile click toggle
  className={`z-20 cursor-pointer w-11/12 rounded-tr-2xl text-white py-4 px-7 transition-colors duration-500 ease-in-out ${
    active ? "bg-[#99EFF8]" : "bg-primaryCol"
  }`}
>

        <div className="flex items-center justify-between">
          <p className="text-xl w-8/12 transition-colors duration-300 text-white">
          {data.title}
          </p>
          <img src="/arrow.svg" />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            active ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-white leading-relaxed">
          {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
