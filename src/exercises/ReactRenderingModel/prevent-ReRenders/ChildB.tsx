
type ChildProps = {
  children: React.ReactNode
}

const ChildB = ({children}:ChildProps) => {
  console.log("ChildB render")
  return (
    <div>{children}</div>
  )
}

export default ChildB