import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
//import PublicBlogs from "./pages/PublicBlogs";
import CreateBlog from "./pages/CreateBlog";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import EditBlog from "./pages/EditBlog";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />

        

        <Route path="/create" element={
          <PrivateRoute>
            <CreateBlog />
          </PrivateRoute>
        } />
        <Route path="/edit/:id" element={
          <PrivateRoute>
            <EditBlog />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;