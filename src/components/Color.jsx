import React from 'react'

function Color ({ color }) {
  return (
    <div
      className={` w-5 h-5 rounded-full cursor-pointer border-white/60  ${color}`}
    ></div>
  )
}

export default Color
