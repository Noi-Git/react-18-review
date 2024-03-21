// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import AlertDismiss from './components/AlertDismiss'
import Button from './components/Button'

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
    </>
  )
}

export default App
