interface ButtonProps {
  children: string
  color: string
  onClick: () => void
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
