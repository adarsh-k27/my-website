import React,{useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
function LandingPage ({setOpen,open}) {
  
  return (
    <div className='p-1 md:p-4 w-screen md:w-full '>
      <div className='w-full md:hidden flex flex-row justify-between gap-1'>
        <AiOutlineMenu className='text-gray-700 text-md' onClick={()=>{setOpen(true)}} />
        <p className='text-xl font-[Dancing Script] font-extralight text-white/50 w-auto ml-[.8REM]'>
          <span className='text-red-500 font-thin text-xl font-[Oswald]'>
            A
          </span>
          darsh
        </p>
      </div>
    </div>
  )
}

export default LandingPage
