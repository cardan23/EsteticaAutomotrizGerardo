import TitlePage from "@/components/TitlePage/Index";
import Image from "next/image";
import redCar from "@/images/redCarWhiteFurniture.jpg";
import fistBump from "@/images/fistBump.jpg";
import bigFurniture from "@/images/bigFurniture.jpg";
import confidenceGirl from "@/images/confidenceGirl.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-5 py-5">
      <TitlePage title="Nosotros" />
      <div className="flex justify-start p-10">
        <div className="w-1/2 p-10">
          <Image className="rounded-md" src={bigFurniture} alt="" />
        </div>
        <div className="w-1/2">
          <h3 className="text-4xl pb-5">Quienes somos</h3>
          <p className="text-2xl text-justify pb-5">
            Somos una empresa con más de 35 años de experiencia en el sector de
            la estetica automotriz, limpieza y desinfección de tapicerías de
            automoviles y del hogar. Nuestra larga trayectoria nos ha permitido
            perfeccionar técnicas y adoptar productos de alta calidad que
            garantizan resultados sobresalientes.
          </p>
          <p className="text-2xl text-justify pb-5">
            La confianza de nuestros clientes es nuestra máxima prioridad. Cada
            vehículo y cada hogar son tratados con el mayor respeto y atención
            al detalle. Estamos altamente capacitados y comprometidos a ofrecer
            un servicio seguro y eficiente, asegurando que cada espacio quede
            impecable.
          </p>
          <p className="text-2xl text-justify pb-5">
            Al elegir nuestros servicios, usted opta por la tranquilidad de
            saber que sus pertenencias están en manos de expertos. Nuestro
            objetivo es no solo cumplir, sino superar sus expectativas,
            convirtiéndolo en parte de nuestra familia de clientes. Le invitamos
            a descubrir la diferencia que 35 años de dedicación y
            profesionalismo pueden aportar a su experiencia de limpieza.
          </p>
        </div>
      </div>

      <h3 className="text-4xl text-center pb-5">Nuestros Valores</h3>
      <div className="flex justify-end p-10">
        <div className="w-1/2">
          <h4 className="text-3xl text-center pb-5">Confianza</h4>
          <p className="text-2xl text-justify pb-5">
            Fomentamos relaciones sólidas y duraderas con nuestros clientes,
            basadas en la transparencia y la integridad. Cada interacción es una
            oportunidad para demostrar que su confianza en nosotros es bien
            fundamentada.
          </p>
        </div>
        <div className="w-1/2 p-10">
          <Image
            className="rounded-md object-contain"
            src={confidenceGirl}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-start p-10">
        <div className="w-1/2 p-10">
          <Image className="rounded-md" src={fistBump} alt="" />
        </div>
        <div className="w-1/2">
          <h4 className="text-3xl text-center pb-5">Seriedad</h4>
          <p className="text-2xl text-justify pb-5">
            Abordamos cada tarea con un compromiso firme y responsable. Nuestro
            enfoque serio y disciplinado garantiza que cumplimos con los plazos
            y estándares establecidos, ofreciendo siempre un servicio de alta
            calidad.
          </p>
        </div>
      </div>

      <div className="flex justify-start p-10">
        <div className="w-1/2">
          <h4 className="text-3xl text-center pb-5">Servicio</h4>
          <p className="text-2xl text-justify pb-5">
            Nuestro objetivo es brindar una experiencia excepcional a cada
            cliente. Escuchamos sus necesidades y adaptamos nuestros servicios
            para satisfacerlas, asegurando que cada detalle sea atendido con
            dedicación y cuidado.
          </p>
        </div>
        <div className="w-1/2 p-10">
          <Image className="rounded-md" src={redCar} alt="" />
        </div>
      </div>
    </div>
  );
}
