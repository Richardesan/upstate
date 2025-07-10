import React from "react";
import { SwipeCarousel } from "./slider";
const BestWork = () => {
  return (
    <section className="px-28 pt-28 max-md:px-4 max-md:pt-12 max-lg:px-10">

    <div className="text-black">
      <h1 className="font-bold text-4xl">Our best work</h1>
      <p className="mt-5 font-semibold text-black/70 max-w-xl w-full">
        Explore standout projects that showcase the quality, craftsmanship, and
        attention to detail we bring to every job.
      </p>
      
    </div>
    <SwipeCarousel />
    </section>

  );
};

export default BestWork;
