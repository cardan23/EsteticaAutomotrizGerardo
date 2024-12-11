import { StaticImageData } from "next/image";

interface ServiceProps {
  title: string;
  image: StaticImageData;
  description?: string;
  reverse?: boolean;
}

export default ServiceProps;
