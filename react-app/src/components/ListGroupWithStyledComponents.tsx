import { useState } from 'react'
import styled from 'styled-components'

interface ListItemStyleProps {
  active: boolean
}
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
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <List className='list-group'>
        <h1>{heading}</h1>
        {items.map((item, index) => (
          <ListItem
            key={index}
            active={index === selectedIndex}
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

const ListItem = styled.li<ListItemStyleProps>`
  padding: 5px;
  background: ${(props) => (props.active ? 'yellow' : 'none')};
`
