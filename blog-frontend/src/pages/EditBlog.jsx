import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    content: "",
    slug: "",
    categoryId: 1
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await api.get(`/blog/${id}`);
      setForm(res.data);
    } catch (err) {
      alert("Failed to load blog");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/blog/${id}`, form);
      alert("Updated successfully");
      navigate("/");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>

      <input name="title" value={form.title} onChange={handleChange} />
      <input name="shortDescription" value={form.shortDescription} onChange={handleChange} />
      <input name="slug" value={form.slug} onChange={handleChange} />
      <textarea name="content" value={form.content} onChange={handleChange} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditBlog;