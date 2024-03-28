import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Landing from './Pages/Landing/Landing.jsx'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar.jsx'
const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent', // Set background color with transparency
          backdropFilter: 'blur(10px)',
          // You can override other styles from the original class here
        },
      },
    },
  },
});;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className='app-container'>
        <Navbar />
      <Landing/>
      </div>
      </ThemeProvider>
  )
}

export default App
