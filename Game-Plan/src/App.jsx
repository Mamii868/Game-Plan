import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div className='Heading'>
        <h1 className='title'></h1>
      </div>
    </div>
  )
}

export default App
