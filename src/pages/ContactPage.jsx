import React, { useContext } from 'react'
import { FaPhoneAlt, AiOutlineMail, MdLocationOn } from '../icons'
import { IconBox, ReactButton, TextArea, TextField } from '../components'
import Portfolio_Context from '../context'
import { motion } from 'framer-motion'
function ContactPage () {
  const { color_change } = useContext(Portfolio_Context)
  console.log('ccc', color_change)
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='scroller relative w-screen md:w-full  md:h-full grid grid-cols-1 md:grid-cols-[40%,60%] items-center justify-center px:1 md:px-2 gap-5 md:gap-0'
    >
      <div className='flex flex-col gap-6'>
        <div className='md:-mt-10 mt-7 ml-3 md:ml-0'>
          <h1
            className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
          >
            Contacts
          </h1>
          <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
          <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
        </div>
        <div
          className={`flex flex-col gap-5 px-[.5rem] md-px-2 justify-center items-center md:after:block md:after:absolute md:after:w-1 md:after:h-[50%] md:after:bg-darkBgColor md:after:dark:bg-white md:after:left-[42%]`}
        >
          <IconBox icon={<FaPhoneAlt />} text={'9778498934'} />
          <IconBox
            icon={<AiOutlineMail />}
            text={'adarshkdev27'}
            type={'email'}
          />
          <IconBox icon={<MdLocationOn />} text={'Kannur, Kerala'} />
        </div>
      </div>
      <div className='px-[.5rem] md:px-2 flex flex-col gap-6 md:pl-2'>
        <TextField label={'Your Name'} type={'text'} />
        <TextField label={'Your Email'} type={'email'} />
        <TextArea label={'Message'} type={'text'} rows={'8'} />
        <ReactButton
          text='Send Me'
          bg={`bg-${color_change && color_change}`}
          hover='hover:dark:bg-white/80 hover:bg-black/80'
          txt='text-white/70 dark:group-hover:text-black/80 group-hover:text-white/80'
        />
      </div>
    </motion.div>
  )
}

export default ContactPage
