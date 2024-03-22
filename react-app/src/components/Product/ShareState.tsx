import { useState } from 'react'
import NavBar from './NavBar'
import Cart from './Cart'

const ShareState = () => {
  const [cartItems, setCartItems] = useState([
    'Product 1',
    'Product 2',
    'Product 3',
  ])

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} />
    </>
  )
}

export default ShareState
