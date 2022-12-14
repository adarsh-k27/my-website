import React, { useContext } from 'react'
import PortFolio_Context from '../context'
function Color ({ color,bg }) {
  const { setColor_Change ,color_change} = useContext(PortFolio_Context)
  return (
    <div
      className={`w-5 h-5 rounded-full cursor-pointer ${bg} z-50`}
      onClick={()=>{
        if(color_change !== color){
          setColor_Change(color)
        }
      }}
    ></div>
  )
}

export default Color
