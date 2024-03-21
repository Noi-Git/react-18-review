import { useState } from 'react'
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'

const Like = () => {
  const [status, setStatus] = useState(true)
  return (
    <>
      {status && (
        <TiHeartFullOutline
          color='red'
          size={80}
          onClick={() => setStatus(false)}
        />
      )}
      {!status && (
        <TiHeartOutline color='red' size={80} onClick={() => setStatus(true)} />
      )}
    </>
  )
}

export default Like
