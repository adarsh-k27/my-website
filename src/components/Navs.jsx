import React, { useContext } from 'react'
import Portfolio_Context from '../context'

function Navs ({ icon, name, select, setSelect }) {
  const { color_change } = useContext(Portfolio_Context)
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
        className={`font-medium md:font-bold font-serif text-sm md:text-md group-hover:text-${color_change} ${
          select == name
            ? `text-${color_change}`
            : ' text-black/70 dark:text-white/70'
        }`}
      >
        {name}
      </p>
    </div>
  )
}

export default Navs
