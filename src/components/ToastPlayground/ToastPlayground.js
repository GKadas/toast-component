import React, { useState } from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";

import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
  };

  function handleDismiss() {
    console.log("this was run in Toast");
    setShowToast(false);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <Toast message={message} level={level} handleDismiss={handleDismiss} />
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((buttonType) => (
              <label htmlFor={buttonType}>
                <input
                  id={buttonType}
                  key={buttonType}
                  type="radio"
                  name="variant"
                  value={buttonType}
                  onChange={() => setLevel(buttonType)}
                />
                {buttonType}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleClick}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
