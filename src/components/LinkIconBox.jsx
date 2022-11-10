import React from 'react'

function LinkBox ({ icon, text, type }) {
  return (
    <div className='w-full md:w-[12rem] flex justify-center items-center  h-16 md:h-24 rounded-lg  bg-opacity-50 bg-lightSideBar dark:bg-white/10 hover:bg-lightSideBar hover:dark:bg-white/20 px-[.5rem] '>
      <div className='md:w-full h-full  flex justify-center items-center gap-3'>
        <p className='text-lg md:text-xl text-black/50 dark:text-white/80'>
          {icon}
        </p>
        <a
        target={"_blank"}
          href={`${text}${(type == 'git' && 'adarsh-k27/') ||
            (type == 'linkedin' && '/in/adarshkradhakrishnan')}`}
          className='flex flex-col gap-1 w-full h-full justify-center'
        >
          <h4 className='w-full max-w-[full] font-[oswald] text-[.84rem] text-black dark:text-white font-semibold md:font-bold tracking-wider'>
            {text}
          </h4>

          <h4 className='text-[.84rem] font-[oswald] text-black dark:text-white font-semibold md:font-bold tracking-wider'>
            {(type == 'email' && '@gmail.com') ||
              (type == 'git' && 'adarsh-k27/') ||
              (type == 'linkedin' && '/in/adarshkradhakrishnan')}
          </h4>
        </a>
      </div>
    </div>
  )
}

export default LinkBox
