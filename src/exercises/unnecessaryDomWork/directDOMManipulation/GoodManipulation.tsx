
// The “Good” Version
// Let React control the DOM by using state and conditional styles or classNames.

/* Now:

React controls when and how the color changes.

The color is part of the component’s state, so React can re-render safely.

You can re-render this component as many times as you want — the color will always match the state, no desyncs.

*/

/*
Why this is a “performance” lesson

Direct DOM manipulation forces layout recalculation (the browser recomputes styles, layout, and paint).

When React does batching, it minimizes these recalculations.

If you manipulate the DOM manually, you break batching and React’s optimization — the browser may reflow multiple times.
*/

import { useState } from "react";

const GoodManipulation = () => {
    const [isRed, setIsRed] = useState(false);

  return (
    <div>
        <button onClick={() => setIsRed((prev) => !prev)}>Toggle Color</button>
        <div style={{
          width: 100,
          height: 100,
          backgroundColor: isRed ? "red" : "blue",
        }}
        />
    </div>
  )
}

export default GoodManipulation