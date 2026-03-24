import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  const fetchMyBlogs = async () => {
    try {
      const res = await api.get("/blog/my");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/blog/${id}`);
    fetchMyBlogs(); // refresh
  };

  const handleEdit = (id) => {
  navigate(`/edit/${id}`);
};

  return (
    <div>
      <h2>My Blogs</h2>

      {blogs.map((b) => (
        <div key={b.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{b.title}</h3>
          <p>{b.shortDescription}</p>

          <button onClick={() => handleEdit(b.id)}>
            Edit
          </button>

          <button onClick={() => handleDelete(b.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Profile;