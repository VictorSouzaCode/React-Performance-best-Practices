import { memo } from "react"

type BadButtonProps = {
    count?: number,
    label?: string,
    onIncrement: () => void
}

const BadButton = ({
    label,
    onIncrement
}:BadButtonProps) => {

  console.log(label)
  
  return (
    <button onClick={onIncrement}>{label}</button>
  )
}

export default memo(BadButton)