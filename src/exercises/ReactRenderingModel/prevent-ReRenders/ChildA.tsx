import { memo } from "react"

/* React.memo is used to memoize the component, which means that the component will only re-render if its props have changed.
*/

/* When the component is first rendered, React.memo will store the component's props and the result of the render.
*/

/* On subsequent renders, React.memo will compare the new props with the previous props. If the props are the same, React.memo will return the previously rendered result, skipping the re-render.
*/

/* If the props have changed, React.memo will call the component function again and update the stored props and render result.
*/

const ChildA= () => {
  console.log("ChildA render")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)