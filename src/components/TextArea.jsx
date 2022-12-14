import React from 'react'

function TextArea (props) {
  return (
    <div className='flex flex-col gap-4 '>
      <label
        htmlFor=''
        className='text-md md:text-lg text-black/70 dark:text-white/70 font-semibold'
      >
        {props.label}
      </label>
      <textarea
        type={props.type}
        className='w-full h-[6rem] bg-lightSideBar dark:bg-white/10 resize-none text-black dark:text-white'
        {...props}
        onChange={(e)=>{
          e.preventDefault()
          props.state(e.target.value)
        }}
      ></textarea>
    </div>
  )
}

export default TextArea
