import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchingData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      // .then((res) => console.log(res))
      .then((res) => console.log(res.data))
  })

  return <>FetchingData</>
}

export default FetchingData
