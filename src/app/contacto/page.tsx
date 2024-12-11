import Image from "next/image";
import SubtitlePage from "@/components/SubtitlePage/Index";
import TitlePage from "@/components/TitlePage/Index";
import whatsappIcon from "@/icons/whatsapp.png";
import Link from "next/link";
import { MapProvider } from "@/components/Maps/MapProvider";
import { MapComponent } from "@/components/Maps/MapComponent";

export default function Contact() {
  return (
    <div className="container mx-auto px-5 py-5">
      <TitlePage title="Contacto" />
      <div className="lg:flex">
        <div className="w-full">
          <SubtitlePage title="Comunicate" />
          <p className="p-5 text-2xl text-justify">
            Si necesitas ayuda, cotizacion o agendar una cita, por favor no
            dudes en ponerte en contacto con nosotros. Estamos para servirte y
            te responderemos lo antes posible.
          </p>

          <div className="pb-5 text-2xl">
            <span className="material-symbols-outlined">call</span>
            <span className="pl-3">Teléfono: </span>
            <Link
              className="underline underline-offset-2 text-blue-400 hover:text-blue-700"
              href={"tel:3315128604"}
              target="_blank"
            >
              3315128604
            </Link>
          </div>
          <div className="flex pb-5 text-2xl">
            <Image width={30} src={whatsappIcon} alt="" />
            <span className="pl-3">WhatsApp: </span>
            <Link
              className="pl-3 underline underline-offset-2 text-blue-400 hover:text-blue-700"
              href={"https://wa.me/+5213315128604"}
              target="_blank"
            >
              +5213315128604
            </Link>
          </div>
          <div className="pb-5 text-2xl">
            <span className="material-symbols-outlined">location_on</span>
            <span className="pl-3">Google Maps: </span>
            <Link
              className="pl-3 underline underline-offset-2 text-blue-400 hover:text-blue-700"
              href={"https://maps.app.goo.gl/J4dboxMrh63b13me8"}
              target="_blank"
            >
              Ir a Maps
            </Link>
          </div>
          {/* <div className="pb-5 text-2xl">
            <span className="flex">
              <Image width={30} src={facebookIcon} alt="" />
              <span className="font-bold pl-3">Facebook: </span>
              <span className="pl-3">Esperalo pronto...</span>
            </span>
          </div> */}
          <div className="pb-5 text-2xl">
            <span className="pr-3 material-symbols-outlined">my_location</span>
            <span className="font-bold">Direccion: </span>
            <div className="pl-10">
              <p>Federico Medrano #637 col. Analco 44400</p>
              <p>Guadalajara, Jal. México</p>
            </div>
          </div>
          <div className="pb-5 text-2xl">
            <span className="pr-3 material-symbols-outlined">
              calendar_today
            </span>
            <span className="font-bold">Horario: </span>
            <div className="pl-10">
              <p>Lunes a Viernes 9:30 am - 4:00 pm</p>
              <p>Sabado 9:30 am - 2:00 pm</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-full">
          <MapProvider>
            <MapComponent />
          </MapProvider>
        </div>
      </div>
    </div>
  );
}
