import React from 'react'

function Certification ({ text }) {
  return (
    <div className='w-auto px-1 underline dark:text-white/40'>
      <p className='text-gray-700 font-semibold text-xs md:text-sm md:font-medium font-serif'>{text}</p>
    </div>
  )
}

export default Certification
