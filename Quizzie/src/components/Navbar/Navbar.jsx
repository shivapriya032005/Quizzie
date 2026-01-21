import "./Navbar.css";

export default function Navbar({ left, right }) {
  return (
    <div className="quizzie-navbar">
      <div className="quizzie-navbar__left">
        {left}
      </div>

      <div className="quizzie-navbar__right">
        {right}
      </div>
    </div>
  );
}
