import defaultProfile from "../../assets/Images/profile.png";

export function NavbarProfile({
  name,
  age,
  xp,
  avatarSrc,
  onClick
}) {

  const getStage = (age) => {
    if (age <= 5) return "Infant";
    if (age <= 12) return "Explorer";
    if (age <= 18) return "Learner";
    if (age <= 30) return "Thinker";
    return "Master";
  };

  return (
    <div
      className="quizzie-navbar__profile"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="quizzie-navbar__avatar-wrap">
        <img
          src={avatarSrc || defaultProfile}
          alt="Avatar"
          className="quizzie-navbar__avatar"
        />
      </div>

      <div className="quizzie-navbar__badge">
        <div className="quizzie-navbar__name">{name}</div>

        {/* Stage instead of level */}
        <div className="quizzie-navbar__level">
          {getStage(age)} • XP {xp}
        </div>
      </div>
    </div>
  );
}
