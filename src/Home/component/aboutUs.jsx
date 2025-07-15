import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div
      className="h-[530px]  flex items-center bg-black/40"
      style={{
        backgroundImage: 'url("/aboutus.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
>



        {/* Content */}
        <section className="relative z-30  px-28 space-y-4 max-w-4xl max-md:w-full max-md:px-4 max-lg:px-10 w-full">
          <p className="text-4xl font-bold max-md:text-3xl">About us</p>
          <div className="max-w-7xl text-base w-full mt-6 text-black font-medium">
            At Upstate Electrical Systems LLC, we provide reliable, top-quality
            electrical services across Upstate South Carolina. Fully licensed
            and insured, we specialize in both residential and commercial
            work—from new construction wiring to panel upgrades, repairs, and
            emergency troubleshooting.<br></br> 
            <p className="mt-5">We’re committed to safety, efficiency,
            and long-lasting results. Whether you’re building a new home,
            updating an older property, or need help in a pinch, our team is
            available 24/7 to get the job done right.</p>
          </div>
          <p className="text-white text-xl font-semibold mt-2 max-md:text-lg">Contact us</p>
          <div className=" p-3 rounded-full flex items-center gap-x-3 bg-white w-fit">
            <div className="w-11 max-md:w-9"  >
              <a href="https://www.facebook.com/share/16dCazSr9f/?mibextid=wwXIfr" target="_blank">
            <img src="/Facebook.svg" className="w-full hover:scale-105 active:scale-95 transition-all cursor-pointer" />

              </a>

            </div>
            <div className="w-11 max-md:w-9" >
                <a
        href="mailto:Upstateelectricalsystemsllc@gmail.com"
        target="_blank"
      >
            <img src="/mail.svg" className="w-full hover:scale-105 active:scale-95 transition-all cursor-pointer" />

      </a>

            </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
