import { useState } from 'react'
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'

interface LikeProps {
  onClick: () => void
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(true)

  const toggle = () => {
    setStatus(!status)
    onClick()
  }

  return (
    <>
      {status && <TiHeartFullOutline color='red' size={80} onClick={toggle} />}
      {!status && <TiHeartOutline color='red' size={80} onClick={toggle} />}
    </>
  )
}

export default Like
