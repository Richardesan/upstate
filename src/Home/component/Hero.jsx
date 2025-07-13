import React from 'react';

const Hero = () => {
    const handleCall = () => {
    window.location.href = "tel:+18645809795";
  };
  return (
<div
      className="h-screen flex items-end bg-black/40"
      style={{
        backgroundImage: 'url("/heimg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
>
<div className='px-28 h-[65%] max-md:px-4 max-lg:px-10 max-md:pb-4 flex flex-col justify-between pb-7'>
      {/* Main Content */}
      <section className="relative z-30  space-y-4 max-w-4xl w-full  ">
        <div className="text-white text-5xl max-md:text-3xl font-bold">
         Licensed and insured <br />
          <span className="text-[#99EFF8]">Electrical Services</span> in <br />
          Upstate, SC
        </div>
        <p className="max-w-xl w-full mt-1 text-white text-base">
          Licensed and trusted, Upstate Electrical Systems LLC delivers safe,
          high-quality solutions for homes across Chesnee and surrounding areas.
        </p>
        {/* <div className="bg-white p-3 gap-x-10 max-md:text-sm rounded-full flex items-center w-fit">
          <p className="font-semibold">Call us</p>
          <img src="/call.svg" className='max-md:w-8'/>
        </div> */}
      </section>
      <article className='flex gap-x-5  max-sm:gap-x-3 font-bold max-md:text-xs'>
        <div onClick={handleCall} className='text-primaryCol w-1/2 max-sm:w-full p-3 max-sm:p-2 md bg-secondaryCol rounded-md   flex items-center gap-x-3  hover:scale-105 active:scale-95 transition-all'>
          <img src='/elelctric.svg' alt='electric' />
          <p>Emergency Services</p>
        </div>
            {/* <div className='text-primaryCol p-3  max-sm:p-2 bg-secondaryCol rounded-md w-full  flex items-center gap-x-3 hover:scale-105 active:scale-95 transition-all'>
          <img src='/secure.svg' alt='electric' />
          <p>Insured</p>
        </div> */}
      </article>
     
</div>

    </div>
  );
};

export default Hero;
