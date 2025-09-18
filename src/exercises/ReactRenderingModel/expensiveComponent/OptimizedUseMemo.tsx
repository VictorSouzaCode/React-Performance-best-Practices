import { useMemo, useState, type JSX } from "react"

// Optimize with useMemo (if props exist)
// If <Expensive /> does depend on props (like an array), you can cache the result:

/* Here, the computation only re-runs if value changes.
If count changes in the parent but value stays the same, the expensive work is skipped.
*/

// Key Lesson:
// Use useMemo to skip re-running expensive calculations unless dependencies change.

const Expensive = ({value}: {value: number}):JSX.Element => {
    console.log("Expensive render");

    const total = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1e8; i++) {
            result += i * value;
        }
        return result
    },[value])

    return <p>Expensive result: {total}</p>
}

const OptimizedUseMemo = () => {
    const [count, setCount] = useState(0);

  return (
    <div style={{
        border: "1px solid white",
        marginTop: "20px"
    }}>
        <button onClick={() => {
            setCount(c => c + 1)
        }}>Increment</button>
        <p>Count: {count}</p>
        <Expensive value={4}/>
    </div>
  )
}

export default OptimizedUseMemo