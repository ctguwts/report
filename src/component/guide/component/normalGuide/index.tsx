import React, { useState } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";
const NodrmalGuide = () => {
  const [wrapperStyle, setWrapperStyle] = useState();
  return (
    <div className={classnames(styles.normalWrapper, styles.normalPlacement)}>
      真正的NormalGuide
    </div>
  );
};

export default NodrmalGuide;
