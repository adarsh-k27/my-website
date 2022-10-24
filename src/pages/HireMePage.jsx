import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Portfolio_Context from '../context'
import { TextField, TextArea, ReactButton } from '../components'
import hireme from '../assets/hireme.svg'
function HireMePage () {
  const { color_change } = useContext(Portfolio_Context)
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='scroller relative w-screen md:w-full  md:h-full grid grid-cols-1 md:grid-cols-[70%,30%] items-center justify-center px:1 md:px-2 py-2 md:py-4 gap-5 md:gap-0'
    >
      <div className='px-[.5rem] md:px-2 flex flex-col gap-6 md:pl-2'>
        <div className='md:mt-2 mt-7 ml-3 md:ml-0'>
          <h1
            className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
          >
            Hire Me
          </h1>
          <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
          <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
        </div>
        <TextField label={'Job Title'} type={'text'} />

        <TextArea
          label={'Job Description'}
          type={'text'}
          rows={'8'}
          //state={setMessage}
        />
        <TextField label={'Your Email'} type={'email'} />
        <TextField label={'Catogery'} type={'text'} />
        <TextField label={'Budget'} type={'text'} />
        <ReactButton
          text='Send Me'
          bg={`bg-${color_change && color_change}`}
          hover='hover:dark:bg-white/80 hover:bg-black/80'
          txt='text-white/80 dark:group-hover:text-black/80 group-hover:text-white/80'
          //onClickFn={SendMail}
        />
      </div>
      <div className='hidden md:flex flex-wrap gap-4 w-full  h-[80%] items-center justify-center '>
        <img src={hireme} className=''></img>
      </div>
    </motion.div>
  )
}

export default HireMePage
