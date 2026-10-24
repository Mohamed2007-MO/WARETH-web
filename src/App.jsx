import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Experience from "./pages/Experience/Experience";
import World from "./pages/World/World";
import LegacyLives from "./pages/LegacyLives/LegacyLives";
import LegacyStone from "./pages/LegacyStone/LegacyStone";
import WhyWarith from "./pages/WhyWarith/WhyWarith";
import ThoughtLeftBehind from "./pages/ThoughtLeftBehind/ThoughtLeftBehind";
import About from "./pages/About/About";
import FindExperience from "./pages/FindExperience/FindExperience";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Experience />} />
        <Route path="world" element={<World />} />
        <Route path="legacy-lives" element={<LegacyLives />} />
        <Route path="legacy-stone" element={<LegacyStone />} />
        <Route path="why-warith" element={<WhyWarith />} />
        <Route path="thought-left-behind" element={<ThoughtLeftBehind />} />
        <Route path="about" element={<About />} />
        <Route path="find-experience" element={<FindExperience />} />
      </Route>
    </Routes>
  );
}