import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'ffffff',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAYS_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, .7)',
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAYS_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('modal-window'),
  );
}
