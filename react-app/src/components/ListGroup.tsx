import { MouseEvent } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  const selectedIndex = 0

  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>Hello List</h1>
      <ul className='list-group'>
        <li className='list-group-item'>An item</li>
        <li className='list-group-item'>A second item</li>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? 'list-group-item text-bg-success active'
                : 'list-group-item text-bg-light'
            }
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
