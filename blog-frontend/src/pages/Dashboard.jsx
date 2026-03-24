import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blog");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching blogs");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => navigate("/create")}>
        Create Blog
      </button>

      <hr />

      <h3>All Blogs</h3>

      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{blog.title}</h3>
            <p>{blog.shortDescription}</p>
            <small>By: {blog.authorName || blog.author?.username}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;