import React, { Children } from "react";
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

function Toast({ variant, id, handleDimiss, children }) {
  const styleLevel = `${styles.toast} ${styles[variant]}`;
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={styleLevel}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X size={24} />{" "}
        {/* might need here a handleDismiss. Currently since we are in a form, every onCLick (submit) triggers the new toast. */}
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
