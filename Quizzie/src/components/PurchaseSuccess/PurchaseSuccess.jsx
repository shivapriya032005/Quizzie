import "./PurchaseSuccess.css";
import Modal from "../Modal/Modal";
import { CheckCircle } from "lucide-react";

export default function PurchaseSuccess({
  isOpen,
  onClose,
  title = "Purchase Successful!",
  message = "Your item has been added successfully 🎉",
  buttonText = "Awesome!"
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      footer={
        <button className="purchase-btn" onClick={onClose}>
          {buttonText}
        </button>
      }
    >
      <div className="purchase-success-content">
        <div className="purchase-icon">
          <CheckCircle size={52} />
        </div>

        <h2 className="purchase-title">{title}</h2>
        <p className="purchase-message">{message}</p>
      </div>
    </Modal>
  );
}
