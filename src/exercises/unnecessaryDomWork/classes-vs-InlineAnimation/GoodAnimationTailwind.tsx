

/*
Here’s how professionals do it using Tailwind’s transition utilities — React only toggles a class, not inline styles. */

// Tailwind transition utilities (transition-transform duration-200 ease-in-out)
// Offloads animation to CSS instead of React re-renders.
// Toggling a class (scale-110 / scale-100)
// Changes happen in the compositor thread (GPU), not React’s main thread.
// Single render per click
// React only updates the class once, no continuous re-rendering.
// Scales beautifully
// Works efficiently even with 100+ animated elements.

import { useState } from "react";


const GoodAnimationTailwind = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // remove class after animation
  };

  return (
    <button
      onClick={handleClick}
      className={`
        bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-200 ease-in-out
        ${clicked ? "scale-110" : "scale-100"}
      `}
    >
      Click Me
    </button>
  );
}

export default GoodAnimationTailwind