import React from 'react'

function Feature ({ text }) {
  return (
    <div className='h-auto w-auto rounded-sm text-xs md:text-xs font-[oswald] dark:bg-black/30 bg-black/50 flex items-center px-[.2rem] flex-row gap-2 md:gap-3'>
      <p className='text-blue-300 w-full '>{text}</p>
    </div>
  )
}

export default Feature
