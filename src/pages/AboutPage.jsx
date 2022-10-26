import React, { useContext } from 'react'
import { Certificate, ReactButton, Skill } from '../components'
import Portfolio_Context from '../context'
import {
  AiFillHtml5,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaReact,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  AiFillGithub,
  SiFirebase
} from '../icons'
import { motion } from 'framer-motion'
function AboutPage () {
  const { color_change, setNavigation } = useContext(Portfolio_Context)
  const ToHireMe = () => {
    setNavigation('HireMe')
  }

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ delay: 0.3 }}
      className='scroller w-screen md:w-full  md:h-full grid grid-cols-1 md:grid-cols-[60%,40%] gap-4 md:gap-0 py-[1.3rem] md:py-2'
    >
      {/* About Section */}
      <div className='px-[.5rem] md:px-2'>
        <div className='mt-8 md:mt-0'>
          <h1
            className={`w-full  text-black/70 dark:text-white/80 text-xl md:text-xl font-[oswald] tracking-wider`}
          >
            About Me
          </h1>
          <div className={`w-[3rem] h-[2px] bg-${color_change}`}></div>
          <div className={`w-[2rem] h-[1px] bg-${color_change} mt-1`}></div>
        </div>

        {/* About Me */}
        <div className='h-auto flex flex-col gap-6 mt-4 md:mt-8'>
          <h3 className='text-black/80 dark:text-white/80 font-bold text-md md:text-lg tracking-wider'>
            I'm Adarsh and{' '}
            <span className={`text-${color_change}`}>Web Developer</span>
          </h3>

          <p className='text-black/70 dark:text-white/60 font-normal text-md leading-8 tracking-wider'>
            I'm a self-taught web developer with experience in designing new
            features from ideation to production, implementation of wireframes
            and design flows into high performance software applications.I'm
            curious and enthusiastic in learning new things.
          </p>
          <ReactButton
            animate={true}
            text='Hire Me'
            bg={`bg-${color_change && color_change}`}
            hover='hover:dark:bg-white/80 hover:bg-black/80'
            txt='text-white/80 dark:group-hover:text-black/80 group-hover:text-white/80'
            onClickFn={ToHireMe}
          />
        </div>
        <div className='w-full mt-3 md:mt-9 flex flex-row items-center justify-center gap-4'>
          <Certificate text={'computer degree certificate'} />
          <Certificate text={'zen class mern stack certificate'} />
        </div>
      </div>
      {/* Skill section */}
      <div className='w-full h-auto px-[.5rem] md:px-0'>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
          <h1 className=' mt-3 md:mt-0w-full max-w-[5rem] text-md  md:text-lg font-[oswald] md:ml-9 text-black/80 dark:text-white/80 tracking-wider'>
            My Skills
          </h1>

          <div className='w-auto h-full flex flex-wrap gap-2 mt-3 md:mt-5 items-center md:items-start justify-center md:justify-items-start'>
            <Skill
              icon={<FaReact className='text-red-500 text-3xl' />}
              text={'REACT'}
              percentage={'95%'}
            />
            <Skill
              icon={<FaNodeJs className='text-green-500 text-3xl' />}
              text={'NODE'}
              percentage={'95%'}
            />
            <Skill
              icon={<SiMongodb className='text-green-400 text-3xl' />}
              text={'MONGODB'}
              percentage={'90%'}
            />
            <Skill
              icon={<SiExpress className='text-black/50 text-3xl' />}
              text={'Express'}
              percentage={'95%'}
            />
            <Skill
              icon={<SiRedux className='text-violet-500 text-3xl' />}
              text={'REDUX'}
              percentage={'95%'}
            />
            <Skill
              icon={<AiFillHtml5 className='text-red-500 text-3xl' />}
              text={'HTML&CSS'}
              percentage={'100%'}
            />
            <Skill
              icon={<SiJavascript className='text-yellow-300 text-3xl' />}
              text={'JS'}
              percentage={'98%'}
            />

            <Skill
              icon={
                <SiFirebase className='text-red-400 dark:text-white text-3xl' />
              }
              text={'FIREBASE'}
              percentage={'95%'}
            />
            <Skill
              icon={<SiTailwindcss className='text-sky-400 text-3xl' />}
              text={'TAILWIND'}
              percentage={'95%'}
            />
            <Skill
              icon={<FaBootstrap className='text-violet-400 text-3xl' />}
              text={'BOOTSTRAP'}
              percentage={'95%'}
            />
            <Skill
              icon={<AiFillGithub className='text-black text-3xl' />}
              text={'GIT'}
              percentage={'95%'}
            />
            <Skill
              icon={<FaFigma className='text-sky-600 text-3xl' />}
              text={'FIGMA'}
              percentage={'95%'}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
