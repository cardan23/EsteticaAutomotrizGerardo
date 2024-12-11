import React from "react";
import Image from "next/image";
import ferraryBanner from "@/images/ferrariBanner.jpg";
import ShinningCar from "@/images/ShinningCar.jpg";

const Banner = () => {
  return (
    <div className="flex container mx-auto px-5 py-5">
      <div className="lg:w-1/2 md:w-full">
        <header>
          <h1 className="text-6xl">
            Detallado automotriz y limpieza de muebles de hogar y oficina
          </h1>
          <p className="text-4xl">Servicio a domicilio</p>
          <button className="text-3xl">Comunicate</button>
        </header>
      </div>
      <div className="flex lg:w-1/2 md:w-full">
        <picture className="lg:w-1/2 md:w-full">
          <Image className="" src={ferraryBanner} alt="" />
        </picture>
        <picture className="lg:w-1/2 md:w-full">
          <Image className="" src={ShinningCar} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Banner;
