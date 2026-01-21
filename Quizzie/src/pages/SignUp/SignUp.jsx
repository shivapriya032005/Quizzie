import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "../../assets/Images/logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    // 🔗 TEMP: replace with backend later
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1300);
  };

  return (
    <div className="signup-root">
      <div className="signup-card">

        {/* LOGO */}
        <div className="signup-logo-wrap">
          <img src={logo} alt="Quizzie Logo" className="signup-logo" />
        </div>

        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join Quizzie and start playing</p>

        {/* INPUTS */}
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="signup-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* SIGNUP BUTTON */}
        <button
          className="signup-btn"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {/* FOOTER */}
        <div className="signup-footer">
          <span onClick={() => navigate("/login")}>
            Already have an account? <b>Login</b>
          </span>
        </div>

      </div>
    </div>
  );
}
