import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateEditUser from "./pages/CreateEditUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<CreateEditUser />} />
        <Route path="/edit/:id" element={<CreateEditUser />} />
      </Routes>
    </div>
  );
}

export default App;
