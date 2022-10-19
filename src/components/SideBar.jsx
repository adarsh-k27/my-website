import React, { useState } from 'react'
import { Navs } from '../components'
import { motion } from 'framer-motion'
import {
  AiFillHome,
  AiOutlineUser,
  BiArrowBack,
  FaRegHandshake,
  MdOutlineWork
} from '../icons'
function SideBar ({ open, setOpen }) {
  const [selectTag, setSelect] = useState('Home')
  //sm:absolute sm:top-0 sm:left-0  md:block sm:w-[75%]
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      exit={{ x: '100%' }}
      transition={{ delay: 0.8 }}
      className={` ${
        !open ? 'hidden' : 'absolute top-0 left-0 md:w-[219px] w-[63%]'
      } md:block  h-full py-1 md:py-2 px-[1.1rem] md:px-[.5rem] md:pl-2.5 bg-white/60 dark:bg-sidebarColor`}
    >
      <p className='relative hidden md:block text-md md:text-xl font-[Dancing Script] font-extralight dark:text-white/50 text-black/60 w-auto ml-[.8rem] before:block before:absolute before:w-6 before:h-6 before:border-l-2 before:border-t-2 before:-top-1 before:-left-4 before:border-red-500 after:block after:absolute after:w-6 after:h-7 after:border-b-2 after:border-r-2 after:border-red-500 after:left-[3.4rem] after:-bottom-1'>
        <span className='text-red-500 font-thin text-xl md:text-3xl font-[Oswald]'>A</span>
        darsh
      </p>
      <p
        className='cursor-pointer'
        onClick={() => {
          setOpen(false)
        }}
      >
        <BiArrowBack className='block md:hidden dark:text-white/60 text-black/60 text-xl' />
      </p>
      <div className='w-full h-full  flex flex-col gap-[1rem] justify-center'>
        <Navs
          icon={
            <AiFillHome className='text-black/70 dark:text-white/70 text-md ' />
          }
          name='Home'
          select={selectTag}
          setSelect={setSelect}
        />
        <Navs
          icon={
            <AiOutlineUser className='text-black/70 dark:text-white/70 text-md ' />
          }
          name='About'
          select={selectTag}
          setSelect={setSelect}
        />

        <Navs
          icon={
            <FaRegHandshake className='text-black/70 dark:text-white/70 text-md ' />
          }
          name='Service'
          select={selectTag}
          setSelect={setSelect}
        />
        <Navs
          icon={
            <MdOutlineWork className='text-black/70 dark:text-white/70 text-md ' />
          }
          name='PortFolio'
          select={selectTag}
          setSelect={setSelect}
        />
      </div>
    </motion.div>
  )
}

export default SideBar
