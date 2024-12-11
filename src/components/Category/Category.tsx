import React from "react";
import CategoryProps from "@/types/CategoryProps";
import SquareImage from "../SquareImage";

const Category = ({ title, sourceImage }: CategoryProps) => {
  return (
    <div className="p-10 transition duration-150 hover:scale-110 hover:rounded-lg">
      {/* <RoundImage source={polishSquare} altText="" /> */}
      <SquareImage source={sourceImage} altText="" />
      <h3 className="text-3xl text-center pt-10">{title}</h3>
    </div>
  );
};

export default Category;
