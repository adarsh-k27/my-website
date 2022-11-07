import React, { useContext } from 'react'
import { AiFillGithub, AiOutlineEye } from '../icons'
import { Features } from '../components'
import Portfolio_Context from '../context'

function ProjectDesc ({ data }) {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <div className='w-full h-full flex-col gap-2'>
      <div className=' pl-[.2rem] md:pl-[.5rem] flex flex-wrap gap-2 w-full '>
        {data.Features &&
          data.Features.map(feature => <Features text={feature} />)}
      </div>
      <div className='w-full h-full px-[.3rem] mt-[.5rem] md:px-[.5rem] flex flex-col gap-2 items-center'>
        <h3
          className={`text-${color_change} font-[oswald] text-md tracking-wider md:text-lg`}
        >
          {data?.Title}
        </h3>
        <p className='dark:text-white/50 font-medium text-[.8rem] tracking-wider w-full'>
          {data?.Desc}
        </p>
        <div className='flex items-center justify-between w-full'>
          <div className='relative flex flex-col gap-1 items-center justify-center group'>
            <p className='dark:text-white text-black text-lg md:text-2xl'>
              <a href={data.git} target='_blank'>
                <AiFillGithub />
              </a>
            </p>
            <p className='hidden group-hover:block dark:text-white/70 text-black/70 text-sm text-[.7rem] absolute -bottom-4 left-0'>
              FrontEnd
            </p>
          </div>
          {
            data.backend && <div className='relative flex flex-col gap-1 items-center justify-center group'>
            <p className='dark:text-white text-black text-lg md:text-2xl'>
              <a href={data.backend} target='_blank'>
                <AiFillGithub />
              </a>
            </p>
            <p className='hidden group-hover:block dark:text-white/70 text-black/70 text-sm text-[.7rem] absolute -bottom-4 '>
              BackEnd
            </p>
          </div>
          }
          <div className='relative flex flex-col gap-1 items-center justify-center group '>
            <p className='text-black dark:text-white'>
              <a href={data.view} target='_blank'>
                {' '}
                <AiOutlineEye className='text-lg md:text-2xl' />
              </a>
            </p>
            <p className='hidden group-hover:block dark:text-white/70 text-black/70 text-[.7rem] absolute -bottom-3'>
              Host
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDesc
