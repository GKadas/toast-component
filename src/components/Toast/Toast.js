import React from "react";
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

function Toast({ message, level, setShowToast }) {
  const styleLevel = `${styles.toast} ${styles[level]}`;

  const handleX = () => {
    setShowToast(false);
  };

  return (
    <div className={styleLevel}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton}>
        <X size={24} onClick={handleX} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
