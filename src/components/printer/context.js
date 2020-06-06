import React from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

export function PrinterContextProvider({ children }) {
  const [value, setValue] = useState('fffff')
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  )
}
export function usePrinterContext() {
  return useContext(Context)
}

PrinterContextProvider.propTypes = {
  children: PropTypes.element,
}
