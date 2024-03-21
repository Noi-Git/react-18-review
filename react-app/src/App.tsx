// import { useState } from 'react'
import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  return (
    <div>
      <ListGroup items={items} heading='Cities' onSelectItem={} />
    </div>
  )
}

export default App
