import { useState } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>Hello List</h1>
      <ul className='list-group'>
        <li className='list-group-item text-bg-warning'>USA States</li>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? 'list-group-item text-bg-success active'
                : 'list-group-item text-bg-light'
            }
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
