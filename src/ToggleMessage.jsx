import React, { useState } from "react";
import "./ToggleMessage.css";
export default function ToggleMessage() {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="toggle">
      <h2>Toggle Message</h2>
      <button className="btn" onClick={toggle}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      <p className="message"> {isVisible && <p>Hello World!</p>}</p>
    </div>
  );
}
