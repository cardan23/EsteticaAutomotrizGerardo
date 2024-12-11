import React from "react";
import Image from "next/image";
import notFound from "@/images/notFound.jpg";

const NotFound = () => {
  return (
    <div className="lg:flex lg:items-center h-screen">
      <div className="lg:w-1/2 md:w-full">
        <Image className="rounded-lg" src={notFound} alt={"no encontrado"} />
      </div>
      <div className="lg:w-1/2 md:w-full">
        <p className="text-6xl text-center p-5">Pagina no encontrada</p>
      </div>
    </div>
  );
};

export default NotFound;
