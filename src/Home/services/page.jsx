import React from "react";
import Card from "./component/card";
import Contact from "../../component/contact";

const Services = () => {
  const data = [
    {
      img: "/services.jpg",
      title: "Residential Electrical Services",
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
    {
      img: "/commerical.jpg",
      title: `Commercial Electrical Services`,
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
    {
      img: "/industrial.jpg",
      title: `Industrial Electrical Services`,
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
    {
      img: "/construction.jpg",
      title: "Residential Electrical Services",
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
    {
      img: "/about.png",
      title: "Residential Electrical Services",
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
    {
      img: "/panel.jpg",
      title: "Residential Electrical Services",
      content: `We provide businesses with personalized electrical solutions, such
            as retail, office, and facility wiring, renovations, and
            maintenance. We ensure your activities function smoothly and safely.`,
    },
  ];
  
  return (
    <div>
      <section className="h-[45rem] max-md:h-screen p-28  max-lg:px-10 max-md:px-4  relative">
        <img
          src="/servicepage.jpg "
          alt="services"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#0214198C]" />

        <div className="relative z-10 flex flex-col text-white justify-center w-6/12 max-md:w-full text-xl h-full">
          <h1 className="text-white text-4xl font-bold">
            Expert Electrical Services in Upstate
          </h1>
          <div className="space-y-5 mt-9">
            At Upstate Electrical Systems, we handle a wide range of residential
            and commercial electrical needs. Whether it’s a new project or a
            quick fix, you can count on us for reliable service and quality
            results every time.
          </div>
        </div>
      </section>
      <section className="p-28  max-lg:px-10 max-md:px-4 max-md:py-12">
        <div className=" mx-auto mb-10">
          <div className="flex items-center gap-x-3">
            <img src="/variables.svg" alt="variables" />
            <h1 className="text-[#021419] text-4xl max-md:text-3xl capitalize font-bold">
              Our services at Upstate Electrical Systems LLC{" "}
            </h1>
          </div>
          <p className=" w-6/12 mt-6 max-md:w-full font-semibold text-black/70">
            At Upstate Electrical Systems, we manage various electrical
            requirements for both homes and businesses. Whether it's a new
            installation or a speedy repair, you can rely on us for dependable
            service and excellent outcomes consistently.
          </p>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-6 max-md:gap-4 max-md:w-full w-11/12 mx-auto">
          {data.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Services;
