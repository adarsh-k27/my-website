import React, { useContext, useRef, useEffect } from 'react'
import { Project, ScrollSide } from '../components'
import Portfolio_Context from '../context'
import { Projects } from '../assets/data'
import { motion } from 'framer-motion'
import { useState } from 'react'
function PortfolioPage () {
  const { color_change } = useContext(Portfolio_Context)
  const Scroll = useRef()
  const [ScrollDir, setScrollDir] = useState(0)

  useEffect(() => {
    Scroll.current.scrollLeft = ScrollDir
  }, [ScrollDir])
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='w-screen md:w-full  md:h-auto h-screen flex flex-col gap-3 '
    >
      <div className='mt-[3.4rem] md:mt-8 ml-3 md:ml-3'>
        <div className='flex flex-row w-[50%] z-50 items-center justify-center'>
          <h1
            className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
          >
            PortFolio
          </h1>
          <ScrollSide setScrollDir={setScrollDir} ScrollDir={ScrollDir} />
          <div className='ml-6'>
            <p className='text-white text-[.68rem] tracking-wider'>
              email:sample@gmail.com, pass:sample,
              abhinandh0027@gmail.com,1234567{' '}
            </p>
          </div>
        </div>
        <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
        <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
      </div>
      <div
        ref={Scroll}
        className='mt-10 md:mt-2 ml-3 w-full flex  scroll-smooth overflow-x-scroll gap-2 md:gap-4 items-center justify-start'
      >
        {Projects &&
          Projects.map(project => {
            return <Project data={project} />
          })}
      </div>
    </motion.div>
  )
}

export default PortfolioPage
