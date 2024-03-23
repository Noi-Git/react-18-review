import { useState } from 'react'

const ArrayUpdate = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ])

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)))
  }

  return <button onClick={handleClick}>Update bug array</button>
}

export default ArrayUpdate
