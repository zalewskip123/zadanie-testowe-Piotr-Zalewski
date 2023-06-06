import React from "react";
import "./Popup.css";

import img1 from "../../images/1.Kuchnia.jpg";

function Popup() {
  return (
    <div id="Popup">
      <button className="ExitButtonP" onClick={() => {
        const popupD = document.querySelectorAll('#Popup');
        popupD.forEach(popupDe => {
          popupDe.classList.remove('activePopup');
        });
      }}>Powrót</button>
      <img src={img1} alt="kuchnia"></img>
    </div>
  );
}

export default Popup;