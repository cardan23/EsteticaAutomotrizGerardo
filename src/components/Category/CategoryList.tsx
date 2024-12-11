import React from "react";
import Category from "./Category";
import autoCategory from "@/images/autoCategory.jpg";
import furniture2 from "@/images/furniture2.jpg";
import officeCategory from "@/images/officeCategory.jpg";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <Link href={"/servicios#autos"}>
        <Category sourceImage={autoCategory} title="Autos" />
      </Link>
      <Link href={"/servicios#hogar"}>
        <Category sourceImage={furniture2} title="Hogar" />
      </Link>
      <Link href={"/servicios#oficina"}>
        <Category sourceImage={officeCategory} title="Oficina" />
      </Link>
    </div>
  );
};

export default CategoryList;
