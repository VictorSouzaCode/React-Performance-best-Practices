import ChildA from "./ChildA"
import ChildB from "./ChildB"
import { useState } from "react"

/* Props Identity Trap 
*/

/* Goal: Learn about object/array identity in props.
*/

/* Pass an array (e.g., [1,2,3]) as a prop to <ChildB />.
*/

/* Wrap <ChildB /> with React.memo.
*/

/* Task: Notice it still re-renders (why? new array each render).
*/

/* Bonus: Fix it using useMemo. 
*/

const IdentityTrap = () => {
    const [ count, setCount ] = useState(0)

    const numbersArray = [1, 2, 3];

  return (
    <div>
        <ChildA></ChildA>
        <ChildB>{numbersArray}</ChildB>
        <button onClick={() => {
        setCount((number) => number + 1)
      }}></button>
    </div>
  )
}

export default IdentityTrap