interface ExpandableTextProps {
  children: string
  maxChars?: number
}
const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const text = children.substring(0, maxChars)

  const handleClick = () => {
    console.log('Click')
  }

  return (
    <>
      {children.length <= maxChars ? (
        <p>{children}</p>
      ) : (
        <p>
          {text}...<button onClick={() => handleClick()}>More</button>
        </p>
      )}
    </>
  )
}

export default ExpandableText
