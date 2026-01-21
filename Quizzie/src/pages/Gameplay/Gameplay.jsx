import "./Gameplay.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { NavbarTokens } from "../../components/Navbar/NavbarTokens";
import { useEffect, useState } from "react";

export default function Gameplay() {
  const navigate = useNavigate();
  const { levelId } = useParams();

  const [timeLeft, setTimeLeft] = useState(10);

  // ⏱ Timer logic
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="game-root">

      {/* TOP BAR */}
      <header className="game-header">
        <div className="game-header-left">
          <button
            className="game-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
          </button>

          <div className="game-level-arrow">
            LEVEL {levelId}
          </div>
        </div>

        <NavbarTokens />
      </header>

      {/* PROGRESS + TIMER */}
      <div className="game-progress">
        <span className="game-progress-title">
          ANSWER 5 QUESTIONS
        </span>

        <div className="game-progress-row">
          <div className="game-progress-count">
            1 / 5
          </div>

          {/* ⏱ TIMER */}
          <div
            className={`game-timer ${
              timeLeft <= 3 ? "danger" : ""
            }`}
          >
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* QUESTION AREA */}
      <div className="game-card">
        <div className="game-question-strip" />

        <div className="game-options">
          <button className="game-option" />
          <button className="game-option" />
          <button className="game-option" />
          <button className="game-option" />
        </div>
      </div>

      {/* HINTS */}
      <div className="game-hints">
        <div className="hint-wrapper">
            <button className="hint-box">💡</button>
            <span className="hint-count">3</span>
        </div>

        <div className="hint-wrapper">
            <button className="hint-box">50-50</button>
            <span className="hint-count">3</span>
        </div>

        <div className="hint-wrapper">
            <button className="hint-box">⏱ +5s</button>
            <span className="hint-count">3</span>
        </div>
       </div>


    </div>
  );
}
