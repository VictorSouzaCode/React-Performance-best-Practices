import { memo, useState, useCallback } from "react"

// Fix with useCallback
// Goal: Keep stable references.
// ButtonChild no longer re-renders unnecessarily.
// Obeservation: That's freaking Awesome!


const ButtonChild = memo(({onClick}: {onClick: () => void}) => {

    console.log("Render: ButtonChild")
    return <button onClick={onClick}>Click Child</button>
})

const FixWithCallback = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(c => c + 1)
    },[])

  return (
    <div style={{
        border: "1px solid white"
    }}>
        <p>Count: {count}</p>
        <ButtonChild onClick={handleClick}/>
    </div>
  )
}

export default FixWithCallback