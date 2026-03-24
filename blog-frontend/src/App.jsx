import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
import PublicBlogs from "./pages/PublicBlogs";
import CreateBlog from "./pages/CreateBlog";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PublicBlogs />} />

        

        <Route path="/create" element={
          <PrivateRoute>
            <CreateBlog />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;