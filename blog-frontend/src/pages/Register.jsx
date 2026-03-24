import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    await api.post("/auth/register", form);
    alert("Registered!");

    navigate("/");
  };

  return (
    <div>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;