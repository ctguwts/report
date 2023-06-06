import React, { useEffect, useMemo, useState } from "react";
import useStep from "../../hooks/useSteps";
import classnames from "classnames";

import styles from "./index.module.scss";
import { getOffset } from "../../utils";
const NodrmalGuide = ({
  steps,
  zIndex = 999999,
  contentWidth = 384,
  title,
}) => {
  const [wrapperStyle, setWrapperStyle] = useState<any>();
  const [connectBarStyle, setConnectBarStyle] = useState<any>();
  const [step, handleStepBack, handleStepNext] = useStep(steps?.length);
  const [positionStyle, setPositionStyle] = useState();

  const curStepDetail = steps && steps[step];
  const stepsLength = steps?.length ?? 0;

  const content = useMemo(() => curStepDetail?.content, [curStepDetail]);

  const handleNext = () => {
    if (step != stepsLength - 1) {
      handleNext();
    }
  };

  const classNamesMap = {
    top: styles.normalTop,
    bottom: styles.normalBottom,
    left: styles.normalLeft,
    right: styles.normalRight,
  };

  const resiezeStyle = () => {
    if (curStepDetail) {
      const {
        dom: curItem,
        activeWrapperPadding = 16,
        placement,
      } = curStepDetail;
      if (curItem) {
        const { left, top, width, height } = getOffset(curItem);
        const offset = activeWrapperPadding;
        setWrapperStyle({
          left: left - offset,
          top: top - offset,
          width: width + offset * 2,
          height: height + offset * 2,
          padding: 4,
        });

        setPositionStyle(classNamesMap[placement]);
      }
    }
  };

  useEffect(() => {
    resiezeStyle();
  }, [steps]);

  const footer = () => {
    return <div>上一步</div>;
  };
  return (
    <div
      className={classnames(styles.normalWrapper, positionStyle)}
      style={{ ...wrapperStyle, zIndex: zIndex + 1 }}
    >
      <div
        className={styles.normalActiveWrapper}
        style={{ boxShadow: `0 0 0 100000px rgba(0,0,0,0.6)` }}
      />
      <div className={styles.normalConnectWrapper} style={connectBarStyle}>
        <div className={styles.normalRoundOuter}>
          <div className={styles.normalRoundInner} />
        </div>
        <div className={styles.normalConnectBar} />
      </div>
      <div
        className={classnames(
          styles.normalContentWrapper,
          styles.normalAlignAuto
        )}
        style={{ width: contentWidth }}
      >
        <div className={styles.normalTitle}>
          <div>{curStepDetail?.title || title}</div>
        </div>
        <div className={styles.normalContent}>{content}</div>
      </div>
      {footer()}
    </div>
  );
};

export default NodrmalGuide;
