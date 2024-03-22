interface CartItemProps {
  cartItems: string[]
  onClear: () => void
}

const Cart = ({ cartItems, onClear }: CartItemProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart
