import React from "react";
import Image from "next/image";
import ImageProps from "@/types/ImageProps";

const SquareImage = ({ source, altText }: ImageProps) => {
  return (
    <Image
      className="w-full rounded-lg shadow-md shadow-gray-600"
      objectFit="cover"
      alt={altText}
      src={source}
    />
  );
};

export default SquareImage;
