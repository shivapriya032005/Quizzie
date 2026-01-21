import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ArrowLeft } from "lucide-react";
import "./AboutUs.css";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-root">

      {/* HEADER */}
      <header className="about-header">
        <button className="about-back" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h2>About Us</h2>
      </header>

      {/* CONTENT */}
      <main className="about-content">

        <section className="about-section">
          <h3>Who We Are</h3>
          <p>
            Quizzie, powered by <strong>Pheoaura</strong>, is a fun and
            interactive learning game designed to make knowledge exciting
            for everyone. We believe learning should feel like play —
            simple, joyful, and rewarding.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            Our mission is to blend education and entertainment through
            casual games that help players learn, grow, and think smarter
            — without pressure or boredom.
          </p>
        </section>

        <section className="about-section">
          <h3>What Makes Quizzie Special</h3>
          <ul>
            <li>🎮 Casual, game-first learning experience</li>
            <li>🧠 Brain-boosting quizzes and challenges</li>
            <li>✨ Cute design with emotional UX</li>
            <li>🏆 Rewards, levels, and achievements</li>
            <li>🔒 Safe and kid-friendly environment</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>Our Vision</h3>
          <p>
            We envision a world where learning feels natural and fun.
            Quizzie aims to inspire curiosity, creativity, and confidence
            in learners of all ages.
          </p>
        </section>

        <section className="about-section">
          <h3>Made With ❤️</h3>
          <p>
            Quizzie is carefully crafted with love, creativity, and
            attention to detail — from gameplay mechanics to UI animations.
            We’re constantly improving based on player feedback.
          </p>
        </section>

      </main>
    </div>
  );
}
