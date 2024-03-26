import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './Pages/landing/Landing'
import Welcome from './Components/welcome/Welcome'

function App() {
  const [carpetRolled, setCarpetRolled] = useState(false)

  const handleCarpetRoll = () => {
    setCarpetRolled(true)
  }

  return (
    <>
      
    </>
  )
}

export default App
