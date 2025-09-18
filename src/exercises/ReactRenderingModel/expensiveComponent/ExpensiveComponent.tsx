import { useState } from "react"

/* What is an “expensive component”? */

/* A component that does a lot of computation (e.g., a big loop, data processing, rendering a huge list).
If it re-renders unnecessarily, your app slows down.
*/

// Key Lesson:
// React will happily re-render everything in a component tree if a parent changes, even heavy components.
// Use React.memo to skip re-renders when props don’t change.
// Use useMemo to skip re-running expensive calculations unless dependencies change.

const Expensive = () => {
  console.log("Expensive render")

  // Simulate heavy work (e.g., calculating Fibonacci)
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }

  return <p>Expensive result: {total}</p>
}

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  // What happens:
  // Every time you click Increment, the whole parent re-renders.
  // That forces <Expensive /> to re-run its heavy loop, even though it doesn’t depend on count.
  // You’ll notice a visible lag in your UI.
  return (
    <div style={{
      border: "1px solid white",
      marginBottom: "20px"
    }}>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Count: {count}</p>
    {/* Expensive renders every time count changes */}
      <Expensive/>
    </div>
  )
}

export default ExpensiveComponent