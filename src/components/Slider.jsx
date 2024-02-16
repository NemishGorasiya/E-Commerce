import React, { useEffect, useState } from "react";
import { sliderImages } from "../data.js";
import "./Slider.css";
export default function Slider() {
  const data = Object.values(sliderImages);
  const [movement, setMovement] = useState(0);
  useEffect(() => {
    const sliderMove = setInterval(() => {
      if (movement === 400) {
        setMovement(0);
      } else {
        setMovement(movement + 100);
      }
    }, 3000);
    return () => clearInterval(sliderMove);
  }, [movement]);

  return (
    <div className="slider">
      {data.map((image) => (
        <div
          key={image}
          className="slide"
          style={{ transform: `translateX(-${movement}%)` }}
        >
          <img src={image} alt={image} />
        </div>
      ))}
    </div>
  );
}
