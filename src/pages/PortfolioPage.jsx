import React, { useContext } from 'react'
import { Project } from '../components'
import Portfolio_Context from '../context'
import { Projects } from '../assets/data'
import { motion } from 'framer-motion'
function PortfolioPage () {
  const { color_change } = useContext(Portfolio_Context)
  console.log('ppp', Projects)
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='w-screen md:w-full  md:h-auto h-screen flex flex-col gap-3'
    >
      <div className='mt-[3.4rem] md:mt-8 ml-3 md:ml-3'>
        <h1
          className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
        >
          PortFolio
        </h1>
        <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
        <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
      </div>
      <div className='mt-10 md:mt-2 ml-3 w-full flex  scroll-smooth overflow-x-scroll gap-2 md:gap-4 items-center justify-start'>
        {Projects &&
          Projects.map(project => {
            return <Project data={project} />
          })}
      </div>
    </motion.div>
  )
}

export default PortfolioPage
