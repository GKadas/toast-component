import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  //Probably I need to handle this in Toast Playground.
  // function handleDismiss(id) {
  //   const nextToasts = toasts.filter((toast) => {
  //     return toast.id !== id;
  //   });
  //   setToasts(nextToasts);
  // }
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast variant={toast.variant} id={toasts.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
