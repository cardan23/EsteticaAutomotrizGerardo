import React from "react";
import HeaderOption from "./HeaderOption";
import Image from "next/image";
import LogoImage from "@/images/output-logo.png";
import Contact from "./Contact";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav id="navigation" className="flex flex-row">
      <div className="basis-1/4 bg-zinc-950 p-4">
        <div className="flex justify-end">
          <Link href={"/"}>
            <Image width={120} alt="logo" src={LogoImage} />
          </Link>
          <Link href={"/"}>
            <p className="p-2 text-2xl whitespace-pre-line text-neutral-100">
              Estetica Automotriz Gerardo
            </p>
          </Link>
        </div>
      </div>
      <div className="basis-3/4 bg-zinc-950">
        <ul className="flex justify-end p-4">
          <HeaderOption text="Servicios" href="/servicios" />
          <HeaderOption text="Categorias" href="/categorias" />
          <HeaderOption text="Nosotros" href="/nosotros" />
          {/* <HeaderOption text="Galeria" href="/galeria" />
          <HeaderOption text="Testimonios" href="/testimonios" /> */}
          <HeaderOption text="Contacto" href="/contacto" />
          <Contact phone="3315128604" email="email@outlook.com" />
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
