import React from 'react'
import { AiOutlineBgColors } from '../icons'
import { Color } from '../components'
import { motion } from 'framer-motion'
function ColorSelecter ({}) {
  return (
    <div className='w-225 h-8 flex flex-row gap-3 cursor-pointer'>
      <motion.div
        whileHover={{
          rotateX: 180,
          transition: {
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 1
        }}
        className='rounded-full bg-lightSideBar dark:bg-sidebarColor px-1 py-1 flex justify-center items-center'
      >
        <AiOutlineBgColors className='text-blue-700 text-3xl' />
      </motion.div>
      <div className={`hidden flex-row gap-2 items-center justify-center`}>
        <Color color={'bg-orange-500'} />
        <Color color={'bg-pink-500'} />
        <Color color={'bg-blue-500'} />
      </div>
    </div>
  )
}

export default ColorSelecter
