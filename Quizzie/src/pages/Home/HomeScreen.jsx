import "./HomeScreen.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { NavbarProfile } from "../../components/Navbar/NavbarProfile.jsx";
import { NavbarTokens } from "../../components/Navbar/NavbarTokens.jsx";
import ProfilePopup from "../../components/ProfilePopup/ProfilePopup.jsx";

import { Brain, Lightbulb } from "lucide-react";
import quizzieLogo from "../../assets/Images/logo.png";

export default function Home() {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false); // ✅ ADD STATE

  const handlePlayNow = () => {
    navigate("/levels");
  };

  return (
    <>
      <div className="quizzie-home">

        {/* 🔝 Top Bar */}
        <Navbar
          left={
            <NavbarProfile
              name={localStorage.getItem("name") || "Brainzy"}
              age={Number(localStorage.getItem("age")) || 20}
              xp={Number(localStorage.getItem("xp")) || 1240}
              onClick={() => setOpenProfile(true)}
            />

          }
          right={
            <NavbarTokens
              items={[
                {
                  key: "brain",
                  icon: <Brain size={16} />,
                  value: 20
                },
                {
                  key: "iq",
                  icon: <Lightbulb size={16} />,
                  value: 20
                }
              ]}
            />
          }
        />

        {/* 🧠 Main Area */}
        <main className="quizzie-home-main">
          <div className="quizzie-home-curve" />

          <div className="quizzie-home-center">
            <img
              src={quizzieLogo}
              alt="Quizzie Logo"
              className="quizzie-home-logo"
            />

            <button
              className="quizzie-play-btn"
              onClick={handlePlayNow}
            >
              Play Now
            </button>
          </div>
        </main>

        <Footer active="home" />
      </div>

      {/* ✅ PROFILE POPUP (OUTSIDE MAIN LAYOUT) */}
      <ProfilePopup
        isOpen={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </>
  );
}
