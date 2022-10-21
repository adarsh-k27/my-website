import React from 'react'

function IconBox ({ icon, text }) {
  return (
    <div className='w-full h-16 md:h-24 px-2 rounded-lg flex justify-center items-center gap-5 bg-lightSideBar dark:bg-white/10 hover:bg-black/25 hover:dark:bg-white/20 '>
      <p className='text-lg md:text-2xl text-black/50 dark:text-white/80'>
        {icon}
      </p>
      <p className='font-[oswald] text-md md:text-lg text-black dark:text-white font-semibold md:font-bold tracking-wider'>
        {text}
      </p>
    </div>
  )
}

export default IconBox
