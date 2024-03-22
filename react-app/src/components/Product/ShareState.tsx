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
      {/* all the update ex. clear cart, should be done where the state is set */}
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  )
}

export default ShareState
