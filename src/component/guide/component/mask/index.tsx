import React from "react";
import styles from "./index.module.scss";

export const Mask = ({ zIndex }) => {
  return <div className={styles.mask} style={{ zIndex }} />;
};

export default Mask;
