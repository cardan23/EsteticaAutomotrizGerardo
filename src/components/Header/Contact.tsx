import React from "react";
import ContactProps from "@/types/ContactProps";

const Contact = ({ phone }: ContactProps) => {
  return (
    <div className="flex justify-center items-center p-2 text-base text-neutral-100 hover:text-blue-400">
      <span className="material-symbols-outlined p-1">call</span>
      <span>{phone}</span>
    </div>
  );
};

export default Contact;
