import { useState } from 'react'

const NestedObject = () => {
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipcode: 94111,
    },
  })

  // === spread operator does shallow copy
  // === need to spread it again when the object is nested
  // === should avoid deeply nested object
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 94112 },
    })
  }

  return (
    <>
      <h3>New Zip code {customer.address.zipcode}</h3>
      <button onClick={handleClick}>Click me to see new zip code</button>
    </>
  )
}

export default NestedObject
