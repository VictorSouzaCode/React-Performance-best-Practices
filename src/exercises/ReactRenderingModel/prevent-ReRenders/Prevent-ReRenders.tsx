import ChildA from "./ChildA"
import ChildB from "./ChildB"
import { useState } from "react"

/* Prevent Unnecessary Re-renders with React.memo */
/* Goal: Optimize rendering. */

/*
Wrap <ChildA /> in React.memo.

Only <ChildB /> should depend on count.
👉 Task: Verify in the console that <ChildA /> no longer re-renders when count updates.
*/

/* Observation: ChildA no longer re-render whe count updates making the redering way faster */

const PreventReRenders = () => {
    const [ count, setCount ] = useState(0)

  return (
    <div>
        <ChildA></ChildA>
        <ChildB>{count}</ChildB>
        <button onClick={() => {
        setCount((number) => number + 1)
      }}></button>
    </div>
  )
}

export default PreventReRenders