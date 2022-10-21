import React, { useState, useContext } from 'react'
import ShortService from '../components/ShortService'
import { MyServices } from '../assets/data'
import { ServiceView } from '../components'
import Portfolio_Context from '../context'
import { motion } from 'framer-motion'
function ServicePage () {
  const [View, setView] = useState(0)
  const { color_change } = useContext(Portfolio_Context)
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='scroller relative w-screen md:w-full  md:h-full grid grid-cols-1 md:grid-cols-[60%,40%] gap-4 md:gap-0 py-[1.3rem] md:py-[2.6rem] mt-10 '
    >
      {/* phone view */}

      <div className='px-[.5rem] md:px-2 flex flex-col gap-8'>
        <div className='-mt-10'>
          <h1
            className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
          >
            Services
          </h1>
          <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
          <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
        </div>
        {/* Mobile view */}
        <div className='md:hidden flex flex-col gap-8 items-center justify-center'>
          {MyServices &&
            MyServices.map(service => <ServiceView data={service} />)}
        </div>
        {/* large view */}
        <div className='hidden md:block'>
          <ServiceView data={MyServices && MyServices[View]} />
        </div>
      </div>
      <div className='hidden md:flex flex-wrap gap-4 w-full h-[80%] items-center justify-center before:block before:absolute before:w-1 before:h-[50%] before:left-[32.8rem] before:bg-red-600'>
        {MyServices &&
          MyServices.map((service, index) => (
            <ShortService
              icon={service.icon}
              text={service.Title}
              index={index}
              View={View}
              setView={setView}
            />
          ))}
      </div>
    </motion.div>
  )
}

export default ServicePage
