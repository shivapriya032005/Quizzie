import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/Images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
  // TEMP — replace with backend OAuth
  console.log("Google login");
  navigate("/home");
  };

  const handleFacebookLogin = () => {
  // TEMP — replace with backend OAuth
  console.log("Facebook login");
  navigate("/home");
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    // 🔗 TEMP: replace with backend later
    setTimeout(() => {
      setLoading(false);
      navigate("/home"); // or /gameplay
    }, 1200);
  };

  return (
    <div className="login-root">
      <div className="login-card">

        {/* LOGO */}
        <div className="login-logo-wrap">
          <img src={logo} alt="Quizzie Logo" className="login-logo" />
        </div>

        <h2 className="login-title">Welcome to Quizzie</h2>
        <p className="login-subtitle">Play • Learn • Win</p>

        {/* INPUTS */}
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* LOGIN BUTTON */}
        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-divider">
            <span>or</span>
        </div>

        <button className="social-btn google" onClick={handleGoogleLogin}>
            <FcGoogle size={18} />
            Continue with Google
        </button>

        <button className="social-btn facebook" onClick={handleFacebookLogin}>
            <FaFacebook size={18} />
            Continue with Facebook
        </button>


        {/* EXTRA */}
        <div className="login-footer">
          <span onClick={() => navigate("/signup")}>
            Don’t have an account? <b>Sign up</b>
          </span>
        </div>

      </div>
    </div>
  );
}
