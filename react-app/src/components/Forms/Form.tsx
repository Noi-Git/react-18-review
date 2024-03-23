import { FormEvent, useRef } from 'react'

const Form = () => {
  // add type to useRef to fix the error or nameRef.current.value
  const nameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // need to check that the current value is not null
    // otherwise will get the complie error
    if (nameRef.current !== null) console.log(nameRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input ref={nameRef} id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input id='age' type='number' className='form-control' />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form
