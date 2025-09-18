import { memo } from "react"
import { useState } from "react";
// Optimize with React.memo
// Now <Expensive /> only re-renders if its props change.
// Since it has no props, React will skip re-rendering — and clicking Increment feels snappy again.

// Key Lesson:
// Use React.memo to skip re-renders when props don’t change.

const Expensive = memo(function Expensive() {
  console.log("Expensive render")

  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }

  return <p>Expensive result: {total}</p>
})

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      border: "1px solid white"
    }}>
      <button onClick={() => {
        setCount(c => c + 1)
      }}>Increment</button>
      <p>{count}</p>
      <Expensive/>
    </div>
  )
}

export default OptimizedComponent