import React, { useContext } from 'react'
import { Features } from '../components'
import Portfolio_Context from '../context'

function ProjectDesc ({ data }) {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <div className='relative w-full h-full flex-col gap-2 overflow-y-scroll'>
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

      </div>
    </div>
  )
}

export default ProjectDesc
