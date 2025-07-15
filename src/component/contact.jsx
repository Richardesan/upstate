import React from 'react'

const Contact = () => {
  return (
      <div className=" flex items-center max-md:px-4 max-lg:px-10 justify-center bg-[linear-gradient(180deg,rgba(151,235,244,0.9)_-38.72%,rgba(88,137,142,0.9)_103.74%)] h-[23rem]">
        <div className="max-w-2xl  mx-auto">
          <h1 className="text-4xl font-bold max-md:text-3xl">Ready to get started?</h1>
          <p className="text-xl mt-2 max-md:text-base font-semibold text-black/70 w-10/12 max-md:w-full">
            Schedule your appointment today and take the first step toward a
            safer, more efficient home.
          </p>
           <p className="text-white text-base font-bold mt-2">Contact  us</p>
          <div className=" p-2 rounded-full flex items-center gap-x-3 bg-white w-fit mt-4">
            <div className="w-9" >
              <a href="https://www.facebook.com/share/16dCazSr9f/?mibextid=wwXIfr" target="_blank">
            <img src="/Facebook.svg" className="w-full hover:scale-105 active:scale-95 transition-all cursor-pointer" />
              
              </a>

            </div>
            <div className="w-9" >
               <a
        href="mailto:Upstateelectricalsystemsllc@gmail.com"
        target="_blank"
      >
            <img src="/mail.svg" className="w-full hover:scale-105 active:scale-95 transition-all cursor-pointer" />

      </a>

            </div>
           </div>
        </div>
      </div>
  )
}

export default Contact