import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded w-1/2 h-1/2">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-black"
        >
          Close
        </button>
        {/* Empty modal content */}
      </div>
    </div>
  );
};

export default Modal;
