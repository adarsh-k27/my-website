import React from 'react'
import { motion } from 'framer-motion'
function ShortService ({ text, icon, index, View, setView }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      onClick={() => {
        setView(index)
      }}
      className={`w-[140px] rounded-lg h-[100px] flex flex-col gap-6 items-center justify-center  bg-lightSideBar dark:bg-white/10 hover:bg-black/20  hover:dark:bg-white/20 ${index ==View && 'dark:bg-white/20 dark:w-[160px] w-[160px] dark:h-[110px] h-[110px] bg-black/20'} ease-in-out duration-200 cursor-pointer`}
    >
      <p className='dark:text-white/70 text-black/70 font-sans font-extralight text-xs tracking-wider'>
        {text}
      </p>
      <p className='text-2xl'>{icon}</p>
    </motion.div>
  )
}

export default ShortService
