import TitlePage from "@/components/TitlePage/Index";
import CategoryList from "@/components/Category/CategoryList";
import ServiceList from "@/components/Service.tsx/ServiceList";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>
      <section id="title">
        <TitlePage title="Estetica Automotriz Gerardo" />
      </section>
      <section id="categories">
        <CategoryList />
      </section>
      <section id="Services">
        <ServiceList />
      </section>
    </>
  );
}
