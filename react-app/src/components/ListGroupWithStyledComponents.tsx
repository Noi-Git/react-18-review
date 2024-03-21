import { useState } from 'react'
import styled from 'styled-components'

interface ListGroupProps {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

const ListGroupWithStyledComponents = ({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <List className='list-group'>
        <h1 className='list-group-item text-bg-warning'>{heading}</h1>
        {items.map((item, index) => (
          <ListItem
            key={index}
            className={
              selectedIndex === index
                ? 'list-group-item text-bg-success active'
                : 'list-group-item text-bg-light'
            }
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroupWithStyledComponents

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  padding: 5px;
`
