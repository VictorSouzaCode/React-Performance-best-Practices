
/* What is an “expensive component”? */

/* A component that does a lot of computation (e.g., a big loop, data processing, rendering a huge list).
If it re-renders unnecessarily, your app slows down.
*/

/* Your Task in this Exercise

Build the naive version (Step 1). Notice the lag.

Wrap the component in React.memo (Step 2). Notice how lag disappears.

Modify <Expensive /> to take a prop (e.g., value) and optimize with useMemo (Step 3).

Observe how React only recomputes when it truly needs to.
*/

const ExpensiveComponent = () => {
  return (
    <div>ExpensiveComponent</div>
  )
}

export default ExpensiveComponent