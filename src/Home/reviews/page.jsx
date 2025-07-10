import React from 'react'
import Faq from './component/faq'
import Testimony from './component/testimony'

const Reviews = () => {
  return (
    <div className='p-28 max-lg:px-10 max-md:px-4'>
      <div className="w-11/12 mx-auto">
        <div className="flex items-center gap-x-3">
          <img src="/variables.svg" alt="variables" />
          <h1 className="text-[#021419] text-4xl max-sm:text-3xl capitalize font-bold">
            Our  reviews
          </h1>
        </div>
        <p className="max-w-md w-full mt-6">
          Explore standout projects that showcase the quality, craftsmanship,
          and attention to detail we bring to every job.
        </p>
      </div>
      <Testimony />
      <Faq />
    </div>
  )
}

export default Reviews