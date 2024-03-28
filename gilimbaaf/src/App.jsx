import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Landing from './Pages/Landing/Landing.jsx'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
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
});

const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const circleRef = useRef(null);

  const handleMouseMove = (event) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);

    useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return {
    cursorX,
    cursorY,
    circleRef,
  };
  };

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
