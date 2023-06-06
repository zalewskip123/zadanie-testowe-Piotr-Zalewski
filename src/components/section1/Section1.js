import React from "react";

import "./Section1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../images/1.Kuchnia.jpg";
import img2 from "../../images/2.Salon.jpg";
import img3 from "../../images/3.Jadalnia.jpg";
import img4 from "../../images/4.Sypialnia2.jpg";
import img5 from "../../images/5.Pokój2.jpg";
import img6 from "../../images/6.Gabinet.jpg";
import img7 from "../../images/7.Łazienka.jpg";

function DisplayImageInLighbox()
{
  const ligtbox = document.querySelectorAll('#lightBox');
  ligtbox.forEach(ligtboxe => {
    ligtboxe.classList.add('activeLightBoxL');
  });
  const ligtbox2 = document.querySelectorAll('#page');
  ligtbox2.forEach(ligtboxe => {
    ligtboxe.classList.add('activeLightBoxP');
  });
}

function Section1() {
  return (
    <>
      <section className="Section1">
        <p>Poznaj możliwości wnętrz</p>
        <div id="carouselImgs">
            <Carousel infiniteLoop autoPlay interval={10000} showThumbs={false} onClickItem={()=>DisplayImageInLighbox()}>
              <div className="imageR">
                <img src={img1} alt="kuchnia"></img>
              </div>
              <div className="image">
                <img src={img2} alt="salon"></img>
              </div>
              <div className="image">
                <img src={img3} alt="jadalnia"></img>
              </div>
              <div className="image">
                <img src={img4} alt="sypilania2"></img>
              </div>
              <div className="image">
                <img src={img5} alt="pokoj2"></img>
              </div>
              <div className="image">
                <img src={img6} alt="gabinet"></img>
              </div>
              <div className="imageR">
                <img src={img7} alt="lazienka"></img>
              </div>
            </Carousel>
        </div>
      </section>
      <hr id="hr1" />
    </>
  );
}

export default Section1;