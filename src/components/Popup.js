import React, { useState, useEffect } from "react";
import "../App.css";
import Form from "./Form";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`popup ${isVisible ? "visible" : "hidden"}`}>
      <button className="close" onClick={handleClose}>
        x
      </button>
      <div className="popup-content">
        <h2>Join our newsletter!</h2>
        <Form />
      </div>
    </div>
  );
};

export default Popup;
