import React, { Suspense, useState } from "react"

// Instead of importing at the top, you lazy load the entire component that depends on the library.
const DateComponent = React.lazy(() => import("./LazyImportFix"))

/*
Why It Matters

If you have large but rarely used features (e.g. charts, rich text editors, PDF generators, maps, date/time pickers), you don’t want to burden all users with their cost upfront.

Instead, you lazy load those features only for users who actually interact with them. 
*/

/*
Takeaway:

Heavy libraries = bundle bloat.

Wrapping them inside lazy-loaded components keeps the main bundle light.

Users only download heavy libraries when they need them → faster startup & better user experience.
*/

const LazyLoadLargeLibrary = () => {
    const [showDate, setShowDate] = useState(false);

  return (
    <div>
        <h1>Splitting A Large Library Example</h1>
        <button onClick={() => setShowDate(true)}>Show Date</button>
        <Suspense fallback={<div>Loading date formatter...</div>}>
            {showDate && <DateComponent/>}
        </Suspense>
    </div>
  )
}

export default LazyLoadLargeLibrary