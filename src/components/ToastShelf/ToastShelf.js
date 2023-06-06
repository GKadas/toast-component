import React, { useContext } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, handleDismiss } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
