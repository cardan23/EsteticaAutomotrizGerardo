import titlePageProps from "@/types/titlePageProps";
import React from "react";

const SubtitlePage = ({ title }: titlePageProps) => {
  return (
    <h2 className="text-4xl text-start text-neutral-100 w-1/2 bg-blue-950 rounded-lg p-3 mb-5 mt-5">
      {title}
    </h2>
  );
};

export default SubtitlePage;
