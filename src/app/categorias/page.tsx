import CategoryList from "@/components/Category/CategoryList";
import TitlePage from "@/components/TitlePage/Index";

export default function Categories() {
  return (
    <div className="container mx-auto px-5 py-5">
      <TitlePage title="Categorias" />
      <p className="text-center text-4xl mr-12 ml-12 p-4">
        Nos dedicamos a ofrecer servicios de limpieza en tres ámbitos
        fundamentales: automóviles, espacios de hogar y oficina. Basado en
        nuestra experiencia, nos enorgullece brindar un servicio integral que
        prioriza la confianza y la responsabilidad en cada trabajo.
      </p>
      <CategoryList />
    </div>
  );
}
