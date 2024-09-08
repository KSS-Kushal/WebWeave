"use client";
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react'

const CustomLayout = ({children}) => {
  return (
    <ThemeProvider children={children}></ThemeProvider>
  )
}

export default CustomLayout