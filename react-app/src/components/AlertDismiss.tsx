import { ReactNode } from 'react'

interface AlertDismissProps {
  children: ReactNode
  onClick: () => void
}

const AlertDismiss = ({ children, onClick }: AlertDismissProps) => {
  return (
    <>
      <div
        className='alert alert-warning alert-dismissible fade show'
        role='alert'
      >
        {children}
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
          onClick={onClick}
        ></button>
      </div>
    </>
  )
}

export default AlertDismiss
