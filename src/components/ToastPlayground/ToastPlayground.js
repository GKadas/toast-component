import React, { useState } from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";

import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [level, setLevel] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowToast(true);
    setMessageList([...prevState, message]);
    setMessage("");
    setLevel("notice");
  };

  function handleDismiss() {
    console.log("this was run in Toast");
    setShowToast(false);
  }
  return (
    <form onSubmit={handleClick}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {showToast && (
          <ToastShelf
            messageList={messageList}
            level={level}
            handleDismiss={handleDismiss}
          />
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
              {VARIANT_OPTIONS.map((buttonType, index) => (
                <label htmlFor={buttonType} key={index}>
                  <input
                    id={buttonType}
                    key={index}
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
