import React, { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar/NavigationBar"));
const MangaInfoPage = lazy(() => import("./components/MangaInfoPage"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/manga/:mangaid"
            element={
              <Suspense fallback="Loading...">
                <MangaInfoPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
