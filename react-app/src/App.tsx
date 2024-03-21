// import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Button color='danger' onClick={() => console.log('Yeah!!!')}>
        My Button
      </Button>
    </div>
  )
}

export default App
