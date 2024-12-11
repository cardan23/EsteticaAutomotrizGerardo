import Service from "@/components/Service.tsx/Index";
import TitlePage from "@/components/TitlePage/Index";
import tapiceria from "@/images/tapiceriaAuto.jpg";
import polish from "@/images/polish.jpg";
import mattress from "@/images/mattress.jpg";
import furniture from "@/images/furniture.jpg";
import homeChair from "@/images/homeChair.webp";
import carpet from "@/images/carpet.jpg";
import SubtitlePage from "@/components/SubtitlePage/Index";
import officeChair from "@/images/oficeChair.webp";
import officeCarpet from "@/images/officeCarpet.webp";

export default function Services() {
  return (
    <div className="container mx-auto px-5 py-5">
      <TitlePage title="Servicios" />
      {/*border white --> rounded-lg shadow-xl shadow-gray-400 bg-white" */}
      <section id="autos" className="">
        <SubtitlePage title={"Autos"} />
        <Service
          title="Pulido y encerado"
          description={
            // "Nuestro servicio de pulido y encerado de automóviles está diseñado para revitalizar y proteger la pintura de su vehículo, mejorando su apariencia y prolongando su durabilidad."
            "Nuestro servicio profesional de pulido y encerado que destaca por la calidad de nuestros productos y su capacidad para mejorar la vida de la pintura de su vehículo. Sabemos que su automóvil es una inversión significativa, y nuestro objetivo es proteger y realzar su apariencia."
          }
          image={polish}
        />
        <Service
          title="Lavado de interiores"
          description={
            "Nuestro servicio de lavado de tapicería está diseñado para limpiar, desinfectar, aromatizar y revitalizar los interiores de su vehículo, eliminando manchas, olores y suciedad acumulada."
          }
          image={tapiceria}
          reverse={true}
        />
      </section>
      <section id="hogar" className="">
        <SubtitlePage title={"Hogar"} />
        <Service
          title="Lavado de Salas"
          description={
            "Ofrecemos un servicio de limpieza de muebles que combina cuidado excepcional con un enfoque en la confianza y la honestidad. Sabemos que sus muebles son una inversión valiosa y reflejan su estilo personal, por eso tratamos cada pieza con el respeto y la atención que se merece."
          }
          image={furniture}
        />
        <Service
          title="Lavado de colchones"
          description={
            "Brindamos un servicio especializado de lavado de colchones que pone énfasis en la importancia de mantener un ambiente de descanso saludable. Los colchones pueden ser un hábitat propicio para los ácaros del polvo, alérgenos y bacterias, lo que puede afectar significativamente la calidad de su sueño y su salud."
          }
          image={mattress}
          reverse={true}
        />
        <Service
          title="Lavado de sillas de hogar"
          description={
            "Contamos con un servicio especializado de lavado de sillas que resalta la importancia de tener un entorno limpio y saludable, principalmente al momento de disfrutar sus comidas. Las sillas, especialmente aquellas en las que se come, pueden acumular restos de comida, manchas y bacterias que afectan no solo la apariencia, sino también la higiene de su hogar."
          }
          image={homeChair}
        />
        <Service
          title="Lavado de alfombras del hogar"
          description={
            "ofrecemos un servicio de lavado de alfombras que enfatiza la importancia de mantener un entorno limpio y saludable en su hogar. Las alfombras son elementos clave en la decoración y confort de cualquier espacio, pero también pueden acumular polvo, suciedad y alérgenos que afectan la calidad del aire y el bienestar de su familia."
          }
          image={carpet}
          reverse={true}
        />
      </section>
      <section id="oficina" className="">
        <SubtitlePage title={"Oficina"} />
        <Service
          title="Lavado de sillas de oficina"
          description={
            "Realizamos un servicio especializado de lavado de sillas de oficina, especialmente para promover un entorno de trabajo saludable y agradable. Dado que pasamos una gran parte de nuestra jornada laboral sentados, es fundamental asegurarnos de que nuestras sillas estén limpias y en óptimas condiciones."
          }
          image={officeChair}
        />
        <Service
          title="Lavado de alfombras de oficina"
          description={
            "ofrecemos un servicio de lavado de alfombras de oficina que pone un fuerte énfasis en la salud y el bienestar de su equipo. Las alfombras, a menudo, acumulan polvo, ácaros, alérgenos y manchas a lo largo del tiempo, lo que puede afectar la calidad del aire y el ambiente general de trabajo."
          }
          image={officeCarpet}
          reverse={true}
        />
      </section>
    </div>
  );
}
