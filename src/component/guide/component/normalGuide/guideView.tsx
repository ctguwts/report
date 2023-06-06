import React, { useEffect, useState } from "react";
import { getDomByGuideKey } from "../../utils";

import NodrmalGuide from "./index";
import Mask from "../mask/index";

const NormalGuideView = ({ options }) => {
  const {
    nameKey = "data-guide",
    targetEle = document.body,
    zIndex = 999999,
    steps: stepConfig,
  } = options;

  const [steps, setSteps] = useState<any[]>();

  const collectDoms = () => {
    const finalSteps: any[] = [];
    stepConfig.forEach((option) => {
      const dom = getDomByGuideKey(nameKey, option.key);
      finalSteps.push({
        ...option,
        dom,
      });
    });
    setSteps(finalSteps);
  };

  useEffect(() => {
    collectDoms();
  }, []);

  return (
    <div>
      <Mask zIndex={zIndex} />
      <NodrmalGuide {...options} steps={steps} />
    </div>
  );
};

export default NormalGuideView;
