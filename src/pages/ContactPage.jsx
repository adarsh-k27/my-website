import React from 'react'
import { FaPhoneAlt, AiOutlineMail, MdLocationOn } from '../icons'
import { IconBox, TextArea, TextField } from '../components'

function ContactPage () {
  return (
    <div className='relative w-screen md:w-full  md:h-full grid grid-cols-1 md:grid-cols-[40%,60%] items-center justify-center px:1 md:px-2 '>
      <div className='flex flex-col gap-5 justify-center items-center md:after:block md:after:absolute md:after:w-1 md:after:h-[50%] md:after:bg-white md:after:left-[42%]'>
        <IconBox icon={<FaPhoneAlt />} text={'9778498934'} />
        <IconBox icon={<AiOutlineMail />} text={'adarshkdev27@gmail.com'} />
        <IconBox icon={<MdLocationOn />} text={'Kannur, Kerala'} />
      </div>
      <div className='flex flex-col gap-6 px-1 md:pl-2'>
        <TextField label={'Your Name'} type={'text'} />
        <TextField label={'Your Email'} type={'email'} />
        <TextArea label={'Message'} type={'text'} rows={'8'}  />
      </div>
    </div>
  )
}

export default ContactPage
