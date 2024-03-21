// import { useState } from 'react'
// import { useState } from 'react'
import './App.css'
// import AlertDismiss from './components/AlertDismiss'
// import Button from './components/Button'
import ListGroupWithStyledComponents from './components/ListGroupWithStyledComponents'

function App() {
  // const [alertVisible, setAlertVisible] = useState(false)
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  const handleSelectItem = (item: string) => {
    console.log(`You clicked ${item}`)
  }

  return (
    <>
      {/* {alertVisible && (
        <AlertDismiss onClose={() => setAlertVisible(false)}>
          Hello! <strong>I am full</strong>
        </AlertDismiss>
      )}

      <Button onClick={() => setAlertVisible(true)}>Show Alert Message</Button> */}
      <ListGroupWithStyledComponents
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </>
  )
}

export default App
