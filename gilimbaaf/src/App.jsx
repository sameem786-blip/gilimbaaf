import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Landing from './Pages/Landing/Landing.jsx'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  // ... other theme customizations

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparentbbb', // Set background color with transparency
          // You can override other styles from the original class here
        },
      },
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <>
      <Landing/>
      </>
      </ThemeProvider>
  )
}

export default App
