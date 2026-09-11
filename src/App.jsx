import { useState } from 'react'

import './App.css'
import { Homepages } from './pages/Homepages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Homepages/>
    </div>
  )
}

export default App
