import React from "react";
import LogoImage from "@/images/output-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-row">
      <div className="basis-1/4 bg-zinc-950">
        <div className="flex justify-end">
          <Image width={120} alt="logo" src={LogoImage} />
          <p className="p-2 text-2xl whitespace-pre-line text-neutral-100">
            Estetica Automotriz Gerry&apos;s
          </p>
        </div>
      </div>
      <div className="basis-3/4 bg-zinc-950 text-neutral-100">footer here</div>
    </footer>
  );
};

export default Footer;
