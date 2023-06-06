import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [toasts, setToasts] = React.useState([]);
  const [showToast, setShowToast] = React.useState(false);

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

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
  };

  return (
    <ToastContext.Provider
      value={{
        id,
        message,
        variant,
        toasts,
        showToast,
        handleClick,
        handleDismiss,
        setMessage,
        setVariant,
        setToasts,
        setShowToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
