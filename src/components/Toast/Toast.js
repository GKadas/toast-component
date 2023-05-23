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

function Toast({ messageList, level, handleDismiss }) {
  const styleLevel = `${styles.toast} ${styles[level]}`;
  const Icon = ICONS_BY_VARIANT[level];

  /*
  Need to convert this to
  render from the array with map and find a way to deal with the icon...
  */

  return (
    <div className={styleLevel}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton}>
        <X size={24} onClick={handleDismiss} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
