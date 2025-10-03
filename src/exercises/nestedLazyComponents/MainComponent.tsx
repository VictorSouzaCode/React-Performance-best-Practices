import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
const LazyDashboard = React.lazy(() => import("./LazyDashboard"))
const Home = React.lazy(() => import("./Home"))

const MainComponent = () => {
  return (
      <Router>
          <nav style={{ display: "flex", gap: "1rem" }}>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
          </nav>

          <Suspense fallback={<div>Loading page...</div>}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={< LazyDashboard />} />
              </Routes>
          </Suspense>
      </Router>
  )
}

export default MainComponent