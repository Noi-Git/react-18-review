import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    //cancle or abort async operation, such as fetch request or DOM manipulation or others that take a long time to complete
    const controller = new AbortController()
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof AxiosError) return
        setError(err.message)
      })

    return () => controller.abort() // clean up function
  }, [])

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default FetchingData
