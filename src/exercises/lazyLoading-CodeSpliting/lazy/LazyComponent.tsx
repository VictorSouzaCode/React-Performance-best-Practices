// with a heavy component i dont import it using a normal import
import React, { Suspense, useState } from "react";

/* The idea is to see the difference between a normal import and a lazy-loaded import.
Normally, React includes all components in the main bundle, even if they are not used right away. With React.lazy, the component is only loaded when it is rendered.

So you’ll create a "heavy" component (something simulating big code) and load it only when needed.
*/

// How It Works
// On initial page load → HeavyComponent is NOT loaded into the main JS bundle.
// Only when you click “Load Heavy Component”, React fetches HeavyComponent.js as a separate chunk.
// While it’s loading → the fallback={<div>Loading...</div>} shows.
// Once loaded → HeavyComponent renders.

/* Takeaway:
Instead of shipping everything upfront, you can defer loading components until they’re needed. This reduces initial bundle size, speeding up startup time.
*/

/* Proof of Lazy Loading

Open DevTools → Network tab.

Load the app → you won’t see HeavyComponent.js requested.

Click the button → now you’ll see a new request for a separate chunk file (e.g. HeavyComponent.chunk.js).

That’s the confirmation that code splitting is working.
*/

const HeavyComponent = React.lazy(() => import("./HeavyComponent"))

const LazyComponent = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
    <div 
    style={{
      border: "1px solid white",
      borderRadius: "10px",
    }}>

      <h1>Code Splitting Example</h1>

      <button onClick={() => setShow((prev) => !prev)}>Load Heavy Component</button>

    </div>

    <p>Suspense is required around any lazy component</p>
    <Suspense fallback={<div>Loading component...</div>}>
        {show && <HeavyComponent/>}
      </Suspense>
    </>
  )
}

export default LazyComponent