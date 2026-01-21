import { Routes, Route } from "react-router-dom";

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/Home/HomeScreen.jsx";
import Settings from "./pages/Settings/Settings.jsx"; // (can be placeholder for now)
import Shop from "./pages/Shop/Shop.jsx"; // (can be placeholder for now)
import Levels from "./pages/Levels/levels.jsx";
import Gameplay from "./pages/Gameplay/Gameplay.jsx";
import NoInternet from "./components/NoInternet/NoInternet";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function App() {
  return (
    <>
    <NoInternet />
    <Routes>

      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/game/:levelId" element={<Gameplay />} />
      <Route path="/gameplay" element={<Gameplay />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    </>
  );}
