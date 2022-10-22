import React from 'react'

function TextFiled (props) {
  console.log("state",props);
  return (
    <div className='flex flex-col gap-4 '>
      <label
        htmlFor=''
        className='text-md md:text-lg text-black/70 dark:text-white/70 font-semibold'
      >
        {props.label}
      </label>
      <input
        type={props.type}
        onChange={e => {
          props.state(e.target.value)
        }}
        className='w-full h-[2rem] bg-lightSideBar dark:bg-white/10  text-black dark:text-white'
      ></input>
    </div>
  )
}

export default TextFiled
