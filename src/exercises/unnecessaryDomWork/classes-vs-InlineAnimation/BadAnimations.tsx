
// Classic bad example

/*
What’s going on here

Every ~16ms:

setRotation() updates React state.

React re-renders the entire component.

The style prop creates a new object each render ({ transform: "rotate(..." }).

React updates the DOM’s transform property.

The browser recalculates layout, paints, and composites again.

So you’re asking React + the JS thread to handle 60 updates per second.

If you had 50 buttons like that?
→ 50 re-renders per frame × 60 frames per second = 3000 React updates per second.
→ CPU spike, jank, lag. 

The browser’s animation engine (CSS transitions, keyframes, or the compositor) is much faster — it can run animations on the GPU, outside the JS thread.
*/

import { useState, useEffect } from "react";


const BadAnimations = () => {
  const [rotation, setRotation] = useState(0);

  // Animate by updating state every frame
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 5) % 360);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Bad Animation
    <button
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "none",
        width: "100px",
        height: "100px",
        margin: "10px",
        background: "salmon",
      }}
    >
      🔄
    </button>
    </div>
  );
}
export default BadAnimations