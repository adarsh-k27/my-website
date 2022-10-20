import React, { useContext } from 'react'
import { ReactButton } from '../components'
import Portfolio_Context from '../context'

function AboutPage () {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <div className='w-screen md:w-full h-screen md:h-full grid grid-cols-1 md:grid-cols-[60%,40%] py-[1.3rem] md:py-2'>
      {/* About Section */}
      <div className='px-[.5rem] md:px-2'>
        <h1
          className={`w-full text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
        >
          About Me
        </h1>
        <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
        <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
        {/* About Me */}
        <div className='h-auto flex flex-col gap-6 mt-4 md:mt-8'>
          <h3 className='text-black/80 dark:text-white/80 font-bold text-md md:text-lg tracking-wider'>
            I'm Adarsh and{' '}
            <span className={`text-${color_change}`}>Web Developer</span>
          </h3>

          <p className='text-black/70 dark:text-white/60 font-normal text-md leading-8 tracking-wider'>
            I'm a self-taught web developer with experience in designing new
            features from ideation to production, implementation of wireframes
            and design flows into high performance software applications.I'm
            curious and enthusiastic in learning new things.
          </p>
          <ReactButton
            animate={true}
            text='Hire Me'
            bg={`bg-${color_change && color_change}`}
            hover='hover:dark:bg-white/80 hover:bg-black/80'
            txt='text-white/70 dark:group-hover:text-black/80 group-hover:text-white/80'
          />
        </div>
      </div>
      <h1 className='text-white'>Skill section</h1>
    </div>
  )
}

export default AboutPage
