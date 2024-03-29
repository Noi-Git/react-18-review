import { FormEvent, useState } from 'react'

const FormUseState = () => {
  const [person, setPerson] = useState({
    nameUseState: '',
    ageUseState: '',
  })

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault()
    console.log(person)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name Use State
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, nameUseState: event.target.value })
          }
          value={person.nameUseState}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age Use State
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, ageUseState: event.target.value })
          }
          value={person.ageUseState}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default FormUseState
