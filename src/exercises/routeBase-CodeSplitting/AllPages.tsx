import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy imports
const Home = React.lazy(() => import("./Home"))
const Contact = React.lazy(() => import("./Contact"))
const Resume = React.lazy(() => import("./Resume"))

const AllPages = () => {
  return (
      <Router>

          <nav style={{ display: "flex", gap: "1rem" }}>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
          </nav>
          {/* Suspense wraps all lazy-loaded routes */}
          <Suspense fallback={<div>Loading page...</div>}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
              </Routes>
          </Suspense>
      </Router>
  )
}

export default AllPages