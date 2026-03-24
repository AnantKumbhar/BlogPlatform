import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
function PublicBlogs() {
  const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blog"); // no auth required
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      <h2>All Blogs</h2>
        
      {blogs.map((b) => (
        <div key={b.id}>
          <h3>{b.title}</h3>
          <p>{b.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default PublicBlogs;