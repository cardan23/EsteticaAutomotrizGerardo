import React from "react";
import Image from "next/image";
import ferrari from "@/images/ferrariBanner.jpg";
import GalleryElement from "./GalleryElement";

const Gallery = () => {
  return (
    <div className="grid grid-cols-5 gap-6 rounded-lg shadow-xl shadow-gray-400 bg-white p-5">
      <div className="col-span-2 row-span-2 rounded-lg shadow-xl shadow-gray-400 bg-white transition duration-150 hover:scale-110">
        <Image objectFit="cover" src={ferrari} alt="" />
      </div>
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <div className="col-span-2 row-span-2 rounded-lg shadow-xl shadow-gray-400 bg-white transition duration-150 hover:scale-110">
        <Image objectFit="cover" src={ferrari} alt="" />
      </div>
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <div className="col-span-2 row-span-2 rounded-lg shadow-xl shadow-gray-400 bg-white transition duration-150 hover:scale-110">
        <Image objectFit="cover" src={ferrari} alt="" />
      </div>
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
      <GalleryElement />
    </div>
  );
};

export default Gallery;
