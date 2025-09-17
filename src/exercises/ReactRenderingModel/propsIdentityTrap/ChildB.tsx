import { memo } from "react"

// reminder for later fix it with useMemo for now the fix that i did dint work

type ChildProps = {
  children: number[]
}

const ChildB = ({children}:ChildProps) => {

  console.log("ChildB render")
  return (
    <div>
      {children}
    </div>
  )
}

export default memo(ChildB)