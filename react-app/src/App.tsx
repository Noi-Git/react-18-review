import { useState } from 'react'
import './App.css'
import AlertDismiss from './components/AlertDismiss'
import Button from './components/Button'
import Like from './components/Like'

function App() {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <>
      {alertVisible && (
        <AlertDismiss onClose={() => setAlertVisible(false)}>
          Hello! <strong>I am full</strong>
        </AlertDismiss>
      )}

      <Button onClick={() => setAlertVisible(true)}>Show Alert Message</Button>
      <br />
      <br />
      <br />
      <Like onClick={() => console.log('Clicked!!')} />
    </>
  )
}

export default App
