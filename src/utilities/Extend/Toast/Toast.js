import React from 'react';
import style from  './Toast.module.css'; // You can create this file for custom styling

const Toast = ({ message, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={style.toast}>
      <div className={style.toast-message}>{message}</div>
    </div>
  );
};

export default Toast;
