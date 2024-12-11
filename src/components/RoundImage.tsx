import ImageProps from "@/types/ImageProps";
import Image from "next/image";
import React from "react";

const RoundImage = ({ source, altText }: ImageProps) => {
  return (
    <Image
      className="rounded-full shadow-2xl"
      objectFit="cover"
      src={source}
      alt={altText}
    />
  );
};

export default RoundImage;
