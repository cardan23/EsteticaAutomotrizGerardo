import React from "react";
import Service from "@/components/Service.tsx/Index";
import tapiceria from "@/images/tapiceriaAuto.jpg";
import polish from "@/images/polish.jpg";
import mattress from "@/images/mattress.jpg";
import furniture from "@/images/furniture.jpg";
import chair from "@/images/oficeChair.webp";
import carpet from "@/images/carpet.jpg";
import officeChair from "@/images/oficeChair.webp";
import officeCarpet from "@/images/officeCarpet.webp";

const ServiceList = () => {
  return (
    <>
      {/*border white --> rounded-lg shadow-xl shadow-gray-400 bg-white" */}
      <section id="autos" className="">
        <Service title="Pulido y encerado" image={polish} />
        <Service
          title="Lavado de interiores"
          image={tapiceria}
          reverse={true}
        />
      </section>
      <section id="hogar" className="">
        <Service title="Lavado de Salas" image={furniture} />
        <Service title="Lavado de colchones" image={mattress} reverse={true} />
        <Service title="Lavado de sillas" image={chair} />
        <Service title="Lavado de alfombras" image={carpet} reverse={true} />
      </section>
      <section id="oficina" className="">
        <Service title="Lavado de sillas" image={officeChair} />
        <Service
          title="Lavado de alfombras"
          image={officeCarpet}
          reverse={true}
        />
      </section>
    </>
  );
};

export default ServiceList;
