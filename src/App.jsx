import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Question from "./pages/Question";
import Result from "./pages/Result";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}
