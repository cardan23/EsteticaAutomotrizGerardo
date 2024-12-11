import titlePageProps from "@/types/titlePageProps";
import React from "react";

const TitlePage = ({ title }: titlePageProps) => {
  return (
    <h2 className="text-5xl text-center w-full text-neutral-100 bg-sky-700 rounded-lg p-4 mb-5">
      {title}
    </h2>
  );
};

export default TitlePage;
