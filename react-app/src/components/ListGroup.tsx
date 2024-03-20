import { Fragment } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  const fruits = ['Apple', 'Orange', 'Banana', 'Grape']
  // normal way to loop through an array with out jsx expression
  // if (fruits.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   )

  const fruitList = () => {
    return fruits.map((fruit) => (
      <li key={fruit} className='list-group-item text-bg-warning'>
        {fruit}
      </li>
    ))
  }

  return (
    <>
      <h1>Hello List</h1>
      <ul className='list-group'>
        <li className='list-group-item'>An item</li>
        <li className='list-group-item'>A second item</li>
        {items.map((item) => (
          <li key={item} className='list-group-item text-bg-success'>
            {item}
          </li>
        ))}
        {fruits.length !== 0 ? fruitList() : 'No fruits availabel at this time'}
      </ul>
    </>
  )
}

export default ListGroup
