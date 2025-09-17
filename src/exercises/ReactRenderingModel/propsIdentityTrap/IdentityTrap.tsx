import ChildA from "./ChildA"
import ChildB from "./ChildB"
import { useState } from "react"
import { useMemo } from "react"

/* Props Identity Trap 
*/

/* Goal: Learn about object/array identity in props.
*/

/* Pass an array (e.g., [1,2,3]) as a prop to <ChildB />.
*/

/* Wrap <ChildB /> with React.memo. it still re-renders (why? new array each render
*/
/* Bonus: Fix it using useMemo. 
*/


// EXPLANATION

/* Even though <ChildB /> is wrapped in React.memo, 
On every parent re-render, [1,2,3] creates a new array reference,
eact thinks the items prop changed → so <ChildB /> re-renders unnecessarily.*/


// FIX

/* Stabilize the array with useMemo */

/* The array [1,2,3] is only created once (when the component mounts). 
*/

/* On re-renders, React sees that the items prop reference didn’t change. */

/* Thanks to React.memo, <ChildB /> won’t re-render anymore. */

// KEY TAKEAWAY
/* If you pass objects/arrays/functions as props, React.memo won’t help unless you stabilize their reference with useMemo (for values) or useCallback (for functions).
*/

const IdentityTrap = () => {
    const [ count, setCount ] = useState(0)

    const numbersArray = useMemo(() => [1, 2, 3], []);

  return (
    <div>
        <ChildA></ChildA>
        <ChildB>{numbersArray}</ChildB>
        <button onClick={() => {
        setCount((number) => number + 1)
      }}>{count}</button>
    </div>
  )
}

export default IdentityTrap