import { useState } from "react"

// THE CORRECT WAY

// Goal: Avoid redundant state.
// What is "derived state"
// It’s when you store something in state that can be calculated from other state or props.
// If you have text in state, and you also store text.length in state… then length is derived from text and doesn’t need to live in state separately.

const DerivedState = () => {

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  // Benefits:
  // Only one source of truth (text).
  // React recalculates text.length on every render — which is trivial and free.
  // Less chance of bugs and unnecessary re-renders.

  /* Key lesson:

  Only put in useState what you can’t compute from props or other state.

  Everything else → derive it.
  */

  return (
    <div style={{
        border: '1px solid white'}}
    >
      <p>Derived</p>
          <input value={text} onChange={handleChange} />
          <p>Length: {text.length}</p>
    </div>
  )
}

export default DerivedState