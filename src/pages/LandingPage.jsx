import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Typical from 'react-typical'
import {  ReactButton } from '../components'

import Portfolio_Context from '../context'
function LandingPage ({ setOpen, open }) {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <div className='p-1 md:p-4 w-screen md:w-full '>
      <div className='w-full md:hidden flex flex-row justify-between gap-1'>
        <AiOutlineMenu
          className='text-gray-700 text-md'
          onClick={() => {
            setOpen(true)
          }}
        />
        <p className='text-xl font-[Dancing Script] font-extralight dark:text-white/50 text-black/50  w-auto ml-[.8REM]'>
          <span
            className={`text-${color_change} font-thin text-xl font-[Oswald]`}
          >
            A
          </span>
          darsh
        </p>
      </div>
      <div
        className={`px-[.5rem] md:px-3 py-1 md:py-0 text-${color_change} w-full h-full grid grid-cols-1 md:grid-cols-[70%,30%]`}
      >
        {/* Name writing section  */}
        <div className='w-full md:max-w-[600px] h-auto flex flex-col items-center justify-center gap-5'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <p className='dark:text-white/80 text-black/80 font-normal tracking-wide font-[oswald] text-xl md:text-2xl'>
              Hello , my name is{' '}
              <span className={`Display text-${color_change}`}>Adarsh k</span>{' '}
            </p>
          </div>
          <div className='w-full flex flex-col gap-5 md:gap-3 justify-center items-center'>
            <p className='dark:text-white/80 text-black/80 font-normal tracking-wider font-[oswald] text-xl md:text-3xl'>
              I'm a
            </p>
            <span className={`Display text-${color_change} font-bold text-xl md:text-2xl`}>
              <Typical
                steps={[
                  'Web Developer',
                  3000,
                  'Figma Designer',
                  3000,
                  'Web Designer',
                  3000
                ]}
                loop={5}
                wrapper='p'
              />
            </span>{' '}
          </div>
          <div className='w-full flex flex-col md:flex-row gap-4 md:gap-10 mt-6'>
            <ReactButton
              animate={true}
              text='Resume'
              bg={`bg-${color_change&&color_change}`}
              hover='hover:dark:bg-white hover:bg-black/80'
              txt='text-white/70 dark:group-hover:text-black/80 group-hover:text-white/80'
            />
            <ReactButton
              text='More About'
              bg='bg-white/60 dark:bg-darkBgColor'
              hover='hover:dark:bg-blue-500 hover:bg-blue-500'
              txt='text-blue-500'
            />
          </div>

          <div className='w-full flex flex-wrap justify-center items-center mt-14'>
            <p className='text-gray-500 dark:text-gray-400  font-normal tracking-widest font-[oswald] text-sm'>
              im a extensive developer with self learning.{' '}
              <span className='font-[oswald] tracking-widest'>
                {' '}
                Improving My Skills Through Lots of My Projects.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
