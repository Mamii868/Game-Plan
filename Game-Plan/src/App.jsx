import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Typography variant='h2' sx={{
        color: 'text.main'
      }}>
        Hello World
      </Typography>
    </div>
  )
}

export default App
