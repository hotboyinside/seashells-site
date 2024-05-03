import { useCallback, useEffect, useMemo, useRef } from "react";

import './Modal.css'

export default function Popup({ open, locked, onClose, children, ...props }) {
  const modalRef = useRef(null);

  const dialogClasses = useMemo(() => {
    const _arr = [["modal"]];
    if (!open) _arr.push(["modal--closing"]);

    return _arr.join(" ");
  }, [open]);

  const onCancel = useCallback(
    (e) => {
      e.preventDefault();
      if (!locked) onClose();
    },
    [locked, onClose]
  );

  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el && !locked) onClose();
    },
    [locked, onClose]
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) el.close();
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) el.showModal();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className={dialogClasses}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className={["modal__container"]}>{children}</div>
    </dialog>
  );
}
