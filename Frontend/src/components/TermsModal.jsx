import React, { useEffect, useState } from "react";

const TermsModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Animate modal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 10);
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-all duration-300 ${
          showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-xl font-bold text-gray-700">Terms & Conditions</h2>
        <div className="mt-4 text-gray-600 text-sm max-h-60 overflow-y-auto">
          <p>1. You must be at least 18 years old to register.</p>
          <p>2. Your account information must be accurate and complete.</p>
          <p>3. You are responsible for your login credentials and security.</p>
          <p>
            4. Any violation of platform policies may result in account
            suspension.
          </p>
          <p>5. We reserve the right to update terms at any time.</p>
          <p>6. By registering, you agree to abide by these terms.</p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
