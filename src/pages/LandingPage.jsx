import React, { useContext } from 'react'
import { AiFillGithub, AiFillLinkedin } from '../icons'
import Typical from 'react-typical'
import { ReactButton } from '../components'
import profile from '../assets/portfolio-profile.jpg'
import Portfolio_Context from '../context'
import { motion } from 'framer-motion'
function LandingPage ({ setOpen, open, setSelect, selectTag }) {
  const { color_change, setNavigation } = useContext(Portfolio_Context)
  const NavigateAbout = () => {
    setNavigation('About')
    setSelect('About')
  }
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='scroller p-1 md:p-4 w-screen md:w-full md:max-w-full h-screen'
    >
      <div
        className={`px-[.5rem] md:px-3 py-1 md:py-0 text-${color_change} w-full h-full grid grid-cols-1 md:grid-cols-[70%,30%]`}
      >
        {/* Name writing section  */}
        <div className='w-full md:max-w-[600px] h-auto flex flex-col items-center justify-center gap-5'>
          <div className='w-full flex flex-wrap justify-center items-center mt-4 md:mt-0'>
            <p className='dark:text-white/80 text-black/80 font-normal tracking-wide font-[oswald] text-xl md:text-2xl'>
              Hello , my name is{' '}
              <span className={`Display text-${color_change}`}>Adarsh k</span>{' '}
            </p>
          </div>
          <div className='w-full flex flex-col gap-5 md:gap-3 justify-center items-center'>
            <p className='dark:text-white/80 text-black/80 font-normal tracking-wider font-[oswald] text-xl md:text-3xl'>
              I'm a
            </p>
            <span
              className={`Display text-${color_change} font-bold text-xl md:text-2xl`}
            >
              <Typical
                steps={[
                  'Web Developer',
                  3000,
                  'Figma Designer',
                  3000,
                  'Web Designer',
                  3000
                ]}
                loop={5}
                wrapper='p'
              />
            </span>{' '}
          </div>
          <div className='w-full flex flex-col md:flex-row gap-4 md:gap-10 mt-6'>
            <ReactButton
              animate={true}
              text='Resume'
              bg={`bg-${color_change && color_change}`}
              hover='hover:dark:bg-white hover:bg-black/80'
              txt='text-white/80 dark:group-hover:text-black/80 group-hover:text-white/80'
              Link='https://drive.google.com/file/d/1-L2wQcbVmZRDpfPiU3ynYBJwGyb8Npma/view?usp=share_link'
            />
            <ReactButton
              text='More About'
              bg='bg-white/60 dark:bg-darkBgColor'
              hover='hover:dark:bg-blue-500 hover:bg-blue-500'
              txt='text-blue-500'
              onClickFn={NavigateAbout}
              Link={false}
            />
          </div>

          <div className='w-full flex flex-wrap justify-center items-center mt-5 md:mt-14'>
            <p className='text-gray-500 dark:text-gray-400  font-normal tracking-widest font-[oswald] text-sm'>
              im a extensive developer with self learning.{' '}
              <span className='font-[oswald] tracking-widest'>
                {' '}
                Improving My Skills Through Lots of My Projects.
              </span>
            </p>
          </div>
          <div className='flex gap-5 items-center justify-center'>
            <p className='text-black dark:text-white text-lg'>
              <a href='https://github.com/adarsh-k27' target={'_blank'}>
                <AiFillGithub />
              </a>
            </p>
            <p className='text-sky-800 dark:text-sky-400 text-lg'>
              <a href='https://www.linkedin.com/in/adarshkradhakrishnan/' target={'_blank'}>
                <AiFillLinkedin />
              </a>
            </p>
          </div>
        </div>
        {/* image section */}
        <motion.div
          transition={{
            duration: 0.8
          }}
          className='hidden w-full max-w-[210px] h-full md:flex items-center justify-center ml-7 mt-5'
        >
          <img
            src={profile}
            alt='my self'
            srcset=''
            className='dark:bg-opacity-80 dark:opacity-80 w-full h-[65%] dark:h-[90%] object-cover '
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LandingPage
