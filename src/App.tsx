import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import SportsPage from "./components/SportsPage";
import SingleSportPage from "./components/SingleSportPage";
import SingleMatchPage from "./components/SingleMatchPage";
import NotFound from "./components/NotFound";

function MainLayout(props: any) {
  return (
    <>
      <Navbar />
      <Hero />
      {props.content}
    </>
  );
}

function MatchLayout(props: any) {
  return (
    <>
      <Navbar />
      <SingleMatchPage />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout content={<Home />} />} />
        <Route path="/sports">
          <Route index element={<MainLayout content={<SportsPage />} />} />
          <Route
            path=":key"
            element={<MainLayout content={<SingleSportPage />} />}
          />
        </Route>
        <Route path="/match/:key" element={<MatchLayout />} />
        <Route path="*" element={<MainLayout content={<NotFound />} />} />
      </Routes>
    </>
  );
}

export default App;
