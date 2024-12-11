import React from "react";
import ServiceDescriptionProps from "@/types/ServiceDescriptionProps";

const ServiceDescription = ({ text, alignText }: ServiceDescriptionProps) => {
  return (
    <>
      <h3 className="text-3xl text-center p-4">Servicio 1</h3>
      <p className={`${alignText} text-lg font-normal tracking-wide`}>{text}</p>
    </>
  );
};

export default ServiceDescription;
