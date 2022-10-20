import React, { useState } from 'react'
import PortfolioContext from '../context'
function Context_Provider ({ children }) {
  const [color_change, setColor_Change] = useState('red-500')
  const [mode, setMode] = useState('dark')
  return (
    <PortfolioContext.Provider
      value={{
        color_change,
        setColor_Change,
        mode,
        setMode
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export default Context_Provider
