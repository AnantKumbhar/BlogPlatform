import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userId = null;

  if (token) {
  try {
    const decoded = jwtDecode(token);

    userId =
      decoded.nameid ||
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      

  } catch (err) {
    console.error("Invalid token");
    userId = null;
  }
}

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

  const handleDelete = async (id) => {
    await api.delete(`/blog/${id}`);
    fetchBlogs(); // refresh
  };

  const handleEdit = (id) => {
  navigate(`/edit/${id}`);
};

  return (
    <div>
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
            {userId && Number(userId) === blog.authorId && (
              <div>
                <button onClick={() => handleEdit(blog.id)}>Edit</button>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
              
            )}
            
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;