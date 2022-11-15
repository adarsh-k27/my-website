import React from 'react'
import { AiFillCaretLeft,AiFillCaretRight } from '../icons'

function ScrollDirections({setScrollDir,ScrollDir}) {

  return (
    <div className='flex gap-3  items-center justify-start'>
        <AiFillCaretLeft className='dark:text-white/70 text-black/70 text-xl cursor-pointer hover:dark:text-white hover:text-black' 
        onClick={(e)=>{
            e.preventDefault()
            setScrollDir(ScrollDir-300)
        }}
        />
        <AiFillCaretRight className='dark:text-white/70 text-black/70 text-xl cursor-pointer hover:dark:text-white hover:text-black' 
        onClick={(e)=>{
            e.preventDefault()
            setScrollDir(ScrollDir+300)
        }}
        />
    </div>
  )
}

export default ScrollDirections