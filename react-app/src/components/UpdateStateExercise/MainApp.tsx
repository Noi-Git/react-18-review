import { useState } from 'react'

const MainApp = () => {
  const [name, setName] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  })

  const handleClick = () => {
    setName({
      ...name,
      player: { ...name.player, name: 'Bob' },
    })
  }

  return (
    <>
      <p>{name.player.name}</p>
      <button onClick={() => handleClick()}>Update name</button>
    </>
  )
}

export default MainApp
