import React from "react";
import Image from "next/image";
import ferrari from "@/images/ferrariBanner.jpg";

const GalleryElement = () => {
  return (
    <div className="">
      <Image
        className="w-full rounded-lg shadow-xl shadow-gray-400 bg-white transition duration-150 hover:scale-110"
        src={ferrari}
        alt=""
      />
    </div>
  );
};

export default GalleryElement;
