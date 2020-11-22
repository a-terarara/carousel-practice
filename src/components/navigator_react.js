import React, { useEffect, useState } from "react";
import "./navigator.css";

const Navigator = () => {
  const [carouse, setCarouse] = useState([]);
  useEffect(() => {
    setCarouse([
      "./assets/1_tyokutorihiki.png",
      "./assets/2_ittaika.png",
      "./assets/3_oote.png",
      "./assets/4_ikki.png",
      "./assets/5_rikai.png",
      "./assets/6_gijutu.png",
    ]);
  }, []);
  const prevClick = () => {
    console.log("prev");
    console.log(carouse[carouse.length - 1]);
    const newCarouse = [carouse[carouse.length - 1], ...carouse].pop();
    setCarouse(newCarouse);
    console.log(carouse);
  };
  const nextClick = () => {};
  return (
    <div id="carouselWrap">
      <p id="carouselPrev" onClick={prevClick}>
        ←
      </p>
      <p id="carouselNext" onClick={nextClick}>
        →
      </p>
      <div id="carouse">
        <div id="carouselInner">
          {carouse.map((imgName) => {
            return (
              <ul className="column" key={imgName.id}>
                <li>
                  <a href="#">
                    <img src={imgName} width="100%" height="100%" alt="" />
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
