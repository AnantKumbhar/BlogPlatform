import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid gray" }}>
      
      {/* Left */}
      <h2 onClick={() => navigate("/")}>BlogPlatform</h2>

      {/* Right */}
      {token ? (
        <div>
          <button onClick={() => navigate("/profile")}>
            My Profile
          </button>

          <button onClick={() => navigate("/create")}>
            Create
          </button>

          <button onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Signup</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;