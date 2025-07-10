import React from "react";
import Chooseus from "./component/chooseus";
import Contact from "../../component/contact";

const About = () => {
  // Scroll to top on mount

  return (
    <div>
      <section className="h-[45rem] max-md:h-screen px-28 max-lg:px-10 max-md:px-4 relative">
        <img
          src="/services.jpg"
          alt="services"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#0214198C]" />

        <div className="relative z-10 flex flex-col text-white justify-center max-md:w-full w-8/12 text-xl  h-full">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
          <div className="space-y-5 mt-9 max-md:text-lg max-md:space-y-4">
            <p>
              At Upstate Electrical Systems LLC, we provide reliable,
              top-quality electrical services across Upstate South Carolina.
              Fully licensed and insured, we specialize in both residential and
              commercial work—from new construction wiring to panel upgrades,
              repairs, and
            </p>
            <p>
              emergency troubleshooting. We’re committed to safety, efficiency,
              and long-lasting results. Whether you’re building a new home,
              updating an older property, or need help in a pinch, our team is
              available 24/7 to get the job done right.
            </p>
            <p>
              With a strong focus on customer satisfaction and attention to
              detail, we take pride in serving our community with dependable,
              professional electrical solutions. Choose Upstate Electrical
              Systems LLC—where quality work meets peace of mind.
            </p>
          </div>
        </div>
      </section>
      <Chooseus />
      <Contact />
    </div>
  );
};

export default About;
