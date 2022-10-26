import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiSun, MdModeNight } from '../icons'

function MoodChange ({ setMode, mode }) {
  const [lightMode, setLightMode] = useState(mode !== 'dark')

  return (
    <motion.div
      whileTap={{
        scale: 1.1
      }}
      className='w-7 h-6 flex justify-center items-center rounded-full cursor-pointer bg-lightSideBar dark:bg-sidebarColor'
      onClick={() => {
        setLightMode(prev => !prev)
        setMode(mode !== 'dark' ? 'dark' : 'light')
      }}
    >
      {lightMode ? (
        <MdModeNight className='text-lg md:text-xl text-darkBgColor dark:text-lightBgColor' />
      ) : (
        <BiSun className='text-lg md:text-xl text-darkBgColor dark:text-lightBgColor' />
      )}
    </motion.div>
  )
}

export default MoodChange
