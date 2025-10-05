import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body 
  );
}

function ReactPortal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Portal Example</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from Modal 👋</h2>
      </Modal>
    </>
  );
}

export default ReactPortal;
