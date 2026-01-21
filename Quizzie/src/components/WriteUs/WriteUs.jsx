import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

export default function WriteUsModal({ isOpen, onClose, onSuccess }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setSubject("");
      setMessage("");
      onClose();
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* HEADER */}
      <div className="modal-header">
        <h3>Write to us 💬</h3>
      </div>

      {/* BODY */}
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

      {/* FOOTER */}
      <div className="modal-footer">
        <button
          className="btn-cancel"
          onClick={onClose}
          disabled={sending}
        >
          Cancel
        </button>

        <button
          className="btn-primary"
          onClick={sendMessage}
          disabled={sending}
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </div>
    </Modal>
  );
}
