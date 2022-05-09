import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Votes from "./pages/Votes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/votes" element={<Votes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
