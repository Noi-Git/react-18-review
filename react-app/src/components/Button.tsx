interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return <div className='btn btn-primary'>{children}</div>
}

export default Button
