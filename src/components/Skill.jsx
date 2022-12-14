import React from 'react'

function Skill ({ icon, text, percentage }) {
  console.log('txt', text)
  return (
    <div className='relative w-[4rem] h-[4.5rem] bg-lightSideBar bg-opacity-50 dark:bg-white/10 flex flex-col gap-2 px-1 hover:bg-lightSideBar hover:bg-opacity-100 hover:dark:bg-white/20 items-center justify-center'>
      <p>{icon}</p>
      <p className='text-black dark:text-white text-[.65rem] font-thin '>
        {text}
      </p>
    </div>
  )
}

export default Skill
