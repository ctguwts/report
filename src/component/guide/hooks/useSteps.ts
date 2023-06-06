import { useCallback, useState } from "react";

const useStep = (maxStep) => {
  const [step, setStep] = useState(1);

  const handleBack = useCallback(() => {
    if (step !== 0) {
      setStep(step - 1);
    }
  }, [step]);

  const handleNext = useCallback(() => {
    if (step !== maxStep) {
      setStep(step + 1);
    }
  }, [maxStep, step]);

  return [step, handleBack, handleNext];
};

export default useStep;
