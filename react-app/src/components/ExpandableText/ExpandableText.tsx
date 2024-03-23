import { useState } from 'react'
interface ExpandableTextProps {
  children: string
  maxChars?: number
}
const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const text = isExpanded ? children : children.substring(0, maxChars) + '... '

  return (
    <>
      {children.length <= maxChars ? (
        <p>{children}</p>
      ) : (
        <p>
          {text}
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Less' : 'More'}
          </button>
        </p>
      )}
    </>
  )
}

export default ExpandableText
