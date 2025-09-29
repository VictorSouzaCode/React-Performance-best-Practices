import { memo, useState } from "react"

type ButtonProps = {
    label: string
}

const EfficientButton = memo(({label}:ButtonProps) => {

    console.log(`Rendered Counter: ${label} `)
    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => {
            setCount((c) => c + 1)
        }}>
            {label}: {count}
        </button>
    </div>
  )
})

export default EfficientButton