import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { NavbarTokens } from "../../components/Navbar/NavbarTokens";
import Footer from "../../components/Footer/Footer";

import PurchaseSuccess from "../../components/PurchaseSuccess/PurchaseSuccess";
import PurchaseFailed from "../../components/PurchaseFailed/PurchaseFailed";
import ConfirmPurchase from "../../components/ConfirmPurchase/ConfirmPurchase";

import "./Shop.css";

import {
  ArrowLeft,
  Brain,
  Lightbulb,
  BadgePercent,
  Ban
} from "lucide-react";

export default function Shop() {
  const navigate = useNavigate();

  // EXISTING POPUP STATES
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ NEW: TOKEN ERROR POPUP STATE
  const [popupType, setPopupType] = useState(null);
  // "NO_BRAIN" | "NO_IQ" | null

  const handleBuyClick = (item) => {
    setSelectedItem(item);

    // 💰 REAL MONEY → CONFIRM POPUP
    if (item.price.startsWith("₹")) {
      setConfirmOpen(true);
      return;
    }

    // 🧠 / 💡 TOKEN CHECK (SIMULATED — replace with API later)
    const hasEnoughBrain = true;
    const hasEnoughIQ = true;

    if (item.title === "Brain Points" && !hasEnoughBrain) {
      setPopupType("NO_BRAIN");
      return;
    }

    if (item.title === "IQ Tokens" && !hasEnoughIQ) {
      setPopupType("NO_IQ");
      return;
    }

    // ✅ TOKEN PURCHASE SUCCESS
    setSuccessOpen(true);
  };

  const handleConfirmPurchase = () => {
    setConfirmOpen(false);

    // 🔴 Simulate payment (replace with Razorpay)
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      setSuccessOpen(true);
    } else {
      setFailedOpen(true);
    }
  };

  return (
    <div className="shop-root">

      {/* HEADER */}
      <header className="shop-header">
        <div className="shop-header-left">
          <button
            className="shop-back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
          </button>

          <div className="shop-title">
            Shop
          </div>
        </div>

        <NavbarTokens />
      </header>

      {/* BODY */}
      <main className="shop-body">
        <div className="shop-list">

          <ShopItem icon={<Brain />} title="Brain Points" subtitle="x500" price="10" token onBuy={handleBuyClick} />
          <ShopItem icon={<Lightbulb />} title="IQ Tokens" subtitle="x30" price="₹25" onBuy={handleBuyClick} />
          <ShopItem icon={<Brain />} title="Brain Points" subtitle="Unlimited x1 Day" price="₹25" onBuy={handleBuyClick} />
          <ShopItem icon={<Lightbulb />} title="IQ Tokens" subtitle="Unlimited x1 Day" price="₹99" onBuy={handleBuyClick} />
          <ShopItem icon={<BadgePercent />} title="Entry Offer" subtitle="No ads, 50 IQ tokens, 500 Brain Points, Reveal answer x10, 50-50 x10" price="₹149" onBuy={handleBuyClick} />
          <ShopItem icon={<Lightbulb />} title="Hints" subtitle="Reveal Answer x5, 50-50 x5, Timer +5s x5" price="150" token onBuy={handleBuyClick} />
          <ShopItem icon={<Ban />} title="No Ads" subtitle="for 3 Days" price="₹25" onBuy={handleBuyClick} />
          <ShopItem icon={<Ban />} title="No Ads" subtitle="for 1 Month" price="₹149" onBuy={handleBuyClick} />

        </div>
      </main>

      {/* CONFIRM PURCHASE (₹ ONLY) */}
      {selectedItem && (
        <ConfirmPurchase
          isOpen={confirmOpen}
          onCancel={() => setConfirmOpen(false)}
          onConfirm={handleConfirmPurchase}
          itemName={`${selectedItem.title} (${selectedItem.subtitle})`}
          price={selectedItem.price}
        />
      )}

      {/* SUCCESS POPUP */}
      {selectedItem && (
        <PurchaseSuccess
          isOpen={successOpen}
          onClose={() => setSuccessOpen(false)}
          title="Item Unlocked!"
          message={`You successfully purchased ${selectedItem.title} 🎉`}
        />
      )}

      {/* FAILED POPUP */}
      {selectedItem && (
        <PurchaseFailed
          isOpen={failedOpen}
          onClose={() => setFailedOpen(false)}
          onRetry={() => {
            setFailedOpen(false);
            setConfirmOpen(true);
          }}
        />
      )}

      {/* 🧠 NO BRAIN POINTS POPUP */}
      {popupType === "NO_BRAIN" && (
        <PurchaseFailed
          isOpen={true}
          title="🧠 No Brain Points Available"
          message="You don’t have enough brain points to complete this purchase."
          onClose={() => setPopupType(null)}
        />
      )}

      {/* 💡 NO IQ TOKENS POPUP */}
      {popupType === "NO_IQ" && (
        <PurchaseFailed
          isOpen={true}
          title="💡 No IQ Tokens Available"
          message="You don’t have enough IQ tokens. Earn more by playing quizzes."
          onClose={() => setPopupType(null)}
        />
      )}

      {/* FOOTER */}
      <Footer active="shop" />
    </div>
  );
}

/* ---------- SHOP ITEM ---------- */

function ShopItem({ icon, title, subtitle, price, token, onBuy }) {
  return (
    <div className="shop-item">
      <div className="shop-item-left">
        <span className="shop-icon">{icon}</span>

        <div className="shop-text">
          <div className="shop-title-text">{title}</div>
          <div className="shop-subtitle">{subtitle}</div>
        </div>
      </div>

      {/* ⚠️ BUTTON STYLE NOT TOUCHED */}
      <div
        className="shop-price"
        onClick={() => onBuy({ title, subtitle, price })}
      >
        {token && <Lightbulb size={18} />}
        {price}
      </div>
    </div>
  );
}
