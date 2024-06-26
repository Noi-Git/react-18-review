import { useForm, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  age: z
    .number({ invalid_type_error: 'Age field is required' })
    .min(18, { message: 'Age must be at least 18' }),
})

type FormData = z.infer<typeof schema>

const FormWithZodValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) })
  console.log('formState....errors...', errors)

  const onsubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name validation with Zod
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age validation with Zod
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      <button disabled={!isValid} className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default FormWithZodValidation
