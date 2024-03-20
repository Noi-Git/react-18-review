import { Fragment } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  return (
    <>
      <h1>Hello List</h1>
      <ul className='list-group'>
        <li className='list-group-item'>An item</li>
        <li className='list-group-item'>A second item</li>
        {items.map((item) => (
          <li key={item} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
