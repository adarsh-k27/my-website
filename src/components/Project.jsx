import React from 'react'
import ProjectDesc from './ProjectDesc'
import { AiFillGithub, AiOutlineEye } from '../icons'

function Project ({ data }) {
  return (
    <div
    onScroll={"25rem"} 
    className='w-full relative  md:w-300 h-[370px] min-w-300 md:min-w-300 flex flex-col gap-2 bg-lightSideBar bg-opacity-60 dark:bg-opacity-100 dark:bg-white/10 py-[.5rem] md:py-[1rem] rounded-md'>
      <img
        src={data.Image && data.Image}
        alt=''
        className='w-full h-[9rem] md:h-[10rem] object-cover'
      />
      <ProjectDesc data={data} />;
      <div className='absolute bottom-3 z-50 flex items-center justify-between w-full'>
        <div className='relative flex flex-col gap-1 items-center justify-center group'>
          <p className='dark:text-white text-black text-lg md:text-2xl'>
            <a href={data.git} target='_blank'>
              <AiFillGithub />
            </a>
          </p>
          <p className='hidden group-hover:block dark:text-white/70 text-black/70 terxt-sm md:text-[.6rem] absolute -bottom-4 left-0'>
            FrontEnd
          </p>
        </div>
        {data.backend && (
          <div className='relative flex flex-col gap-1 items-center justify-center group'>
            <p className='dark:text-white text-black text-lg md:text-2xl'>
              <a href={data.backend} target='_blank'>
                <AiFillGithub />
              </a>
            </p>
            <p className='hidden group-hover:block dark:text-white/70 text-black/70  text-[.6rem] absolute -bottom-4 '>
              BackEnd
            </p>
          </div>
        )}
        <div className='relative flex flex-col gap-1 items-center justify-center group '>
          <p className='text-black dark:text-white'>
            <a href={data.view} target='_blank'>
              {' '}
              <AiOutlineEye className='text-lg md:text-2xl' />
            </a>
          </p>
          <p className='hidden group-hover:block dark:text-white/70 text-black/70 text-[.6rem] absolute -bottom-3'>
            Host
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
