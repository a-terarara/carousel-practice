import React from "react";
import "./navigator.css";

const Content = () => {
  return (
    <div id="carouselWrap">
      <p id="carouselPrev">←</p>
      <p id="carouselNext">→</p>
      <div id="carouse">
        <div id="carouselInner">
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/1_tyokutorihiki.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/2_ittaika.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/3_oote.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/4_ikki.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/5_rikai.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
          <ul className="column">
            <li>
              <a href="#">
                <img src="./assets/6_gijutu.png" width="100%" height="100%" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
