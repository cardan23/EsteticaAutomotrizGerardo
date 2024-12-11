import React from "react";
import SquareImage from "@/components/SquareImage";
import ServiceProps from "@/types/ServiceProps";

const Service = ({ title, description, image, reverse }: ServiceProps) => {
  return (
    <article
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} mt-20`}
    >
      <div className="basis-1/2 p-6">
        <h3 className="text-3xl text-start mb-5">{title}</h3>
        <p className="text-justify text-3xl font-normal tracking-wide">
          {description}
        </p>
        <button className="flex items-center p-4 mt-10 rounded-full text-zinc-100 bg-sky-700 hover:bg-red-700 hover:transition,duration-200">
          <span className="text-xl">Saber mas</span>
          <span className="material-symbols-outlined text-2xl pl-5">
            arrow_forward
          </span>
        </button>
      </div>
      <div className="basis-1/2 p-6">
        <SquareImage source={image} altText="this is the alt text" />
      </div>
    </article>
  );
};

export default Service;
