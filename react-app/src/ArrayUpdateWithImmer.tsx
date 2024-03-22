import { useState } from 'react'
import { produce } from 'immer'

const ArrayUpdateWithImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ])

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)))

    //=== draft is the proxy obj that record the change we are going to apply to the bugs array
    //=== immer will keep track of the changes
    setBugs(
      produce((draft) => {
        const bugFound = draft.find((bug) => bug.id === 1)
        if (bugFound) bugFound.fixed = true
      })
    )
  }

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'New'}
        </p>
      ))}
      <button onClick={handleClick}>Update bug array</button>
    </>
  )
}

export default ArrayUpdateWithImmer
