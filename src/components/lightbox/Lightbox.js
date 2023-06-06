import React from "react";
import "./Lightbox.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../images/1.Kuchnia.jpg";
import img2 from "../../images/2.Salon.jpg";
import img3 from "../../images/3.Jadalnia.jpg";
import img4 from "../../images/4.Sypialnia2.jpg";
import img5 from "../../images/5.Pokój2.jpg";
import img6 from "../../images/6.Gabinet.jpg";
import img7 from "../../images/7.Łazienka.jpg";

function LightBox() {
  return (
    <div className="LightBoxContainer">
      <button className="ExitButton" onClick={() => {
        const ligtbox = document.querySelectorAll('#lightBox');
        ligtbox.forEach(ligtboxe => {
          ligtboxe.classList.remove('activeLightBoxL');
        });
        const ligtbox2 = document.querySelectorAll('#page');
        ligtbox2.forEach(ligtboxe => {
          ligtboxe.classList.remove('activeLightBoxP');
        });
      }}>Powrót</button>
      <div id="contentL">
        <div id="carouselImgsLightBox">
          <Carousel infiniteLoop showThumbs={false}>
            <div className="imageRL">
              <img src={img1} alt="kuchnia"></img>
            </div>
            <div className="imageL">
              <img src={img2} alt="salon"></img>
            </div>
            <div className="imageL">
              <img src={img3} alt="jadalnia"></img>
            </div>
            <div className="imageL">
              <img src={img4} alt="sypilania2"></img>
            </div>
            <div className="imageL">
              <img src={img5} alt="pokoj2"></img>
            </div>
            <div className="imageL">
              <img src={img6} alt="gabinet"></img>
            </div>
            <div className="imageRL">
              <img src={img7} alt="lazienka"></img>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default LightBox;