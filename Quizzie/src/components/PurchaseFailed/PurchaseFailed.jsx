import "./PurchaseFailed.css";
import Modal from "../Modal/Modal";
import { XCircle } from "lucide-react";

export default function PurchaseFailed({
  isOpen,
  onClose,
  onRetry,
  message = "Something went wrong with your payment."
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Purchase Failed"
      size="sm"
      footer={
        <>
          <button
            className="failed-cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="failed-retry-btn"
            onClick={onRetry}
          >
            Try Again
          </button>
        </>
      }
    >
      <div className="failed-content">

        <div className="failed-icon">
          <XCircle size={48} />
        </div>

        <p className="failed-message">
          {message}
        </p>

        <p className="failed-note">
          Don’t worry — no money was deducted.
        </p>

      </div>
    </Modal>
  );
}
