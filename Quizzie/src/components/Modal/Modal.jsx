import "./Modal.css";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",        // sm | md | lg
  closeOnOverlay = true
}) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className={`modal-box modal-${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        {(title || onClose) && (
          <div className="modal-header">
            <h3>{title}</h3>
            <button className="modal-close" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        )}

        {/* BODY */}
        <div className="modal-body">
          {children}
        </div>

        {/* FOOTER */}
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
