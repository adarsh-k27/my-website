import React, { useContext } from 'react'
import Portfolio_Context from '../context'

function ServiceView ({ data }) {
  const {color_change}=useContext(Portfolio_Context)
  return (
    <div className='md:ml-6 px-1 md:w-[90%] py-[.5rem] h-full flex flex-col gap-5 items-center justify-center bg-opacity-20 bg-lightSideBar dark:bg-white/10 rounded-lg'>
      <p className='text-2xl md:text-3xl '>{data.icon}</p>
      <h2 className={`text-${color_change} font[oswald] font-semibold md:font-bold text-md md:text-xl`}>
        {data.Title}
      </h2>
      <div className='px-1'>
        <h3 className='text-black/70 dark:text-white/90 font[oswald] font-normal text-sm md:text-md leading-7 tracking-wider'>
          {data.Desc}
        </h3>
      </div>
    </div>
  )
}

export default ServiceView
