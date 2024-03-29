import { useForm, FieldValues } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
})

interface FormData {
  name: string
  age: number
}

const FormWithZodValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  console.log('formState....errors...', errors)

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
        {errors.name?.type === 'required' && (
          <p className='text-danger'>The name field is required.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>The name must be at least 3 characters</p>
        )}
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

export default FormWithZodValidation
