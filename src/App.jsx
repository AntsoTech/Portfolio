import "./App.scss";
import { Route, Routes } from "react-router-dom";
import OnePage from "./components/OnePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OnePage />} />
        {/* <Route path="/projects/:id" element={<ProjectTemplate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
