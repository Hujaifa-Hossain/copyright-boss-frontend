import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./components/Create";
import RequireAuth from "./shared/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<RequireAuth><Create /></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
