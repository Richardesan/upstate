import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceItem = ({ reverse, title, description, image }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-[#556A7D4D] p-5 flex gap-x-5 max-md:p-3  max-md:flex-col-reverse overflow-hidden ${
        reverse ? "flex-row-reverse" : ""
      } items-center justify-between mt-10 rounded-2xl`}
    >
      <div className="max-w-2xl w-full">
        <p className="text-xl max-sm:text-lg font-bold mb-2">{title}</p>
        <p>{description}</p>
          {/* <button className="bg-secondaryCol text-primaryCol px-8 py-2 rounded-md font-bold mt-4  active:scale-90 transition-all">
        View more
      </button> */}
      </div>
      <div className="h-[22rem] w-[30rem] max-sm:h-[15rem] max-md:w-full max-md:mb-4 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="services"
          className="h-full w-full object-cover hover:scale-110 transition-all duration-500"
        />
        
      </div>
    
    </motion.div>
  );
};

const Service = () => {
  return (
    <section className="bg-white p-28 max-md:px-4 max-lg:px-10 max-md:py-12">
      <h1 className="text-4xl font-bold">Our services</h1>
      <p className="max-w-lg font-semibold text-black/70 mt-5 w-full">
        We provide complete electrical services for homes, small businesses, and
        enterprises — from repairs and upgrades to full installations.
      </p>

      <ServiceItem
        title="RESIDENTIAL ELECTRICAL SERVICES"
        description="Upstate Electrical Systems LLC offers comprehensive domestic electrical services for home safety and efficiency, ranging from minor modifications to full overhauls, ensuring clean workmanship and code compliance."
        image="/services.jpg"
      />
      <ServiceItem
        reverse
        title="COMMERCIAL ELECTRICAL SOLUTIONS"
        description="Upstate Electrical Systems LLC offers efficient, scalable commercial electrical solutions, collaborating with business owners, contractors, and property managers to design safe, code-compliant systems for tenant fit-outs, office wiring, and commercial buildouts."
        image="/commerical.jpg"
      />
      <ServiceItem
        title="INDUSTRIAL & ENTERPRISE INSTALLATIONS"
        description="Upstate Electrical Systems LLC offers expert electrical services to manufacturing plants, warehouses, and distribution centers in Upstate South Carolina, ensuring efficiency, safety, and minimal disruption to workflow."
        image="/industrial.jpg"
      />
    </section>
  );
};

export default Service;
