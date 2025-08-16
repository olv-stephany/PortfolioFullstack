import React from "react";
import WallLeft from "../images/sticker-wall-blue-left.png";
import WallRight from "../images/sticker-wall-blue-right.png";

const FrameSticker = () => {
  return (
    <>
      <img
        src={WallLeft}
        alt="parede azul posicionada na esquerda detalhada em relevos de flores"
        className="hidden lg:block absolute top-6 left-0 h-screen w-auto object-cover z-10 fade-in pointer-events-none"
      />
      <img
        src={WallRight}
        alt="parede azul posicionada na direita detalhada em relevos de flores"
        className="hidden lg:block absolute top-0 right-0 h-screen w-auto object-cover z-10 fade-in pointer-events-none"
      />
    </>
  );
};

export default FrameSticker;
