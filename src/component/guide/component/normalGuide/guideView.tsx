import React, { useState } from "react";
import { getDomByGuideKey } from "../../utils.ts";

import NodrmalGuide from "./index.tsx";
import Mask from "../mask/index.tsx";

const NormalGuideView = ({ options }) => {
  const {
    nameKey = "data-guide",
    targetEle = document.body,
    zIndex = 999999,
    steps: stepConfig,
  } = options;

  const [steps, setSteps] = useState();

  const collectDoms = () => {
    const finalSteps = [];
    stepConfig.forEach((option) => {
      getDomByGuideKey(nameKey, option.key);
      console.log("当前的option是什么", option);
    });
  };

  collectDoms();
  return (
    <div>
      <Mask zIndex={zIndex} />
      <NodrmalGuide />
    </div>
  );
};

export default NormalGuideView;
