interface AlertProp {
  text: string
}
function Alert({ text }) {
  return <div className='alert alert-primary'>{text}</div>
}

export default Alert
