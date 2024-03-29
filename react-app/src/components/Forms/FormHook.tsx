import { useForm } from 'react-hook-form'

const FormHook = () => {
  const { register } = useForm()
  console.log(register('name'))

  return (
    <form onSubmit={() => {}}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name with Form Hook
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age with Form Hook
        </label>
        <input
          {...register('age')}
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

export default FormHook
