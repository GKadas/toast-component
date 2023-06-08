import React, { Children, useContext } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, children }) {
  const { variant, handleDismiss } = useContext(ToastContext);
  const styleLevel = `${styles.toast} ${styles[variant]}`;
  const Icon = ICONS_BY_VARIANT[variant];

  {
    /* I wasnt to look at the solution for this one to understand
how context is used to pass the ID through context */
  }

  return (
    <div className={styleLevel}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => handleDismiss(id)}>
        <X size={24} /> <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
