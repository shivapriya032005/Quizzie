import { Home, ShoppingBag, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer({ active }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (active) return active === path.replace("/", "");
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="quizzie-footer">
      <div className="quizzie-footer__bg" />
      <nav className="quizzie-footer__nav">
        {/* Shop */}
        <button
          className={`quizzie-footer__item ${isActive("/shop") ? "quizzie-footer__item--active" : ""}`}
          onClick={() => navigate("/shop")}
        >
          <ShoppingBag size={26} />
          <span>Shop</span>
        </button>

        {/* Home */}
        <button
          className={`quizzie-footer__item ${isActive("/home") ? "quizzie-footer__item--active" : ""}`}
          onClick={() => navigate("/home")}
        >
          <Home className="quizzie-footer__icon" />
          <span>Home</span>
        </button>

        {/* Settings */}
        <button
          className={`quizzie-footer__item ${isActive("/settings") ? "quizzie-footer__item--active" : ""}`}
          onClick={() => navigate("/settings")}
        >
          <Settings size={26} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
