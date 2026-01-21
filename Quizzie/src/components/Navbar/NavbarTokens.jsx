import { Brain, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export function NavbarTokens() {
  const navigate = useNavigate();

  const tokens = [
    { key: "brain", icon: <Brain size={16} />, value: 20 },
    { key: "iq", icon: <Lightbulb size={16} />, value: 20 }
  ];

  return (
    <div className="quizzie-navbar__tokens">
      {tokens.map(token => (
        <div key={token.key} className="quizzie-token">
          <span className="quizzie-token__icon">{token.icon}</span>
          <span className="quizzie-token__value">{token.value}</span>
          <button
            className="quizzie-token__plus"
            onClick={() => navigate("/shop")}
            aria-label="Open shop"
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
