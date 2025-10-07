import { useState } from "react";
import clsx from "clsx";

// React + Tailwind handle everything declaratively.
/*
Why this is a “performance” lesson

Direct DOM manipulation forces layout recalculation (the browser recomputes styles, layout, and paint).

When React does batching, it minimizes these recalculations.

If you manipulate the DOM manually, you break batching and React’s optimization — the browser may reflow multiple times.
*/

const GoodManiTailwind = () => {
    const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsRed((prev) => !prev)}
        className="mb-2 px-3 py-1 border rounded"
      >
        Toggle Tail
      </button>
      <div
        className={clsx(
          "w-24 h-24 transition-colors duration-300",
          isRed ? "bg-red-500" : "bg-blue-500"
        )}
      />
    </div>
  );
}

export default GoodManiTailwind