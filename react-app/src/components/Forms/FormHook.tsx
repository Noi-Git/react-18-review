import { useForm } from 'react-hook-form'

const FormHook = () => {
  const form = useForm()
  console.log(form)
  return <div>FormHook</div>
}

export default FormHook
