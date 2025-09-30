import { useState } from "react"
import EfficientButton from "./EfficientButton"

// Counter manages its own state.
// Clicking Counter A → only Counter A re-renders.
// Clicking Counter B → only Counter B re-renders.
// Efficient, isolated updates.

// Lift state only as high as necessary.
// If the state is completely local (only one component cares), keep it inside that component.
// If siblings need to know about each other → lift it up.
// If global logic (like theme, auth, language) needs it → use context or global state (Redux, Zustand, etc.).

// Lesson in terms of performance
// Keeping state low in the tree → fewer components re-render → React reconciles less.
// Lifting state higher than needed → more components re-render → React reconciles more → wasted work.

// You want to find the sweet spot:
// Not too low (making components isolated but duplicating logic).
// Not too high (causing global re-renders).

// When to Choose Which
// Localize state if:
// t only matters to a single UI piece (like a toggle, dropdown open/close, or input value).

const EfficientState = () => {
  const [counts, setCounts] = useState(0)

  return (
    <div
      style={{
        border: "1px solid white"
      }}
    >
      <p>Efficient State</p>

      <div  
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px"
      }}
      >
      <button onClick={() => {
        setCounts(c => c + 1)
      }}>
        {counts}
      </button>

      <EfficientButton label="A" />
      <EfficientButton label="B" />
      </div>
    </div>
  )
}

export default EfficientState