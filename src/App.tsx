import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid text-bg-dark">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
