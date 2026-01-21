import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { WifiOff } from "lucide-react";
import "./NoInternet.css";

export default function NoInternet() {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setOffline(true);
    const handleOnline = () => setOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <Modal
      isOpen={offline}
      title="No Internet Connection"
      size="sm"
      closeOnOverlay={false}
    >
      <div className="no-internet-content">
        <div className="no-internet-icon">
          <WifiOff size={44} />
        </div>

        <p className="no-internet-text">
          You’re offline right now.
        </p>

        <p className="no-internet-sub">
          Please check your connection and try again.
        </p>
      </div>
    </Modal>
  );
}
