import "./ConfirmPurchase.css";
import Modal from "../Modal/Modal";
import { CreditCard } from "lucide-react";

export default function ConfirmPurchase({
  isOpen,
  onCancel,
  onConfirm,
  itemName,
  price
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title="Confirm Purchase"
      size="sm"
      footer={
        <>
          <button
            className="confirm-cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-buy-btn"
            onClick={onConfirm}
          >
            Pay ₹{price}
          </button>
        </>
      }
    >
      <div className="confirm-content">

        <div className="confirm-icon">
          <CreditCard size={40} />
        </div>

        <p className="confirm-text">
          You’re about to purchase
        </p>

        <div className="confirm-item">
          {itemName}
        </div>

        <p className="confirm-note">
          This purchase uses real money.
          Please confirm to continue.
        </p>

      </div>
    </Modal>
  );
}
