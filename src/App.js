import { Routes, Route } from "react-router-dom";
import "./App.css";
import CNavBar from "./components/CNavBar";
import CreateEditUser from "./pages/CreateEditUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-secondary">
      <CNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<CreateEditUser />} />
        <Route path="/edit/:id" element={<CreateEditUser />} />
      </Routes>
    </div>
  );
}

export default App;
