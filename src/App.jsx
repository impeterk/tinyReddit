import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <Search />
    </div>
  )
}

export default App
