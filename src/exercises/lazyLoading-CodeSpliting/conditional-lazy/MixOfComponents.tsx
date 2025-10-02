import React, { useState, Suspense} from "react";
import TableComponent from "./TableComponent";

// Lazy import (won’t be in the initial bundle)
const ChartComponent = React.lazy(() => import("./ChartComponent"));

/* 
How It Works

On initial load → only TableComponent code is inside the main bundle.

ChartComponent is not downloaded until you click "Show Chart".

While React is fetching the new chunk → you see the "Loading Chart..." fallback.

Once downloaded, the chart displays.

If you toggle back to the table → ChartComponent is still cached, so it shows instantly.
*/

/*
Proof

Open DevTools → Network Tab:

Refresh page → no request for ChartComponent.js.

Click "Show Chart" → you’ll see a new network request loading a separate JS chunk.
*/

const MixOfComponents = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Conditional Lazy Loading Example</h1>

        <button onClick={() => {
            setShow((prev) => !prev)
        }}>
            {show ? "show table" : "show chart"}
        </button>

        {!show && <TableComponent/>}

        <Suspense fallback={<div>Loading Chart...</div>}>
            {show && <ChartComponent/>}
        </Suspense>
    </div>
  )
}

export default MixOfComponents