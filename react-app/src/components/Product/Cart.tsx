interface CartItemProps {
  cartItems: string[]
}

const Cart = ({ cartItems }: CartItemProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Cart
