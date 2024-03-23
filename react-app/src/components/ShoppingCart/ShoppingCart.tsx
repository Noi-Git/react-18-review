import { useState } from 'react'

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  })

  const handleClick = () => {
    // setCart(cart.items.map(item => (item.id === 1 ? {...item, quantity: 2} : item)))
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })
  }

  return (
    <>
      <p>Title: {cart.items.map((i) => i.title)} </p>
      <p>Quantity: {cart.items.map((i) => i.quantity)}</p>
      <button onClick={() => handleClick()}>Add Product</button>
    </>
  )
}

export default ShoppingCart
