import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import { NavbarTokens } from "../../components/Navbar/NavbarTokens.jsx";
import "./Settings.css";
import Modal from "../../components/Modal/Modal.jsx";
import ConfirmPurchase from "../../components/ConfirmPurchase/ConfirmPurchase";
import PurchaseSuccess from "../../components/PurchaseSuccess/PurchaseSuccess";

import {
  ArrowLeft,
  Info,
  Brain,
  Volume2,
  Vibrate,
  Ban,
  HelpCircle,
  Star,
  Shield,
  LogOut,
  Trash2
} from "lucide-react";

export default function Settings() {
  const navigate = useNavigate();

  // WRITE US STATE
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const [soundOn, setSoundOn] = useState(true);
  const [vibrationOn, setVibrationOn] = useState(true);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [popup, setPopup] = useState(null);
  // "LOGOUT" | "DELETE_1" | "DELETE_2" | "PRIVACY" | "WRITE_US"

  // ✅ SEND MESSAGE FUNCTION (FIX)
  const sendMessage = async () => {
    if (!subject.trim() || !message.trim()) {
      alert("Please fill in both subject and message");
      return;
    }

    try {
      setSending(true);

      const res = await fetch("/api/support/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ subject, message })
      });

      if (!res.ok) throw new Error("Failed");

      setSubject("");
      setMessage("");
      setPopup(null);
      setSuccessOpen(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="settings-root">

      {/* HEADER */}
      <header className="settings-header">
        <div className="header-left">
          <button className="header-back" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <div className="header-title">Settings</div>
        </div>
        <NavbarTokens />
      </header>

      {/* BODY */}
      <main className="settings-body">
        <div className="settings-content">

          <Section title="Preferences">
            <Item
              icon={<Brain />}
              label="Practice"
              onClick={() => navigate("/gameplay")}
            />


            <Toggle icon={<Volume2 />} label="Sounds" value={soundOn} onToggle={() => setSoundOn(!soundOn)} />
            <Toggle icon={<Vibrate />} label="Vibrations" value={vibrationOn} onToggle={() => setVibrationOn(!vibrationOn)} />
            <Item icon={<Ban />} label="Remove Ads" onClick={() => setConfirmOpen(true)} />
          </Section>

          <Section title="Support">
            {/* ✅ FIXED: OPEN MODAL, NOT MAILTO */}
            <Item
              icon={<HelpCircle />}
              label="Write us"
              onClick={() => setPopup("WRITE_US")}
            />

            <Item
              icon={<Star />}
              label="Rate Us"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
            />
            <Item
              icon={<Shield />}
              label="Privacy Policy"
              onClick={() => navigate("/privacy-policy")}
            />

            <Item
              icon={<Info />}
              label="About Us"
              onClick={() => navigate("/about-us")}
            />

          </Section>

          <Section title="Danger Zone">
            <button className="danger-btn logout" onClick={() => setPopup("LOGOUT")}>
              <LogOut /> Logout
            </button>
            <button className="danger-btn delete" onClick={() => setPopup("DELETE_1")}>
              <Trash2 /> Delete Account
            </button>
          </Section>

        </div>
      </main>

      {/* REMOVE ADS – SAME AS SHOP */}
      <ConfirmPurchase
        isOpen={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          setSuccessOpen(true);
        }}
        itemName="Remove Ads"
        price="₹149"
      />

      <PurchaseSuccess
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Ads Removed"
        message="Enjoy an ad-free experience 🎉"
      />

      {/* 😢 LOGOUT */}
      <Modal isOpen={popup === "LOGOUT"} onClose={() => setPopup(null)}>
        <div className="modal-header">
          <h3>Logging out…</h3>
        </div>
        <div className="modal-body">
          <div className="modal-emoji">😢</div>
          <p className="emotional">
            We’ll miss you. Are you sure you want to log out?
          </p>
        </div>
        <div className="modal-footer center">
          <button className="btn-cancel" onClick={() => setPopup(null)}>
            Cancel
          </button>
          <button className="btn-primary" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>
      </Modal>

      {/* 😭 DELETE STEP 1 */}
      <Modal isOpen={popup === "DELETE_1"} onClose={() => setPopup(null)}>
        <div className="modal-header">
          <h3>Delete account?</h3>
        </div>

        <div className="modal-body">
          <div className="modal-emoji">😭</div>
          <p className="emotional">
            All your progress will be lost.
          </p>
        </div>

        <div className="modal-footer center">
          <button
            className="btn-cancel"
            onClick={() => setPopup(null)}
          >
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={() => setPopup("DELETE_2")}
          >
            Continue
          </button>
        </div>
      </Modal>


      {/* 💔 DELETE STEP 2 */}
      <Modal isOpen={popup === "DELETE_2"} onClose={() => setPopup(null)}>
        <div className="modal-header">
          <h3>This is permanent</h3>
        </div>
        <div className="modal-body">
          <div className="modal-emoji">💔</div>
          <p className="emotional">
            There is no way to recover your account.
          </p>
        </div>
        <div className="modal-footer center">
          <button className="btn-cancel" onClick={() => setPopup(null)}>
            No
          </button>
          <button className="btn-danger" onClick={() => navigate("/signup")}>
            Delete
          </button>
        </div>
      </Modal>

      {/* ✉️ WRITE US */}
      <Modal isOpen={popup === "WRITE_US"} onClose={() => setPopup(null)}>
        <div className="modal-header">
          <h3>Write to us 💬</h3>
        </div>
        <div className="modal-body">
          <input
            className="modal-input"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="modal-textarea"
            placeholder="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={() => setPopup(null)} disabled={sending}>
            Cancel
          </button>
          <button className="btn-primary" onClick={sendMessage} disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
      </Modal>

      {/* 🔐 PRIVACY */}
      <Modal isOpen={popup === "PRIVACY"} onClose={() => setPopup(null)}>
        <div className="modal-header">
          <h3>Privacy Policy</h3>
        </div>
        <div className="modal-body">
          <p>Your data is safe and never shared.</p>
        </div>
        <div className="modal-footer center">
          <button className="btn-cancel" onClick={() => setPopup(null)}>
            Close
          </button>
        </div>
      </Modal>

      <Footer active="settings" />
    </div>
  );
}

/* ---------- HELPERS ---------- */

function Section({ title, children }) {
  return (
    <div className="settings-section">
      <h3>{title}</h3>
      <div className="settings-card">{children}</div>
    </div>
  );
}

function Item({ icon, label, onClick }) {
  return (
    <button className="settings-item" onClick={onClick}>
      <div className="item-left">
        <span className="item-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <span className="item-arrow">›</span>
    </button>
  );
}

function Toggle({ icon, label, value, onToggle }) {
  return (
    <div className="settings-item">
      <div className="item-left">
        <span className="item-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <button className={`toggle ${value ? "on" : ""}`} onClick={onToggle}>
        <span />
      </button>
    </div>
  );
}
