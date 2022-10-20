import React, { useContext } from 'react'
import { AiOutlineBgColors } from '../icons'
import { Colors } from '../components'
import { motion } from 'framer-motion'
import Portfolio_Context from '../context'
function ColorSelecter ({ setShow, show }) {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <div
      className={`w-225 h-8 flex flex-row gap-3 cursor-pointer rounded-full `}
    >
      <motion.div
        whileHover={{
          rotateX: 180,
          transition: {
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 1.1
        }}
        className='rounded-full bg-lightSideBar dark:bg-sidebarColor px-1 py-1 flex justify-center items-center'
        onClick={() => {
          setShow(prev => !prev)
        }}
      >
        <AiOutlineBgColors className={` text-${color_change} text-xl`} />
      </motion.div>
      <motion.div
        initial={{ right: 0, x: 0, opacity: 0 }}
        animate={{ right: 1, x: 1, opacity: 1 }}
        exit={{
          right: 0,
          x: 0,
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }}
        className={`${!show &&'hidden'} flex flex-row gap-2 items-center justify-center`}
      >
        <Colors color={'orange-400'} />
        <Colors color={'blue-500'} />
        <Colors color={'red-500'} />
      </motion.div>
    </div>
  )
}

export default ColorSelecter
