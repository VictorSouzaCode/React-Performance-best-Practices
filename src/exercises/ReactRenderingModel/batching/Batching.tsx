import { useState } from "react"
/* Goal: Explore batching of state updates. */

/* Batching means React groups multiple state updates that happen in the same event loop (like inside one button click handler) and applies them together before rendering.
This avoids doing a re-render after every single setState call.
*/
// Batching prevents extra renders, but also means all updates in one event handler see the same initial state (unless you use the functional form).
// That’s why setState(prev => …) is the safe choice when your update depends on the previous state.

const Batching = () => {
    const [count, setCount] = useState(0)

    const [countTwo, setCountTwo] = useState(0)

    // With batching: Wrong way
    // React collects both updates before rendering.
    // Both are using the same stale count value (the one from when the handler started).
    // So React thinks: "update count to count + 1" … twice.
    // Result: you only get +1.
    const incrementTwiceWrog = () => {
        setCount(count + 1);
        setCount(count + 1); // uses the same old `count`
    }

    // With batching: Correct way
    // Now each update doesn’t close over the stale count.
    // Instead, React says:
    // Apply function: take latest value, add 1.
    // Then: "Apply function again: take latest value, add 1."
    // Even with batching, React applies them sequentially, so you get the correct +2.
    const incrementTwiceCorrect = () => {
        setCountTwo(prev => prev + 1);
        setCountTwo(prev => prev + 1); // each uses the latest updated value
    }

    /* Key Lesson:
       When your next state depends on the previous state, always use the functional updater form: 
    */

    // Functional form performance cost
    // functional updater is not slower in any meaningful way. It’s the safer option whenever the next state depends on the previous one.
    // The functional updater can actually prevent bugs and wasted re-renders (like in your Exercise 4).
    // So in real-world apps, it can be more performant overall

  return (
      <div>
          <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px"
          }}>
              <p>Wrong:{count}</p>
              <p>Corrent:{countTwo}</p>
          </div>

          <button
              onClick={incrementTwiceWrog}>
              Wrong
          </button>
          <button
              onClick={incrementTwiceCorrect}>
              Corrent
          </button>
      </div>
  )
}

export default Batching