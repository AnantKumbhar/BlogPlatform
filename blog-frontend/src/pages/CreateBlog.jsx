import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    shortDescription: "",
    categoryId: 1 // ⚠️ must exist in DB
  });

  const handleSubmit = async () => {
    try {
      await api.post("/blog", blog);

      alert("Blog Created Successfully");

      navigate("/"); // go to dashboard
    } catch (error) {
      console.error(error);
      alert("Error creating blog");
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>

      <input
        placeholder="Title"
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />

      <input
        placeholder="Short Description"
        onChange={(e) =>
          setBlog({ ...blog, shortDescription: e.target.value })
        }
      />

      <textarea
        placeholder="Content"
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
      />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreateBlog;