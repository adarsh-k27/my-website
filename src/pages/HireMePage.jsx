import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import Portfolio_Context from '../context'
import { TextField, TextArea, ReactButton } from '../components'
import hireme from '../assets/hireme.svg'
import emailJs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'

function HireMePage () {
  const { color_change } = useContext(Portfolio_Context)
  const [budget, setBudget] = useState('')
  const [email, setEmail] = useState('')
  const [job_title, setJobTitle] = useState('')
  const [catogery, setCatogery] = useState('')
  const [job_desc, setJobDesc] = useState('')
  const SendMail = e => {
    e.preventDefault()
    if (
      job_title == false ||
      email == false ||
      job_desc == false ||
      budget == false
    ) {
      //console.log('error')
      return toast.warning('All Field Must Be Fill', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        draggable: true,
        pauseOnHover: false,
        theme: 'colored'
      })
    }
    emailJs
      .send(
        'service_rzhyftd',
        'template_qb7pr2a',
        {
          email,
          job_title,
          job_desc,
          catogery,
          budget
        },
        'xVQ5Px7lJzvPib_gV'
      )
      .then(res => {
        if (res.status == 200) {
          toast.success('Message  Send SuccesFully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: false,
            draggable: true,
            pauseOnHover: false,
            theme: 'colored'
          })
        }
      })
      .catch(error => {
        toast.error('Message Not Send', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          draggable: true,
          pauseOnHover: false,
          theme: 'colored'
        })
        console.log(error)
      })
  }

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
        <TextField label={'Job Title'} type={'text'} state={setJobTitle} />

        <TextArea
          label={'Job Description'}
          type={'text'}
          rows={'8'}
          state={setJobDesc}
        />
        <TextField label={'Your Email'} type={'email'} state={setEmail} />
        <TextField label={'Catogery'} type={'text'} state={setCatogery} />
        <TextField label={'Budget'} type={'text'} state={setBudget} />
        <ReactButton
          text='Send Me'
          bg={`bg-${color_change && color_change}`}
          hover='hover:dark:bg-white/80 hover:bg-black/80'
          txt='text-white/80 dark:group-hover:text-black/80 group-hover:text-white/80'
          onClickFn={SendMail}
        />
      </div>
      <div className='hidden md:flex flex-wrap gap-4 w-full  h-[80%] items-center justify-center '>
        <img src={hireme} className=''></img>
      </div>
      <ToastContainer />
    </motion.div>
  )
}

export default HireMePage
