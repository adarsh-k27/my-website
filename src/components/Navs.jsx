import React, { useState, useEffect } from 'react'

function Navs ({ icon, name, select, setSelect }) {
  return (
    <div
      className='w-full py-[.5rem] flex gap-5 items-center cursor-pointer group'
      key={name}
      onClick={e => {
        e.preventDefault()
        if (select !== name) {
          setSelect(name)
        }
      }}
    >
      <p>{icon}</p>
      <p
        className={`font-medium md:font-bold font-serif text-sm md:text-md group-hover:text-black/80 dark:group-hover:text-white/80 ${
          select == name ? 'text-red-500' : ' text-black/70 dark:text-white/70'
        }`}
      >
        {name}
      </p>
    </div>
  )
}

export default Navs
