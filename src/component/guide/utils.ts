export const getGuideWrapperDom = () => {
  if (document.querySelector(".y-guide")) {
    return document.querySelector(".y-guide");
  }
  const guideWrapperDom = document.createElement("div");
  guideWrapperDom.setAttribute("class", "y-guide");
  document.body.appendChild(guideWrapperDom);
  return guideWrapperDom;
};

export const getDomByGuideKey = (nameKey, key) => {
  console.log(`${nameKey}=${key}`);
  document.querySelector(`[${nameKey}=${key}]`);
};
