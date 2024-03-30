import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

const FetchingData = () => {
  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      // .then((res) => console.log(res))
      .then((res) => setUser(res.data))
  })

  return <>FetchingData</>
}

export default FetchingData
