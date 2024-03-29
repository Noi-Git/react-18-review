import { useState } from 'react'
import './App.css'
import AlertDismiss from './components/AlertDismiss'
import Button from './components/Button'
import Like from './components/Like'
import ImmutableObject from './components/ImmutableObject'
import NestedObject from './components/NestedObject'
import ArrayUpdateWithImmer from './components/ArrayUpdateWithImmer'
import ShareState from './components/Product/ShareState'
import MainApp from './components/UpdateStateExercise/MainApp'
import Pizza from './components/PizzaAddToArray/Pizza'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ExpandableText from './components/ExpandableText/ExpandableText'
import Form from './components/Forms/Form'
import FormUseState from './components/Forms/FormUseState'

function App() {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div className='container'>
      {alertVisible && (
        <AlertDismiss onClose={() => setAlertVisible(false)}>
          Hello! <strong>I am full</strong>
        </AlertDismiss>
      )}

      <Button onClick={() => setAlertVisible(true)}>Show Alert Message</Button>
      <br />
      <br />
      <Like onClick={() => console.log('Clicked!!')} />
      <br />
      <br />
      <ImmutableObject />
      <br />
      <br />
      <NestedObject />
      <br />
      <br />
      <ArrayUpdateWithImmer />
      <br />
      <br />
      <ShareState />
      <br />
      <br />
      <MainApp />
      <br />
      <br />
      <Pizza />
      <br />
      <br />
      <ShoppingCart />
      <br />
      <br />
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
        veritatis commodi ipsum aperiam explicabo sit officia. Repudiandae
        suscipit soluta, quam quis harum vero commodi delectus assumenda
        dignissimos maiores nam consequuntur ipsam ab. Corporis maiores nisi
        placeat dolorum voluptate itaque odio! Autem, dolores ipsa. Eveniet,
        amet doloribus? Nesciunt magni odit corporis ducimus ut deleniti
        doloremque, porro quaerat incidunt, nam recusandae dolores blanditiis
        praesentium officiis minima sed architecto? Quibusdam animi molestiae,
        eligendi hic exercitationem quae repudiandae excepturi assumenda
        reprehenderit magnam nisi deserunt et facilis. Incidunt explicabo eos
        enim cumque dolores ullam minima nostrum nam, autem sapiente cupiditate,
        excepturi possimus esse a.
      </ExpandableText>
      <Form />
      <FormUseState />
    </div>
  )
}

export default App
