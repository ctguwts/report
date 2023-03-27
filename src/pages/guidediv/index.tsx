import React, { useState } from "react";
import styles from "./styles.module.scss";
import { getStartGuide } from "../../component/guide/index.tsx";

const Guidediv = () => {
  getStartGuide();
  return (
    <div className={styles.container}>
      <div className={styles.first} data-guide="first_guide">
        这里是新手引导的第一步
      </div>
      <div className={styles.second} data-guide="second_guide">
        这里是新手引导的第二步
      </div>
    </div>
  );
};

export default Guidediv;
