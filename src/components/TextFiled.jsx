import React from 'react'

function TextFiled ({ label ,type}) {
  return (
    <div className='flex flex-col gap-4 '>
      <label
        htmlFor=''
        className='text-md md:text-lg text-black/70 dark:text-white/70 font-semibold'
      >
        {label}
      </label>
      <input
        type={type}
        className='w-full h-[2rem] bg-lightSideBar dark:bg-white/10  text-black dark:text-white'
      ></input>
    </div>
  )
}

export default TextFiled
