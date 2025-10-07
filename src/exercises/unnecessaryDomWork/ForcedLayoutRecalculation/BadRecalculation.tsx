
// When you call something like:
// document.getElementById("box")?.offsetWidth;
// you’re telling the browser: “Hey, give me the current, computed width of this element right now.”
// To answer that, the browser must:
// Pause everything it’s doing.
// Recalculate the layout of the entire page (to ensure all CSS, sizes, and positions are up-to-date).
// Return the value to JavaScript.
// This process is called a forced synchronous layout reflow (or forced reflow).
// If you do this often — especially on every render — the browser has to repeatedly recalculate layout, which can make your app sluggish or even visibly laggy.

/* 
Why this is especially bad in React

React’s render cycle is supposed to be asynchronous and batched for performance.
But reading layout metrics like offsetWidth or getBoundingClientRect() forces React’s work to stop, because the browser has to complete layout first.

So if you run this code on every render (as in the bad example above), you’re effectively telling React:

“Stop batching, stop optimizing — I need layout now!”

That defeats React’s efficiency.
*/

import { useEffect, useState } from "react";

function BadRecalculation() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This line forces the browser to recalculate layout on *every render*
    const width = document.getElementById("box")?.offsetWidth;
    console.log("Width:", width);
  });

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Re-render {count}</button>
      <div
        id="box"
        style={{
          width: `${100 + count * 10}px`,
          height: "100px",
          backgroundColor: "skyblue",
        }}
      />
    </div>
  );
}

export default BadRecalculation