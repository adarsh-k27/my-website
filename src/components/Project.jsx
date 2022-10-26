import React from 'react'
import ProjectDesc from './ProjectDesc'
function Project ({ data }) {
  return (
    <div className='w-full  md:w-300 h-340 min-w-300 md:min-w-300 flex flex-col gap-2 bg-lightSideBar bg-opacity-60 dark:bg-opacity-100 dark:bg-white/10 py-[.5rem] md:py-[1rem] rounded-md'>
      <img
        src={data.Image && data.Image}
        alt=''
        className='w-full h-[10rem] md:h-[10rem] object-cover'
      />
      <ProjectDesc data={data} />
    </div>
  )
}

export default Project
