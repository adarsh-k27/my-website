import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineBgColors } from '../icons'
import { Colors } from '../components'
import { motion } from 'framer-motion'
import Portfolio_Context from '../context'
function ColorSelecter ({ setShow, show }) {
  const { color_change } = useContext(Portfolio_Context)
  const [colorChanged, setColorChanged] = useState(false)

  return (
    <div
      className={`w-225 h-6 flex flex-row gap-3 cursor-pointer rounded-full `}
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
        <AiOutlineBgColors
          className={` ${
            color_change ? `text-${color_change}` : `text-red-500`
          } text-xl`}
        />
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
        className={`${!show &&
          'hidden'} flex flex-col gap-1 items-center justify-center`}
      >
        <p className='text-[.7rem] font-semibold dark:text-white text-black'>
          Theme Color
        </p>
        <div className='flex gap-1'>
          <Colors color={'red-500'} bg={'bg-red-500'} />
          <Colors color={'blue-500'} bg={'bg-blue-500'} />
        </div>
      </motion.div>
    </div>
  )
}

export default ColorSelecter
