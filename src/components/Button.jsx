import React from 'react'
import { motion } from 'framer-motion'
function Button ({ bg, hover, text, txt, animate,onClickFn }) {
  const ButtonVariants = {
    hover: {
        scale:1.1,
        transition:{
            yoyo:10,
            duration:0.2
        }
      }
  }
  return (
    <motion.div
    variants={animate && ButtonVariants}
      whileHover={"hover"}
      onClick={(e)=>{
        onClickFn(e)
      }}
      className={`w-full h-full flex justify-center md:justify-start px-2 py-[.3rem] md:py-[.8rem] ${bg} ${hover} group`}
    >
      <button className={`font-semibold group-hover:text-white ${txt} `}>
        {text}
      </button>
    </motion.div>
  )
}

export default Button
