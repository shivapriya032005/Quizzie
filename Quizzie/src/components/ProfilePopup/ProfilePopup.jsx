import "./ProfilePopup.css";
import { X, Camera } from "lucide-react";
import { useState } from "react";

function getStage(age) {
  if (age <= 5) return "Infant";
  if (age <= 12) return "Explorer";
  if (age <= 18) return "Learner";
  if (age <= 30) return "Thinker";
  return "Master";
}

function getIQLevel(xp) {
  if (xp < 500) return 1;
  if (xp < 1000) return 2;
  if (xp < 1500) return 3;
  if (xp < 2000) return 4;
  return 5;
}

function getXPProgress(xp) {
  const level = getIQLevel(xp);
  const minXP = (level - 1) * 500;
  const maxXP = level * 500;
  return Math.min(((xp - minXP) / (maxXP - minXP)) * 100, 100);
}


export default function ProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState(
    localStorage.getItem("name") || "Brainzy"
  );
  const [gender, setGender] = useState(
    localStorage.getItem("gender") || "F"
  );
  const [country, setCountry] = useState(
    localStorage.getItem("country") || "India"
  );
  const [age, setAge] = useState(
    Number(localStorage.getItem("age")) || 20
  );

  const XP = Number(localStorage.getItem("xp")) || 1240;
  const stage = getStage(age);
  const iqLevel = getIQLevel(XP);
  const xpProgress = getXPProgress(XP);

  if (!isOpen) return null;

  const handleSave = () => {
    // ✅ Save profile locally (mock backend)
    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("country", country);
    localStorage.setItem("age", age);

    // XP & stage are system controlled (not saved here)

    // ✅ Close popup
    onClose();
  };

  return (
    <div className="profile-overlay">
      <div className="profile-modal">

        {/* HEADER */}
        <div className="profile-header">
          <h2>Profile</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* AVATAR */}
        <div className="profile-avatar">
          <div className="avatar-circle">
            <Camera size={20} />
          </div>
          <span>Change Avatar</span>
        </div>

        {/* FIELDS */}
        <div className="profile-fields">

          <label>
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Gender
            <div className="gender-boxes">
              {["F", "M", "O"].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`gender-box ${gender === g ? "active" : ""}`}
                  onClick={() => setGender(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </label>

          <label>
            Country
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>

          <label>
            Age
            <input
              type="number"
              min="1"
              max="100"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label>

          <label>
            Stage
            <input value={stage} disabled />
          </label>

          <label>
            IQ Level
            <div className="xp-bar-wrap">
              <div className="xp-bar">
                <div
                  className="xp-bar-fill"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>

              <div className="xp-bar-info">
                <span>IQ {iqLevel}</span>
                <span>{XP} XP</span>
              </div>
            </div>
          </label>


        </div>

        {/* SAVE */}
        <button
          className="profile-save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}
