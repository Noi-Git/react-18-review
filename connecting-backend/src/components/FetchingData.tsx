import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data)
        setIsLoading(false) //hide the loader when we get result
      })
      .catch((err) => {
        if (err instanceof AxiosError) return
        setError(err.message)
        setIsLoading(false) //hide the loader if request is rejected
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
