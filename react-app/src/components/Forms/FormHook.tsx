import { useForm, FieldValues } from 'react-hook-form'

const FormHook = () => {
  const { register, handleSubmit, formState } = useForm()
  console.log(formState)
  // console.log(formState.errors)

  const onsubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name with Form Hook
        </label>
        <input
          {...(register('name'), { required: true, minLength: 3 })}
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
