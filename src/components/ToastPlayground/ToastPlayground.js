import React, { useState } from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";

import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [toasts, setToasts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  // const [checked, setChecked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowToast(true);

    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);

    setMessage("");
    setVariant("notice");
    console.log({ message, variant });
  };

  // I might have to move this to accommodate dismiss. Would it make sense to move this into Toast itself?
  // I need also to make sure that when I submit the form "notice" becomes checked

  return (
    <form onSubmit={handleClick}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {showToast && <ToastShelf toasts={toasts} setToasts={setToasts} />}
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
              {VARIANT_OPTIONS.map((buttonType, index) => (
                <label htmlFor={buttonType} key={index}>
                  <input
                    id={buttonType}
                    key={index}
                    type="radio"
                    name="variant"
                    value={buttonType}
                    onChange={() => setVariant(buttonType)}
                  />
                  {buttonType}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
