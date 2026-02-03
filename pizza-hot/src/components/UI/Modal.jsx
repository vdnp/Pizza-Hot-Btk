import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      const modal = dialog.current;
      if (isOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} className="modal-box">
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
