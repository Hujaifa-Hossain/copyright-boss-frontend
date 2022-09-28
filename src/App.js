import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./components/Create";
import RequireAuth from "./shared/RequireAuth";
import Dashboard from "./pages/Dashboard";
import Users from "./components/Users";
import RequireAdmin from "./shared/RequireAdmin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* <Route path="create" element={<RequireAuth><Create /></RequireAuth>} /> */}

        <Route
          path="dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        >
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="create" element={<Create />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
