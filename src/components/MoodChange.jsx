import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiSun, MdModeNight } from '../icons'

function MoodChange ({}) {
  const [lightMode, setLightMode] = useState(false)
  return (
    <motion.div
      whileTap={{
        scale: 1.1
      }}
      className='w-7 h-6 flex justify-center items-center rounded-full cursor-pointer bg-lightSideBar dark:bg-sidebarColor'
      onClick={() => {
        setLightMode(prev => !prev)
      }}
    >
      {lightMode ? (
        <MdModeNight className='text-xl text-darkBgColor dark:text-lightBgColor' />
      ) : (
        <BiSun className='text-xl text-darkBgColor dark:text-lightBgColor' />
      )}
    </motion.div>
  )
}

export default MoodChange
