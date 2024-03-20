import React, {useState} from 'react'
import './welcome.css'

const Welcome = ({carpetRoll}) => {
    return (
      <>
      <div >welcome screen</div>
            <button onClick={carpetRoll}>Click to roll btn</button>
            </>
  )
}

export default Welcome