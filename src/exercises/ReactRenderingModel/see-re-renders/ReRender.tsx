import ChildA from "./ChildA"
import ChildB from "./ChildB"
import { useState } from "react"

/* Goal: Understand when components re-render. */
/* Add a counter state in the parent (count with a button to increment).
Log inside each child: console.log("Child render"). 
*/
/*
Task: Observe in the console which children re-render when the parent’s state changes. 
*/

/* Observation: The component that renders first is ChildA then comes ChildB, if i swap the order of the components in return() ChildB will render first  */

/* Observation: Even if i put ChildB to render the count, it will render later than ChildA, So the correct approach if i have something to render is to put ChildB first */

/* Observation: Both child are re-rendered even if ChildA does nothing */

const ReRender = () => {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <ChildA/>
      <ChildB>{count}</ChildB>
      <button onClick={() => {
        setCount((number) => number + 1)
      }}></button>
    </div>
  )
}

export default ReRender