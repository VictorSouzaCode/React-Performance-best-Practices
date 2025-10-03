import { lazy, Suspense, useState } from "react";

const Stats = lazy(() => import("./Stats"))
const Reports = lazy(() => import("./Reports"))
const Charts = lazy(() => import("./Charts"))

const LazyDashboard = () => {
    const [show, setShow] = useState(false)

  return (
    <div>
        <h2>📊 Dashboard</h2>

        <Suspense fallback={<div>Loading...</div>}>
            <Stats/>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
            <Reports />
        </Suspense>

        <button onClick={() => setShow((prev) => !prev)}>
            {show ? "Hide Charts" : "Show Charts"}
        </button>

        {show && (
            <Suspense fallback={<div>Loading...</div>}>
                <Charts />
            </Suspense>
        )}
    </div>
  )
}

export default LazyDashboard