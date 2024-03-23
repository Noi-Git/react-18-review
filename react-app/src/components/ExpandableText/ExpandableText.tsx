import { useState } from 'react'
interface ExpandableTextProps {
  children: string
  maxChars?: number
}
const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const text = children.substring(0, maxChars)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      {children.length <= maxChars ? (
        <p>{children}</p>
      ) : (
        <p>
          {text}...{' '}
          <button onClick={() => handleClick()}>
            {isExpanded ? 'Less' : 'More'}
          </button>
        </p>
      )}
    </>
  )
}

export default ExpandableText
