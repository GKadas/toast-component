import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  //Probably I need to handle this in Toast Playground.

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            id={toasts.id}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
