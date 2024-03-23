import { useState } from 'react'

const ArrayTag = () => {
  const [tags, setTags] = useState(['happy', 'cheerful'])

  const handleClick = () => {
    // Add
    setTags([...tags, 'exciting'])

    // Remove every tag except 'Happy'
    setTags(tags.filter((tag) => tag !== 'happy'))

    // Update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happieness' : tag)))
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ArrayTag
