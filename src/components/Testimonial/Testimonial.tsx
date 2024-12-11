import React from "react";
import RoundImage from "@/components/RoundImage";
import polishSquare from "@/images/polishSquare.jpg";
import Stars from "./Stars";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start rounded-lg shadow-xl shadow-gray-400 bg-white p-5 mb-10">
      <div className="w-1/5">
        <RoundImage source={polishSquare} altText="" />
      </div>
      <div className="w-4/5 text-justify pl-5">
        <h4 className="text-lg">Beth Avila</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          facere explicabo animi consequuntur, voluptas alias autem dolores ex
          deleniti consectetur accusamus sint nesciunt perferendis veritatis
          iure error doloremque pariatur totam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae facere explicabo animi
          consequuntur, voluptas alias autem dolores ex deleniti consectetur
          accusamus sint nesciunt perferendis veritatis iure error doloremque
          pariatur totam!
        </p>
        <div className="mt-5 justify-start">
          <Stars starsRate={5} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
