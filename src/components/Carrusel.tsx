import { useState, type FC } from "react"
import type { CarruselProps } from "../interfaces/CarruselProps";
import './Global.css'

const Carrusel:FC<CarruselProps> = ({clients}) => {
  const [startIndex, setStartIndex] = useState(0);

  const goToPrevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? clients.length - 3 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === clients.length - 3 ? 0 : prevIndex + 1
    );
  };
  return (
<div className="flex items-center justify-center w-[700px] m-auto">
      <button onClick={goToPrevSlide}>&lt;</button>
      <div className="client-slider flex overflow-hidden w-full transition-transform duration-500 ease-in-out">
        {clients.slice(startIndex, startIndex + 3).map((client, index) => (
          <div
            key={index}
            className={`client-slide ${index === 1 ? 'active' : ''}`}
          >
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>&gt;</button>
    </div>
  );
}


export default Carrusel
