import React from "react";

import "./Navbar.css";

import fb from "../../images/fb 1.png";
import tel from "../../images/tel 1.png";

function Navbar() {
  return (
    <div className="Navbar" id="NavBarM">
      <div id="navPC">
        <button className="Navbuttons" onClick={()=>window.location="#"}><img src={fb} alt="fb"></img></button>
        <button className="Navbuttons" onClick={()=>window.location="#"}><img src={tel} alt="tel"></img></button>
        <button className="Navbuttons" onClick={()=>window.location="#"}>Kontakt</button>
        <button className="Navbuttons" onClick={()=>window.location="#"}>Domy</button>
        <button className="Navbuttons" onClick={()=>window.location="#"}>Lokalizacja</button>
        <button className="Navbuttons" onClick={()=>window.location="#"}>Inwestycja</button>
      </div>
      <div id="navMobile">
        <div className="Navbar2">
          <div className="Container NavContainer">
            <input className="Checkbox" type="checkbox" onClick={()=>{
              const menuA = document.querySelectorAll('#NavBarM');
              menuA.forEach(menuAe => {
                menuAe.classList.contains('activeMenu') ? menuAe.classList.remove('activeMenu') : menuAe.classList.add('activeMenu');
              });
            }}/>
            <div className="HamburgerLines">
              <span className="Lines Line1"></span>
              <span className="Lines Line2"></span>
              <span className="Lines Line3"></span>
            </div>
            <div className="MenuItems">
              <li><a href="#">Inwestycja</a></li>
              <li><a href="#">Domy</a></li>
              <li><a href="#">Lokalizacja</a></li>
              <li><a href="#">Kontakt</a></li>
              <li><a href="#"><img src={tel} alt="tel"></img></a></li>
              <li><a href="#"><img src={fb} alt="fb"></img></a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;