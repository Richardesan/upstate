import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Chooseus = () => {
  const data = [
    {
      title: "Licensed and Insured",
      context:
        "It ensures the company operates legally and protects both the homeowner and the business from liability",
    },
    {
      title: "Skilled Electricians",
      context:
        "Our team is trained, certified, and experienced to ensure high-quality and safe work.",
    },
    {
      title: "Upfront Pricing",
      context:
        "We provide clear, competitive pricing before any work begins. No hidden fees or surprises.",
    },
    {
      title: "Timely Completion",
      context:
        "We value your time and work efficiently to complete all projects on schedule.",
    },
    {
      title: "Customer Satisfaction",
      context:
        "Your satisfaction is our top priority. We go the extra mile to exceed your expectations.",
    },
  ];

  return (
    <div className="w-full my-12 flex items-center justify-center">
      <div className="w-full max-w-7xl max-lg:px-10 max-md:px-4">
        <div className="flex items-center gap-x-3">
          <img src="/variables.svg" alt="variables" />
          <h1 className="text-[#021419] text-4xl capitalize font-bold">
            Why Choose us
          </h1>
        </div>
        <p className="text-base w-1/2 max-md:w-full my-5">
          Get lightning-fast response speeds, strong reliability, and
          professional solutions that generate long-term value of everything you
          require, exactly when you need it.
        </p>
        <section className="flex flex-col max-md:mt-6 items-center md:flex-row gap-x-10 justify-between">
          <div className="h-[615px] w-full max-w-[615px] rounded-2xl overflow-hidden">
            <img
              src="/choose.jpg"
              alt="choose"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full  space-y-4 mt-3 max-md:mt-6">
            {data.map((item, index) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-90px" });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full gap-x-5 flex "
                >
                  <p className="whitespace-nowrap mt-1 text-sm font-semibold">
                    Step 0{index + 1}
                  </p>
                  <div className="w-10 flex justify-center mt-2 h-full ">
                    <img src="/BULLET.svg" alt="bullet" className="h-full" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <p>
                      <span className="font-semibold">Why it matters:</span>{" "}
                      {item.context}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chooseus;
