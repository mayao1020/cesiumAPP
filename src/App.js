import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Docs from "./pages/docs";
import About from "./pages/about";
import YqDistribution from "./pages/yq-distribution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cesiumAPP/" element={<Home />} />
        <Route path="/cesiumAPP/home" element={<Home />} />
        <Route path="/cesiumAPP/docs" element={<Docs />} />
        <Route path="/cesiumAPP/about" element={<About />} />
        <Route path="/cesiumAPP/yq" element={<YqDistribution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
