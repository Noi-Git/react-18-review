interface ButtonProps {
  children: string
  color?: 'primary' | 'secondary' | 'danger' | 'warning'
  onClick: () => void
}

const Button = ({ children, color = 'primary', onClick }: ButtonProps) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
