import { useState } from 'react'

interface ListGroupProps {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

const ListGroup = ({ items, heading }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <ul className='list-group'>
        <h1 className='list-group-item text-bg-warning'>{heading}</h1>
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
