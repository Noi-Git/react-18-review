import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {
  const form = useForm()
  console.log(form)

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name with Form Hook
        </label>
        <input id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age with Form Hook
        </label>
        <input id='age' type='number' className='form-control' />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default FormHook
