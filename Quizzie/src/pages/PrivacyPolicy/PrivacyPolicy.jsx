import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ArrowLeft } from "lucide-react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-root">

      {/* HEADER */}
      <header className="privacy-header">
        <button className="privacy-back" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h2>Privacy Policy</h2>
      </header>

      {/* CONTENT */}
      <main className="privacy-content">
        <section>
          <h3>Introduction</h3>
          <p>
            Welcome to Quizzie (Pheoaura). Your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect
            your information when you use our app.
          </p>
        </section>

        <section>
          <h3>Information We Collect</h3>
          <p>
            We may collect basic information such as your username, email
            address (if provided), gameplay progress, scores, and in-app
            activity to improve your experience.
          </p>
        </section>

        <section>
          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and improve gameplay features</li>
            <li>To save your progress and preferences</li>
            <li>To respond to support requests</li>
            <li>To maintain app security</li>
          </ul>
        </section>

        <section>
          <h3>Data Security</h3>
          <p>
            We take reasonable measures to protect your data and do not
            share your personal information with third parties except
            where required by law.
          </p>
        </section>

        <section>
          <h3>Children’s Privacy</h3>
          <p>
            Quizzie is designed to be kid-friendly. We do not knowingly
            collect personal information from children without parental
            consent.
          </p>
        </section>

        <section>
          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any
            changes will be reflected on this page.
          </p>
        </section>

        <section>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, you can
            contact us through the “Write Us” option in Settings.
          </p>
        </section>
      </main>
    </div>
  );
}
