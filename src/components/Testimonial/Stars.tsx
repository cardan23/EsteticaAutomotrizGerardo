import React from "react";
import styles from "./styles/main.module.css";
import StarsPros from "@/types/StarsPros";

const Stars = ({}: StarsPros) => {
  return (
    <div className="flex">
      <div
        className={`${styles.starPolygon} ${styles["star-md"]} border-yellow-300 transition duration-150 hover:scale-110 hover:border-yellow-400`}
      />
      <div
        className={`${styles.starPolygon} ${styles["star-md"]} border-yellow-300 transition duration-150 hover:scale-110 hover:border-yellow-400`}
      />
      <div
        className={`${styles.starPolygon} ${styles["star-md"]} border-yellow-300 transition duration-150 hover:scale-110 hover:border-yellow-400`}
      />
      <div
        className={`${styles.starPolygon} ${styles["star-md"]} border-yellow-300 transition duration-150 hover:scale-110 hover:border-yellow-400`}
      />
      <div
        className={`${styles.starPolygon} ${styles["star-md"]} border-yellow-300 transition duration-150 hover:scale-110 hover:border-yellow-400`}
      />
    </div>
  );
};

export default Stars;
