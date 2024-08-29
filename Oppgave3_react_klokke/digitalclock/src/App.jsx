import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [time, setTime] = useState(Date.now())

  setInterval(() => {
    setTime(Date.now())
  }, 100)

  return (
    <>
      <p>{new Date(time).toLocaleTimeString()}</p>
    </>
  )
}

export default App
