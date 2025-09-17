import { memo } from "react"
import { useMemo } from "react"

// reminder for later fix it with useMemo for now the fix that i did dint work

type ChildProps = {
  children: number[]
}

const ChildB = ({children}:ChildProps) => {

  if(!children) return;

  const computedChildren = useMemo(() => {

    return children.map((item) => item * 2)

  },[children])

  console.log(children)

  return (
    <div>
      <ul>
      {
        computedChildren.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default ChildB