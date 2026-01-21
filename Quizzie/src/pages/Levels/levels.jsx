import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ArrowLeft, Lock, Check } from "lucide-react";

import {NavbarTokens} from "../../components/Navbar/NavbarTokens";
import Footer from "../../components/Footer/Footer";

import "./Levels.css";

export default function Levels() {
  const navigate = useNavigate();

  const TOTAL_LEVELS = 100;
  const LEVELS_PER_PAGE = 20;
  const TOTAL_PAGES = TOTAL_LEVELS / LEVELS_PER_PAGE;

  const [page, setPage] = useState(1);

  // 🔒 Backend later
  const completedLevels = [1];
  const currentLevel = completedLevels.length + 1;

  const start = (page - 1) * LEVELS_PER_PAGE + 1;
  const end = Math.min(start + LEVELS_PER_PAGE - 1, TOTAL_LEVELS);

  return (
    <div className="levels-root">

      {/* ───────── HEADER ───────── */}
      <header className="levels-header">
        <div className="levels-header-left">
          <button
            className="levels-back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
          </button>

          <div className="levels-heading-arrow">
            Levels
          </div>
        </div>

        <NavbarTokens />
      </header>

      {/* ───────── BODY ───────── */}
      <main className="levels-body">

        {/* PAGINATION TOP */}
        <div className="levels-pagination-top">
          <button
            className="levels-nav-btn prev"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>

          <div className="levels-range">
            Levels {start} – {end}
          </div>

          <button
            className="levels-nav-btn next"
            disabled={page === TOTAL_PAGES}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        {/* LEVEL GRID */}
        <div className="levels-grid">
          {Array.from({ length: LEVELS_PER_PAGE }, (_, i) => {
            const level = start + i;
            if (level > TOTAL_LEVELS) return null;

            let status = "locked";
            if (completedLevels.includes(level)) status = "done";
            else if (level === currentLevel) status = "play";

            return (
              <LevelTile
                key={level}
                level={level}
                status={status}
              />
            );
          })}
        </div>

      </main>

      {/* ───────── FOOTER ───────── */}
      <Footer active="home" />
    </div>
  );
}

/* ───────── LEVEL TILE ───────── */

function LevelTile({ level, status }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked level:", level, status);
    if (status !== "locked") {
      navigate(`/game/${level}`);
    }
  };

  return (
    <div
      className={`level-tile ${status}`}
      onClick={handleClick}
    >
      <span className="level-number">{level}</span>

      {status === "done" && (
        <>
          <div className="level-check">
            <Check size={18} />
          </div>
          <span className="level-label">Completed</span>
        </>
      )}

      {status === "play" && (
        <span className="level-play">Play</span>
      )}

      {status === "locked" && (
        <Lock size={20} className="level-lock" />
      )}
    </div>
  );
}
