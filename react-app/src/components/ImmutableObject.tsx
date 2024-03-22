import { useState } from 'react'

const ImmutableObject = () => {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  })

  /*
  //=== we should not do this ===
  //=== this will not work - because React wouldn't be able to detect the state change
  const handleClick = () => {
    drink.price = 6
    setDrink(drink)
  }
  */

  /*
  // === give React a brand new object ===
  // === this will work but using spread operator to copy object is better
  const handleClick = () => {
    const newDrink = {
      title: drink.title,
      price: 6,
    }
    setDrink(newDrink)
  }
  */

  // === using Spread operator
  const handleClick = () => {
    setDrink({ ...drink, price: 6 })
  }

  return (
    <>
      <h3>{drink.price}</h3>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default ImmutableObject
