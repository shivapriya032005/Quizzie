import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import "./SplashScreen.css";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // change if needed
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-root">
      <div className="splash-center">
        <div className="logo-glow">
          <img src={logo} alt="Quizzie Logo" className="splash-logo" />
        </div>

        <p className="splash-tagline">Play • Learn • Win</p>

        <div className="splash-loader">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
