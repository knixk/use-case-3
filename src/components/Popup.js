import React, { useState, useEffect } from "react";
import "../App.css"; // Import your CSS file
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
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          x
        </span>
        <h2>Welcome to our website!</h2>
        <Form />
      </div>
    </div>
  );
};

export default Popup;
