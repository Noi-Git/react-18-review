import { useState } from 'react'

const Pizza = () => {
  const [pizzaTopping, setPizzaTopping] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  })

  const handleClick = () => {
    setPizzaTopping({
      ...pizzaTopping,
      toppings: [...pizzaTopping.toppings, ', Cheese'],
    })
  }

  return (
    <>
      <p>{pizzaTopping.toppings}</p>
      <button onClick={() => handleClick()}>Add Topping</button>
    </>
  )
}

export default Pizza
