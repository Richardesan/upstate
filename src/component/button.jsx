import React from 'react'

const Button = ({text, logo}) => {
  return (
    <div className=' flex justify-center gap-x-3 items-center hover:scale-105 active:scale-95 transition-all duration-100  rounded-md cursor-pointer  py-3 px-10 bg-primaryCol w-fit max-md:w-full max-sm:py-3 '>
        <p className='text-base dm-sans-semibold max-sm:text-base'>{text}</p>
        {logo && <img src={logo} />}
    </div>
  )
}

export default Button